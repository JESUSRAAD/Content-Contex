import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const UserCard = () => {
  const {user} = useContext(UserContext);

 console.log(user);
   

  


  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">User Information</div>
        <p className="text-gray-700 text-base">
          <strong>Pet Favorite:</strong> {user.pettFav}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Favorite Food:</strong> {user.foodFav}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Favorite Drink:</strong> {user.drinkFav}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Is Legal Age:</strong> {user.IsLegalAge ? "Yes" : "No"}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Is Drunk:</strong> {user.IsDrunk ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
