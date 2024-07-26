import React, { useContext } from "react";
import { NumberContext } from "../context/NumberContext";

const InputAndButton = () => {



  
  const {number,setNumber} = useContext(NumberContext);

const addContext=()=>{
  return setNumber( number+1)
}






  return (
   
      <button onClick={addContext} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">add</button>
  
  );
};

export default InputAndButton;
