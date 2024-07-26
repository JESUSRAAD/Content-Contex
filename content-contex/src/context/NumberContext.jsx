import React, { createContext, useState } from "react";

export const NumberContext = createContext(null);

export default function ContextProvider({children}) {

const[number,setNumber]=useState(0)

	return(
		<NumberContext.Provider value={{number,setNumber}}>
			{children}
		</NumberContext.Provider>
	)
}