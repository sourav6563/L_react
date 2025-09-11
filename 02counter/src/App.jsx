import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter === 10) return;
    setCounter((prevCounter) => prevCounter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter === 0) return;

    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Banku & sourav</h1>
      <h2>counter Value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
