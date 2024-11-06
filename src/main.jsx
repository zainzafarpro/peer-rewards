import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RewardContextProvider } from "./context/RewardContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RewardContextProvider>
      <App />
    </RewardContextProvider>
  </StrictMode>
);
