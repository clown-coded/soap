import {useState} from 'react'
import bg from '../../public/assets/bg.png'
import sam from '../../public/assets/figure2.png'
import '../css/Contact.scss'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/8323b6c0-52b8-11ee-9a5e-cf86fe56739d";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

 


  return (
    <div className='contact-page'>
      <div className="header-section">
        
        <div className="figure-container">
        <img src={sam} className='figure-contact' alt="" />
          </div>

        <img src={bg} className='home-bg' alt="" />
     
        <div className="contact-form-container">
          <h2>Contact Us</h2>
          
             {!submitted && 
             <div>
                <p>Our leader, Samantha Mitchell, loves hearing directly from her constituents. Make your voice heard and help us bring a fresh voice to New Zealand politics.</p>
                <form   action={FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST">
                    <input type="text" className='join-field' placeholder="Your name" name="name" required />
                    <input type="email" className='join-field' placeholder="Email" name="email" required />
                    <textarea className='join-field text-box' placeholder="Your message" name="message" required />
                    <button type="submit" className="join-submit"> Send a message </button>
                </form>
              </div>
             
             }

          {submitted && 
          <h3>Thank you for contacting Samantha, she will be in touch soon!</h3>
          }
          


        </div>
        
        
        </div>
        
        
    </div>
  )
}

export default Contact