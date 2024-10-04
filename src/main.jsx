import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/aos/dist/aos.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
