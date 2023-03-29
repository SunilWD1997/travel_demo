import React from 'react'
import './card.css';

const Card = ({item}) => {
    
  return (
    <div className="card">
        <img src={item.image}alt="" />
        <h3>{item.title}</h3>
        <p>{item.text}</p>
    </div>
  )
}

export default Card