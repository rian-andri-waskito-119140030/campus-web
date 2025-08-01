import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Welcome to Our Campus</h1>
            <p>
                Discover a place where innovation meets tradition, and students thrive in a vibrant community. Join us to explore endless opportunities for growth and learning.
            </p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero