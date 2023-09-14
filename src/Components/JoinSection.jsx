import React, { useState } from 'react'
import emailjs from 'emailjs-com';

const userID = import.meta.env.VITE_USER_ID;
const serviceID = import.meta.VITE_SERVICE_ID;
const templateID = import.meta.VITE_TEMPLATE_ID;

const JoinSection = () => {
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [submitted, toggleSubmitted] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configure your EmailJS service
    emailjs.init('gHbvMTUMn6wIXkwbs');

    // Define your email template parameters
    const templateParams = {
      from_name: fname,
      to_email: recipientEmail,
    };

    // Send the email using EmailJS
    emailjs.send(
      'service_3nm1qae',
      'template_zakw43a',
      templateParams
    )
    .then((response) => {
      console.log('Email sent successfully!', response);
      toggleSubmitted(true)
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
    });
  };


  return (
    <section className='donate-section'> 
    <h2>Be part of the conversation.</h2>
    <h3>Join today</h3>
    {!submitted && 
    <form className="join-container" id='join'>
    <div className="fields-container">
    <input className="join-field" name="" placeholder='First name'
      value={fname}
      onChange={(e) => setfName(e.target.value)}/>
    <input className="join-field" name="lname" placeholder='Last name'
    value={lname}
    onChange={(e) => setlName(e.target.value)}/>
    <input className="join-field"  name='send_to'
    value={recipientEmail}
    onChange={(e) => setRecipientEmail(e.target.value)}
      placeholder='Email'/>
    </div>
    <label className="container">
    <input type="checkbox"/>
    <span className="checkmark"></span>
    Yes I'm interested in volunteering
    </label>
      


    <button className="join-submit" type='submit' onClick={handleSubmit} >Join</button>
    </form>
    }

    {submitted && 
    <div className="submitted-dialog">
      <h3>Thank you for joining the conversation, we look forward to hearing your voice!</h3>
    </div>
    }

          
    </section>
  )
}

export default JoinSection