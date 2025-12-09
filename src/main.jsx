import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextApi from "./Components/ContextApi/ContextApi";
import AuthContext from "./Components/ContextApi/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <ContextApi>
        <App />
      </ContextApi>
    </AuthContext>
  </StrictMode>
);
