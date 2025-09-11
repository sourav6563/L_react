import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Youtube from "./learn.jsx";

function App() {
  const username = "sourav";
  return (
    <div>
      <h1>vite app</h1>
      <h1>react app {username}</h1>
      <Youtube />
    </div>
  );
}

export default App;
