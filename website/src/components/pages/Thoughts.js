import React from 'react';
import './Thoughts.css';
import background from '../../srcimages/Lunch_atop_a_Skyscraper_-_Charles_Clyde_Ebbets.jpg'
import Navbar from '../Navbar';

export default function Thoughts() {
  return (
    <>
      <Navbar />
      <h1 className='thoughts' style={{ backgroundImage: `url(${background})` }}>under construction</h1>
    </>
  )
}