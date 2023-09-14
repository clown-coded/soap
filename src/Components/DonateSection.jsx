import React, { useState, useEffect} from 'react'

const DonateSection = () => {
    const [selected, toggleSelected] = useState(null)
    const [prevSelected, togglePrevSelected] = useState(null)
    const [donated, toggleDonated] = useState(false)


    useEffect(() => {
      if(selected){
        selected.classList.add('selected')
      }
      
      
    }, [selected])
  
    // REMOVE ACTIVE CLASS FROM PREVIOUS HEADER
    useEffect(() =>{
      if (prevSelected){
        prevSelected.classList.remove('selected')
      }
      
  
    }, [prevSelected])

    function activeHeading(element) {
      togglePrevSelected(selected)
     toggleSelected(element)
      
      }


  return (
    <section className='donate-section' id='donate'> 
    <h2>Be the change.</h2>
    <h3>Donate today</h3>

    {!donated && 
    <div><div className="donate-btn-container">
    <div className="donate-btn" onClick={(e) =>{activeHeading(e.target)}} >$10</div>
    <div className="donate-btn" onClick={(e) =>{activeHeading(e.target)}}>$50</div>
    <div className="donate-btn" onClick={(e) =>{activeHeading(e.target)}}>$100</div>
    <div className="donate-btn" onClick={(e) =>{activeHeading(e.target)}}>Other</div>
</div>

<div className="donate-submit" onClick={() =>{
  toggleDonated(!donated)}}>Donate</div></div>
    }

    {donated && 
    <h3 className='donated'>Thank you for your contribution to cleaner politics in New Zealand!</h3>
    }

    
    </section>
  )
}

export default DonateSection