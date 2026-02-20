import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from '../src/Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Services from './Pages/Services'
import PageNotFound from './Pages/PageNotFound'
import OurWork from './Pages/Ourwork'
import Hackathon from './Pages/Hackathon'
import Training from './Pages/Training'
import AI_Automation from './Pages/AI_Automation'
import Web from './Pages/Web'


function App() {
  return (
    <div className='bg-(--bg-color) text-white w-full min-h-screen'>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/ourwork' element={<OurWork/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>

      {/* Other routes */}

      <Route path='/hackathon' element={<Hackathon/>}/>
      <Route path='/training' element={<Training/>} />
      <Route path='/ai_automation' element={<AI_Automation/>} />
      <Route path='/web' element={<Web/>} />

     </Routes>
     <Footer/>
      
    </div>
  )
}

export default App
