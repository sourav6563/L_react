import React, { StrictMode } from "react";
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

const anotherElement = <a href="https://google.com">visit google</a>;
const reactElement = React.createElement(
  "a",
  { href: "https://facebook.com", target: "_blank" },
  "click me to visit facebook"
);

createRoot(document.getElementById("root")).render(<App />);
