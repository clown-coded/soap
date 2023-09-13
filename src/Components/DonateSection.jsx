import React, { useState } from 'react'

const DonateSection = () => {
    const [selected, toggleSelected] = useState(null)
    const [prevSelected, togglePrevSelected] = useState(null)

    function toggleDonation(button) {
        if(!selected){
            toggleSelected(button)
        }
    }

  return (
    <section className='donate-section' id='donate'> 
    <h2>Be the change.</h2>
    <h3>Donate today</h3>

    <div className="donate-btn-container">
        <div className="donate-btn" >$10</div>
        <div className="donate-btn">$50</div>
        <div className="donate-btn">$100</div>
        <div className="donate-btn">Other</div>
    </div>

    <div className="donate-submit">Donate</div>
    </section>
  )
}

export default DonateSection