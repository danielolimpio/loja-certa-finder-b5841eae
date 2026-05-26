import { useEffect } from "react";

/**
 * Captures the browser's native beforeinstallprompt event (Android/Chrome/Edge desktop)
 * and triggers it on the user's first click — surfacing the browser's native
 * "Add to Home Screen" / "Install app" prompt. No custom UI is rendered.
 *
 * iOS Safari does not expose a programmatic install API; users must use the
 * native Share → "Add to Home Screen" menu. We intentionally do not render a
 * custom modal, per the requirement to use only native browser interfaces.
 */
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
  prompt: () => Promise<void>;
}

export const usePwaInstallPrompt = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let deferredPrompt: BeforeInstallPromptEvent | null = null;
    let promptShown = false;

    const onBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      deferredPrompt = e as BeforeInstallPromptEvent;
    };

    const onFirstClick = async () => {
      if (promptShown || !deferredPrompt) return;
      promptShown = true;
      try {
        await deferredPrompt.prompt();
        await deferredPrompt.userChoice;
      } catch {
        // user gesture/timing issues — silently ignore
      } finally {
        deferredPrompt = null;
        window.removeEventListener("click", onFirstClick);
      }
    };

    const onAppInstalled = () => {
      deferredPrompt = null;
      window.removeEventListener("click", onFirstClick);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("click", onFirstClick);
    window.addEventListener("appinstalled", onAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("click", onFirstClick);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);
};
