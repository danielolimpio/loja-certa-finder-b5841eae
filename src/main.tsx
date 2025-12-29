import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(<App />);

// Dispatch event for prerenderer to know when render is complete
// Wait longer to ensure React and react-helmet-async have fully rendered
if (typeof window !== 'undefined') {
  const dispatchRenderReady = () => {
    // Ensure helmet has time to inject meta tags
    requestAnimationFrame(() => {
      setTimeout(() => {
        document.dispatchEvent(new Event('render-ready'));
      }, 500);
    });
  };

  if (document.readyState === 'complete') {
    dispatchRenderReady();
  } else {
    window.addEventListener('load', dispatchRenderReady);
  }
}
