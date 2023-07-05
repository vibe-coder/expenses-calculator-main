import React from 'react'
import "./styles/Calculation.scss"

function Calculation() {
  return (
    <div className='calculation-container'>
      
      <div id='income-wrapper' className="income-wrapper">
        
        <div className='income-input-wrapper'>
          <p>Your Income</p>  
          <p>Annually</p>
        </div>

        <div className='input-container'>
          <h1>$200,000</h1>
        </div>

      </div>

      <div className='expenses-input-wrapper'>
        <p>Expenses</p>  
      </div>

    </div>
  )
}

export default Calculation