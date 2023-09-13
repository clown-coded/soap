import React from 'react'
import '../css/Footer.scss'
import logoRed from '../../public/assets/logo-red.png'

const Footer = () => {
  return (
    <div className='footer'>
        <h4>Authorised by Samantha Mitchell.     99/2 Willis St, Te Aro, Wellington.</h4>
        
        <img src={logoRed} alt="" />
        
        </div>
  )
}

export default Footer