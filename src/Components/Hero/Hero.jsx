import React from 'react'
import './Hero.css'
import Rajesh_photo from '../../assets/Rajesh_photo.png'

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <div className="image">
      <img src={Rajesh_photo} alt="" />

      </div>
        <h1><span>I'm Rajesh Gangadharam</span> front end developer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laboriosam adipisci facere sunt nesciunt minima, quasi sequi eveniet tempore molestias modi, asperiores temporibus quam architecto voluptates neque unde harum. Expedita!</p>
        <div className="hero-action">
          <div className="hero-connect">Connect With me</div>
          <div className="hero-resume">My resume</div>
        </div>

    </div>
  )
}

export default Hero