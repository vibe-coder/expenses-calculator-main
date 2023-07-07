import React from 'react'
import "./styles/Footer.scss"

function Footer() {
  return (
    <div className='footer-container'>
      <h1>Get In Touch</h1>
      <form>
        <label className='label-1' for="name" >Name</label>
        <input className='input-1' type='text' id='name' name='name'/>
        <label className='label-2' for="mail" >Email</label>
        <input className='input-2' type='text' id='mail' name='mail'/>
        <label className='label-3' for="message" >Message</label>
        <input className='input-3' type='text' id='message' name='message'/>
        <input className='submit-button' type='submit' value="Submit"/>
      </form>

      <div className='vibe-coder'>
        <div>Contact</div>
        <p>vibe-coder (c) 2023</p>
      </div>
    </div>
  )
}

export default Footer