import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/Pages/Home'
import Navbar from '../src/Components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
     </Routes>
     <Footer/>
      
    </>
  )
}

export default App
