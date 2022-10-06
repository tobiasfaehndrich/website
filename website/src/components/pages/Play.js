import React from 'react';
import './Play.css';
import background from '../../srcimages/Lunch_atop_a_Skyscraper_-_Charles_Clyde_Ebbets.jpg'
import Navbar from '../Navbar';

export default function Play() {
  return (
    <>
      <Navbar />
      <h1 className='play' style={{ backgroundImage: `url(${background})` }}>under construction</h1>
    </>
  )

}