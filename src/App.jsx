import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bottom from './Components/bottom-nav/bottom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Work from './Components/Work/Work'

function App () {
  return (

    <>
    <BrowserRouter>
      <Bottom />  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App