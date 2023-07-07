import React from 'react'
import "./styles/Footer.scss"
import gitHub from "../images/social-01.png"
import Twitter from "../images/social-02.png"
import LinkedIn from "../images/social-03.png"
import MySite from "../images/icons8-linking-96.png"

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
        <div className='contact'>
          <a className='icon-link' href='www.linkedin.com' target='blank'>
            <img className='icon' src={LinkedIn} alt='linkedin'/>
          </a>
          <a className='icon-link' href='www.linkedin.com' target='blank'>
            <img className='icon' src={gitHub} alt='linkedin'/>
          </a>
          <a className='icon-link' href='www.linkedin.com' target='blank'>
            <img className='icon' src={Twitter} alt='linkedin'/>
          </a>
          <a className='icon-link' href='www.linkedin.com' target='blank'>
            <img className='icon' src={MySite} alt='linkedin'/>
          </a>
        </div>
        <p>vibe-coder (c) 2023</p>
      </div>
    </div>
  )
}

export default Footer
