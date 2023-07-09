import React from 'react'
import "./styles/Footer.scss"
import gitHub from "../images/social-01.png"
import Twitter from "../images/social-02.png"
import LinkedIn from "../images/social-03.png"
import MySite from "../images/icons8-linking-96.png"

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-wrapper'>
        <h1 className='header'>Get In Touch</h1>
        <div class="form">
          <div class="box box1">
            <div>
              <label className='label-1' htmlFor="name" >Name</label>
              <input className='input-1' type='text' id='name' name='name'/>
            </div>
          </div>

          <div class="box box2">
            <div>
            <label className='label-2' htmlFor="mail" >Email</label>
            <input className='input-2' type='text' id='mail' name='mail'/>

            </div>
          </div>

          <div class="box box3">
            <div>
              <div className='message-wrapper'>
              <label className='label-3' htmlFor="message" >Message</label>
              <textarea className='input-3'  type='text' id='message'/>
              <input className='submit-button' type='submit' value="Submit"/>
              </div>
            </div>
          </div>

          <div class="box box4">
            <div>
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
                <p className='me'>vibe-coder (c) 2023</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Footer
