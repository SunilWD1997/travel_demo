import React from 'react'
import './contactus.css';

const Contactus = () => {
  return (
    <div className="contactus">
        <h2>Send a message to us!</h2>
        <form action="https://formspree.io/f/xayzdrzb" method='POST'>
          <input type="text" name="user_name" required autoComplete='off' placeholder='Enter Your Name' />
          <input type="email" name="user_email" required autoComplete='off' placeholder='Enter Your Email' />
          <input type="text" name="user_subject" required autoComplete='off' placeholder='Enter Your Subject' />
          <textarea name="" id="" cols="30" rows="10" autoComplete='off' placeholder='Message'></textarea>
          <button type='submit'>Send a message</button>
        </form>
    </div>
  )
}

export default Contactus