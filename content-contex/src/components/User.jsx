import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const User = () => {
  const { user, setUser,loading, setLoading} = useContext(UserContext);
  
const renderUser=()=>{
    setUser({
        pettFav: "perro",
        foodFav: "taco",
        drinkFav: "ron",
        IsLegalAge: true,
        IsDrunk: true,
      });
      setLoading(false)
     return user
}

useEffect(() => {
  if (loading) {
    renderUser();
    setLoading(false);
  }
}, [loading]);
console.log(user);

  return <div>
     {loading ? (
    <p>Cargando...</p>
  ) : (<p>user</p> )}
  </div>;
};

export default User;
