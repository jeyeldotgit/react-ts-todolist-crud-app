import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import AppProviders from "./globalStates/AppProviders.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppProviders>
      <App />
    </AppProviders>
  </BrowserRouter>
);
