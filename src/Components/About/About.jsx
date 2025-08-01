import React from 'react'
import './About.css'
import aboutImage from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={aboutImage} alt="" className='about-img'/>
            {/* <img src={play_icon} alt="" className='play-icon'/> */}
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>
                Welcome to our university, where we are dedicated to shaping the future of education. Our mission is to provide a transformative learning experience that empowers students to become leaders in their fields. With a commitment to academic excellence, innovation, and community engagement, we strive to create an inclusive environment that fosters personal and professional growth.
            </p>
            <p>
                At our university, we believe in the power of knowledge and its ability to change lives. Our diverse programs and expert faculty are here to guide you on your educational journey, equipping you with the skills and knowledge needed to thrive in a rapidly evolving world. Join us as we embark on a path of discovery, collaboration, and excellence.
            </p>
            <p>
                Together, we can build a brighter future for all. Explore our programs, connect with our community, and discover the endless possibilities that await you at our university.
            </p>
        </div>
    </div>
  )
}

export default About