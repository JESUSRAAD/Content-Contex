import React, { useContext } from 'react'
import { NumberContext } from '../context/NumberContext'

const PContainer = () => {

    const{number}=useContext(NumberContext)

       

  return (
   

        <p>{number}</p>
   
  )
}

export default PContainer