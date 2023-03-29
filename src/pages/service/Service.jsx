import React from 'react'
import Hero from '../../components/hero/Hero';
import RecentTtrips from '../../components/recentTours/RecentTrips';
import './service.css';


const Service = () => {
  return (
<div className="service">
  <Hero heroImg='/images/service.png'
        title='Service'
        button_class='service_button'
        hero='hero_service'/>

        <RecentTtrips />
</div>
  )
}

export default Service