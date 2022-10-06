import React from 'react';
import './About.css';
import background from '../../srcimages/Lunch_atop_a_Skyscraper_-_Charles_Clyde_Ebbets.jpg'
import Navbar from '../Navbar';

export default function About() {
    return (
        <>
            <Navbar />
            <h1 className='about' style={{ backgroundImage: `url(${background})` }}>under construction</h1>
        </>
    )
}