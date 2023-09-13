import React from 'react'
import logo from '../../public/assets/logo.png'

const MobileNav = () => {
  return (
    <div className="mobile-menu">
    <div className="mobile-nav-link">Our Values</div>
 <div className="mobile-nav-link">Our Charter</div>
 <div className="mobile-nav-link">Contact</div>

 <div className="mobile-btn-container">
 <div className="mobile-nav-button">Join</div>
 <div className="mobile-nav-button">Donate</div>
 </div>
 <img src={logo} alt="" className='mobile-logo'/>
 </div>
  )
}

export default MobileNav