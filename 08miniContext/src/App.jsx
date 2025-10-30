import { useState } from "react";

import "./App.css";
import { UserContextprovider } from "./context/UserContext";

function App() {
  return (
    <UserContextprovider>
      <h1>Honey Singh</h1>
    </UserContextprovider>
  );
}

export default App;
