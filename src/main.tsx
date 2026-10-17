import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";

const rootElement = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (rootElement.querySelector("#initial-page-loader")) {
  createRoot(rootElement).render(app);
} else {
  hydrateRoot(rootElement, app);
}
