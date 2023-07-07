import React from 'react'
import "./styles/Container.scss"
import logo from "../images/EXcal-logo-03.png"
import subImage from "../images/sub-hero-image.png"
import Calculation from './Calculation'
import Footer from './Footer'
import { useRef } from 'react'

function Container() {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior:"smooth"})
  };

  return (
    <div className='component-container'>

      {/* Hero Section */}

      <div className="hero-section">
        <nav>
          <img className='logo' src={logo} alt='logo'/>
        </nav>
        <main>
          <h1>Be in charge <br/> of your <br/> Expenses!</h1>
          <p>With EXcal, you will always be one step <br/> ahead of all your financial expenses. <br/> No late surprises!</p>
          <div className='button-wrapper'>
          <button onMouseUp={handleClick}>Get Started</button>
          </div>
        </main>
      </div>

        {/* Sub-Hero Section */}

      <div className='sub-hero-section'>
        <img className='sub-image' src={subImage} alt='sub-img' />
      </div>

      <div className='description'>
        <h1>Be Stepps <br/> Ahead!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officiis molestiae modi tempore? Cum dolor modi molestias consectetur inventore, molestiae explicabo! Libero amet saepe perspiciatis blanditiis molestiae provident nostrum dolorum?</p>
        <button>Get Started</button>
      </div>


      <div ref={ref}>
        <Calculation />
      </div>      
      <Footer/>
    </div>
  )
}

export default Container