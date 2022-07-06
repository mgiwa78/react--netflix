import React, { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setSetUser] = useState(5);
  const UpdateUser = (userState) => {
    console.log(userState);
    setSetUser(userState);
  };
  return (
    <UserContext.Provider value={{ UpdateUser, user }}>
      {children}
    </UserContext.Provider>
  );
};
