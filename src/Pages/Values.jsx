import React from 'react'
import bg from '../../public/assets/bg.png'
import '../css/Values.scss'

const Values = () => {
  return (
    <div className='values-wrapper'>

      <img src={bg} className='home-bg' alt="" />
      <img src={bg} className='home-bg reverse' alt="" />
        <div className="charter-container">
        

        <h3>Our Charter</h3>

        </div>

        <div className="values-container">
        <h3>Our Values</h3>
        </div>

    </div>
  )
}

export default Values