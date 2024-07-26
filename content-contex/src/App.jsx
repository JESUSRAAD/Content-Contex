import React from 'react'
import InputAndButton from './components/InputAndButton'
import PContainer from './components/PContainer'
import ContextProvider from './context/NumberContext'
 import UserContextProvider from './context/UserContext'
import UserCard from './components/UserCard'
import User from './components/User'

const App = () => {
  return (
    <UserContextProvider>
    <ContextProvider>
      <div>

 <InputAndButton/>
 <PContainer/>
 <UserCard/>
 <User/>
      </div>

    </ContextProvider>
    </UserContextProvider>
  )
}

export default App