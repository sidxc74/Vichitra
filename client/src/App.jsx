import { useState } from 'react'
import useAuthStore from './state/clientState'

import './App.css'

function App() {

  const isauth =  useAuthStore((state) => state.isAuthenticated)

  if(isauth) console.log("i am login")

  return (
   
        <p className="text-3xl font-bold underline">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      
  )
}

export default App
