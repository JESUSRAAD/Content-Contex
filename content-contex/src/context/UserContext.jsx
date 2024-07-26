import React, { createContext } from "react";

export const UserContext = createContext(null);

export default function UserContextProvider({ children }) {
  const user= {
    pettFav: "perro",
    foodFav: "taco",
    drinkFav: "ron",
    IsLegalAge: true,
    IsDrunk: true,
  }

 

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}
