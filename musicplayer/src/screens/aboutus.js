import React from 'react'
import SocialButt from './SocialButtons/SocialButt'
import './SocialButtons/aboutus.css'

export default function AboutUs() {
  return (
    <div className='screen-container'>
      <a className='Head-text'>ABOUT US</a>
      <br/>
      <a className='aboutText ml52'>Hello, my name is Andrey and this is my weather app made with React.</a>
      <br/>
      <a className='Head-text'>WE ARE IN SOCIAL NETWORKS</a>
      <br/>
      <SocialButt title="VK" to="https://vk.com/andrey.sinus"/>
      <SocialButt title="Telegram" to="https://t.me/andrey_sinus"/>
      <SocialButt title="Instagram" to="https://instagram.com/andrey.sinus"/>
    </div>
  )
}