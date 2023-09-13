import React, { useState } from 'react'

const JoinSection = () => {
  const [name, setName] = useState('')
  
  const handleSubmit = (e) => {
      e.preventDefault();

  }


  return (
    <section className='donate-section'> 
    <h2>Be part of the conversation.</h2>
    <h3>Join today</h3>

    <form className="join-container" id='join'>
      <div className="fields-container">
      <input className="join-field" name="fname" placeholder='First name'/>
      <input className="join-field" name="fname" placeholder='Last name'/>
      <input className="join-field" name="email" placeholder='Email'/>
      </div>
      <label className="container">
  <input type="checkbox"/>
  <span className="checkmark"></span>
  Yes I'm interested in volunteering
</label>
       
    </form>

    <div className="donate-submit">Join</div>
    </section>
  )
}

export default JoinSection