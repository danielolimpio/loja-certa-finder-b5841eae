import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(<App />);

// Dispatch event for prerenderer to know when render is complete
window.addEventListener('load', () => {
  // Small delay to ensure React has finished hydrating
  setTimeout(() => {
    document.dispatchEvent(new Event('render-ready'));
  }, 100);
});
