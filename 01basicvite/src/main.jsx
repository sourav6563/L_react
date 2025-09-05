import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const Myapp = () => {
  return (
    <div>
      <h1>vite app!</h1>
      <h1>react app!</h1>
    </div>
  );
};
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Myapp />
  </StrictMode>
);
