import React from 'react'
import logo from '../../public/assets/logo.png'
import { Link } from 'react-router-dom'

const MobileNav = ({closeMethod}) => {
  return (
    <div className="mobile-menu">
    <Link to='/values'><div className="mobile-nav-link" onClick={() =>{
    closeMethod()
    document.getElementById('toggle-menu').classList.toggle('active')}}>Our Values</div></Link>
    <Link to='/values'><div className="mobile-nav-link" onClick={() =>{
    closeMethod()
    document.getElementById('toggle-menu').classList.toggle('active')}}>Our Charter</div></Link>
    <Link to='/contact'><div className="mobile-nav-link" onClick={() =>{
    closeMethod()
    document.getElementById('toggle-menu').classList.toggle('active')}}>Contact</div></Link>

 <div className="mobile-btn-container">
 
 <Link to='/'><div className="mobile-nav-button" onClick={() =>{
    closeMethod()
    document.getElementById('toggle-menu').classList.toggle('active')}}>Join</div></Link>
 <Link to='/'><div className="mobile-nav-button" onClick={() =>{
    closeMethod()
    document.getElementById('toggle-menu').classList.toggle('active')}}>Donate</div></Link>
 </div>

 <img src={logo} alt="" className='mobile-logo'/>
 </div>
  )
}

export default MobileNav