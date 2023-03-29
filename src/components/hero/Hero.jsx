import React from 'react'
import './hero.css'
import { NavLink } from 'react-router-dom'

const Hero = (props) => {
  return (
   <div className={props.hero} >
    <img src={props.heroImg} alt="" />

    <div className="hero_text">
        <h1 className={props.titile_class}>{props.title}</h1>
        <p>{props.text}</p>
        <button className={props.button_class} ><NavLink to='/contact'>{props.buttonText}</NavLink></button>
        
    </div>
   </div>
  )
}

export default Hero