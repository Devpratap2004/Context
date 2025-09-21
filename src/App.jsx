import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './Components/Profile'
import Login from './Components/login'


function App() {
  

  return (
    <UserContextProvider>
      <h1 className="text-3xl bg-gray-800 text-white font-bold">Hello World</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
