import React from 'react';
import AboutUs from '../../components/aboutus/AboutUs';
import Hero from '../../components/hero/Hero';
import './about.css';


const About = () => {
  return (
    <div className="about">
        <Hero heroImg='/images/about.png'
              title='About'
              height='about_height'
              titile_class='about_title'
              button_class='about_button'
              hero='hero_about'/>

              <AboutUs />
    </div>
  )
}

export default About