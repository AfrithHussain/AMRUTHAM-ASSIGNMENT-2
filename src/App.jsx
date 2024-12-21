import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Pages/Navbar'
import ProfileBanner from './Pages/ProfileBanner'

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<ProfileBanner/>}/>  
      </Routes>
    </div>
  )
}

export default App