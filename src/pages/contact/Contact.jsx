import React from 'react'
import Contactus from '../../components/contactus/Contactus';
import Hero from '../../components/hero/Hero';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact'>
        <Hero heroImg='/images/contact.png'
        title='Contact'
        button_class='contact_button'
        hero='hero_contact'/>

        <Contactus />
    </div>
  )
}

export default Contact