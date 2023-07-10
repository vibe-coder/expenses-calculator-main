import React from 'react'
import "./styles/Footer.scss"
import gitHub from "../images/github.svg"
import Twitter from "../images/twitter.svg"
import LinkedIn from "../images/linkedIn.svg"
import MySite from "../images/external-link.svg"

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-wrapper'>
        <h1 className='header'>Get In Touch</h1>
        <div className="form">
          
          <div className="box box1">
            <div>
              <label className='label-1' htmlFor="name" >Name</label>
              <input className='input-1' type='text' id='name' name='name'/>
            </div>
          </div>

          <div className="box box2">
            <div>
              <label className='label-2' htmlFor="mail" >Email</label>
              <input className='input-2' type='text' id='mail' name='mail'/>
            </div>
          </div>

          <div className="box box3">
            <div>
              <div className='message-wrapper'>
              <label className='label-3' htmlFor="message" >Message</label>
              <textarea className='input-3'  type='text' id='message'/>
              <input className='submit-button' type='submit' value="Submit"/>
              </div>
            </div>
          </div>

          <div className="box box4">
            <div>
              <div className='vibe-coder'>
                <div className='contact'>
                  <a className='icon-link' href='https://www.linkedin.com/in/david-irinyemi-395220162/' target='blank'>
                    <img className='icon' src={LinkedIn} alt='linkedin'/>
                  </a>
                  <a className='icon-link' href='https://github.com/vibe-coder' target='blank'>
                    <img className='icon' src={gitHub} alt='giuthub'/>
                  </a>
                  <a className='icon-link' href='https://twitter.com/vibe_coder' target='blank'>
                    <img className='icon' src={Twitter} alt='twitter'/>
                  </a>
                  <a className='icon-link' href='https://vibe-coder.netlify.app/' target='blank'>
                    <img className='icon' src={MySite} alt='site'/>
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
