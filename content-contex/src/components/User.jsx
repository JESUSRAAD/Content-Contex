import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const User = () => {
  const {  setUser } = useContext(UserContext);

const renderUser=()=>{
    setUser({
        pettFav: "perro",
        foodFav: "taco",
        drinkFav: "ron",
        IsLegalAge: true,
        IsDrunk: true,
      });
}

  useEffect(() => {
    renderUser()
  }, []);

  return <div>User</div>;
};

export default User;
