import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserContextProvider({ children }) {
  const [user, setUser]= useState(null)
  const [loading, setLoading] = useState(true);
 

  return (
    <UserContext.Provider value={{user,setUser,loading, setLoading}}>
      {children}
    </UserContext.Provider>
  );
}
