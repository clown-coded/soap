import { useState } from 'react'
import Nav from './Components/Nav'
import './css/Reset.scss'
import './css/Global.scss'
import Home from './Pages/Home'

import Footer from './Components/Footer'
import Links from './Links'
import { HashRouter } from 'react-router-dom'


function App() {

  return (
    <HashRouter>
    <Nav/>
    <Links/>
    <Footer/>
    </HashRouter>
  )
}

export default App
