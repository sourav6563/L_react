import { useState } from "react";

import "./App.css";
import { UserContextprovider } from "./context/UserContext.jsx";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";

function App() {
  return (
    <UserContextprovider>
      <h1>Honey Singh</h1>
      <Login />
      <Profile />
    </UserContextprovider>
  );
}

export default App;
