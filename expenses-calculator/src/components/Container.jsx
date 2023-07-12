import React from 'react'
import "./styles/Container.scss"
import logo from "../images/EXcal-logo-03.png"
import savings1 from "../images/savings_01.png"
import savings2 from "../images/savings-02.png"
import Calculation from './Calculation'
import Footer from './Footer'
import { useRef } from 'react'

function Container() {

  const productRef = useRef(null);

  const handleClick = () => {
    productRef.current?.scrollIntoView({behavior:"smooth", block:'start'})
  };

  const contactRef = useRef(null);

  const contactClick = () => {
    contactRef.current?.scrollIntoView({behavior:"smooth", block:'start'})
  }

  const aboutRef = useRef(null)

  const aboutClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth", block:'start'})
  }



  return (
    <div className='component-container'>

      {/* Hero Section */}
      <div className="hero-section">
        <nav>
          <img className='logo' src={logo} alt='logo'/>
          <div className='links'>
            <button className='link-button' onClick={aboutClick}>About us</button>
            <button className='link-button' onMouseUp={handleClick}>Product</button>
            <button className='link-button' onClick={contactClick}>Contact</button>
          </div>
        </nav>

        <main className='main'>
          <div className='left-section'>
            <h1>Be in charge <br/> of your <br/> Expenses!</h1>
            <p>With EXcal, you will always be one step <br/> ahead of all your financial expenses. <strong>No late surprises!</strong></p>
            <div className='button-wrapper'>
              <button onMouseUp={handleClick}>Get Started</button>
            </div>
          </div>

          <div className='right-section'>
            <div className='hero-image-wrapper'>
              <img className='hero-image' src={savings1} alt='sub-img' />
            </div>
          </div>
        </main>
      </div>

      <div ref={aboutRef} className='description-wrapper'>
        <div className='description-left'>
          <h1>Be Steps <br/> Ahead!</h1>
          <p>Budget planning and handling expenses sometimes can be difficult and hard to track. So, if you’re looking for ways to manage your financially stressful situation, you are at the right place!  </p>
          <button onMouseUp={handleClick}>Get Started</button>
        </div>

        <div className='description-right'>
          <img className='description-image' src={savings2} alt='sub-img'/>
        </div>
      </div>

      <div className='divider'>
        <h2>.</h2>
      </div>


      <div ref={productRef}>
        <Calculation />
      </div>     

      <div ref={contactRef}>
        <Footer/>
      </div>
    </div>
  )
}

export default Container