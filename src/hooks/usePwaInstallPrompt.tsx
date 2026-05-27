import { useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
  prompt: () => Promise<void>;
}

export const usePwaInstallPrompt = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isInIframe = (() => {
      try { return window.self !== window.top; } catch { return true; }
    })();
    const isPreviewHost =
      window.location.hostname.includes("lovable.app") ||
      window.location.hostname.includes("lovableproject.com");

    if ("serviceWorker" in navigator && !isInIframe && !isPreviewHost) {
      navigator.serviceWorker.register("/sw.js")
        .then(() => console.log("[PWA] SW registered"))
        .catch((err) => console.warn("[PWA] SW register failed", err));
    }

    // Detect already installed (standalone) — skip prompt entirely
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      // @ts-ignore iOS
      window.navigator.standalone === true;
    if (isStandalone) {
      console.log("[PWA] Already installed — skipping prompt");
      return;
    }

    let deferredPrompt: BeforeInstallPromptEvent | null = null;
    let firing = false;

    const fire = () => {
      if (firing || !deferredPrompt) return;
      firing = true;
      const p = deferredPrompt;
      deferredPrompt = null;
      console.log("[PWA] Calling prompt()");
      // Call synchronously inside the user gesture
      p.prompt();
      p.userChoice
        .then((choice) => {
          console.log("[PWA] User choice:", choice.outcome);
          firing = false;
        })
        .catch((err) => {
          console.warn("[PWA] prompt() rejected", err);
          firing = false;
          deferredPrompt = p; // restore so next click can try again
        });
    };

    const onBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      deferredPrompt = e as BeforeInstallPromptEvent;
      console.log("[PWA] beforeinstallprompt captured");
    };

    const onUserGesture = () => {
      if (deferredPrompt) fire();
      else console.log("[PWA] click but no deferredPrompt yet");
    };

    const onAppInstalled = () => {
      console.log("[PWA] appinstalled");
      deferredPrompt = null;
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    document.addEventListener("click", onUserGesture, true);
    document.addEventListener("touchend", onUserGesture, true);
    window.addEventListener("appinstalled", onAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      document.removeEventListener("click", onUserGesture, true);
      document.removeEventListener("touchend", onUserGesture, true);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);
};
