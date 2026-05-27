import { useEffect } from "react";

/**
 * Captures the browser's native beforeinstallprompt event and triggers the
 * native install modal. No custom UI is rendered.
 */
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
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }

    let deferredPrompt: BeforeInstallPromptEvent | null = null;
    let userClicked = false;
    let prompted = false;

    const triggerPrompt = async () => {
      if (prompted || !deferredPrompt) return;
      prompted = true;
      const p = deferredPrompt;
      deferredPrompt = null;
      try {
        await p.prompt();
        await p.userChoice;
      } catch {
        prompted = false;
      }
    };

    const onBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      deferredPrompt = e as BeforeInstallPromptEvent;
      // If user already interacted, fire immediately (within the same task
      // chain still counts as a user gesture in most cases).
      if (userClicked) void triggerPrompt();
    };

    const onUserGesture = () => {
      userClicked = true;
      void triggerPrompt();
    };

    const onAppInstalled = () => {
      deferredPrompt = null;
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    // Listen to multiple gesture types; keep listening (don't remove after first)
    // so subsequent clicks can also fire the prompt if the first attempt is
    // dismissed by browser timing.
    window.addEventListener("click", onUserGesture);
    window.addEventListener("touchend", onUserGesture);
    window.addEventListener("keydown", onUserGesture);
    window.addEventListener("appinstalled", onAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("click", onUserGesture);
      window.removeEventListener("touchend", onUserGesture);
      window.removeEventListener("keydown", onUserGesture);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);
};
