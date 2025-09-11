import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
 const newname = {
    name: "honey",
    price: 90,
  };

  return (
    <>
      <h1 className="bg-slate-600 text-white rounded-2xl">Tailwind Test</h1>
      <Card priceOne="29" priceTwo="70" name={newname} />
    </>
  );
}

export default App;
