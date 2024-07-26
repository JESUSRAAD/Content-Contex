import React from 'react'
import InputAndButton from './components/InputAndButton'
import PContainer from './components/PContainer'
import ContextProvider from './context/NumberContext'
 import UserContextProvider from './context/UserContext'
import UserCard from './components/UserCard'

const App = () => {
  return (
    <UserContextProvider>
    <ContextProvider>
      <div>

 <InputAndButton/>
 <PContainer/>
 <UserCard/>
      </div>

    </ContextProvider>
    </UserContextProvider>
  )
}

export default App