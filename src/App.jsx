import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
     </Routes>
     <Footer/>
      
    </>
  )
}

export default App
