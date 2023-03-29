import React from 'react'
import './recentTrips.css';
import Card from '../card/Card';
import { TripData } from './TripData';
const RecentTtrips = () => {
    
    return (
    <div className="recenttrips">
        <h2>Recent Trip's</h2>
        <p>You can discover unique destinations using google Maps.</p>
        <div className="cards">
           {TripData?.map((item)=>{
                  return <Card key={item.id} item={item}/>
           })}
        </div>
    </div>
)
  
}

export default RecentTtrips