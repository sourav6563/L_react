import React, { useState } from "react";

import { UserContext } from "./UserContext.js";

export const UserContextprovider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={(user, setUser)}>
      {children}
    </UserContext.Provider>
  );
};
