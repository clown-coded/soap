import React from 'react'
import bg from '../../public/assets/bg.png'
import tagline from '../../public/assets/tagline.mp4'
import sam from '../../public/assets/test.png'
import '../css/Home.scss'
import DonateSection from '../Components/DonateSection'
import JoinSection from '../Components/JoinSection'

const Home = () => {

 
    
  

  return (
    <div className='home-page page-section'>
      <div className="header-section">
        <video  src={tagline} autoPlay loop muted className='home-tagline' />
        <div className="figure-container">
          <img src={sam} className='figure' alt="" />
          </div>
        <img src={bg} className='home-bg' alt="" />
        </div>
        <DonateSection/>
        <JoinSection/>
        
    </div>
  )
}

export default Home