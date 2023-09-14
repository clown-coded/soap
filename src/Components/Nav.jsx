import {useState} from 'react'
import logo from '../../public/assets/logo.png'
import '../css/Nav.scss'
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';

const Nav = () => {
  const [menuIsOpen, openMenu] = useState(false);

  const toggleMenu = () => {
    openMenu(!menuIsOpen)  
}

  return (
    <div className='nav-wrapper'>
        <div className="logo-container">
            <Link to='/'><img src={logo} alt="" className='logo'/></Link>
        </div>

        <div className="mobile-nav">
        <div className="button_container hover" onClick={() => {
            toggleMenu()
            document.getElementById('toggle-menu').classList.toggle('active')
            } } id="toggle-menu">
                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>
                <span className="hidden"></span>
            </div>

            {menuIsOpen && 
            <MobileNav closeMethod={toggleMenu}/>
            }

        </div>
        

        <div className="nav-links-wrapper">

           
            <Link to='/values'><div className="nav-link">Our Values.</div></Link>
            <Link to='/values'><div className="nav-link">Our Charter.</div></Link>
            <Link to='/contact'><div className="nav-link">Contact.</div></Link>
            
            <div className="nav-btn-container">
            
            <Link to='/'><div className="nav-button">Donate</div></Link>
            <Link to='/'><div className="nav-button">Join</div></Link>
        </div>


        </div>

       
       
    </div>
  )
}

export default Nav