import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Values from './Pages/Values'
import Contact from './Pages/Contact'

const Links = () => {
  return (
    <>
    
    <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/values' element={<Values />} />
      
    </Routes>
    
    </>
  )
}

export default Links