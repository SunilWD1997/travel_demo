import React from 'react'
import Destination from '../../components/destination/Destination'
import Hero from '../../components/hero/Hero'
import RecentTtrips from '../../components/recentTours/RecentTrips'

const Home = () => {
  return (
    <div className="home">
      <Hero heroImg='/images/home.png' 
            title='Your Journey Your Story'
            text='Choose Your Favourite Destination'
            buttonText='Travel Plan'
            hero='hero'
            />
            <Destination/>
           <RecentTtrips />
           
    </div>
  )
}

export default Home