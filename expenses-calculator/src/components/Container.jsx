import React from 'react'
import "./styles/Container.scss"
import logo from "../images/EXcal-logo-03.png"
import subImage from "../images/sub-hero-image.png"
import Calculation from './Calculation'

function Container() {
  return (
    <div className='component-container'>
      <div className="hero-section">

        <nav>
          <img className='logo' src={logo} alt='logo'/>
        </nav>

        <main>
          <h1>Be in charge <br/> of your Expenses!</h1>
          <p>With EXcal, you will always be one step ahead of all your financial expenses. No late surprises!</p>
          
          <div className='button-wrapper'>
          <button>Get Started</button>
          </div>
        </main>

      </div>

      <div className='sub-hero-section'>
        <img className='sub-image' src={subImage} alt='sub-img' />
      </div>



      <Calculation/>
    </div>
  )
}

export default Container