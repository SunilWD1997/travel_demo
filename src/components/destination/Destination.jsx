import React from 'react'
import './destination.css';
import DestinationData from './DesinationData';

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>

      <DestinationData className='first_dest'
        heading='Taal Volcano, Batangas'
        text='one of thae most iconic views in luzon, Mt. Total boasts a volcano inside on island. If You fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you will see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home'
        img1='/images/dest1.png'
        img2='/images/dest2.png' />

      <DestinationData className='first_dest_reverse'
        heading='Mt. Daguldul, Batangas'
        text='one of thae most iconic views in luzon, Mt. Total boasts a volcano inside on island. If You fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you will see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home'
        img1='/images/dest3.png'
        img2='/images/dest4.png' />

    </div>
  )
}

export default Destination