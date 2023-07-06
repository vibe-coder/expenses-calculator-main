import React from 'react'
import "./styles/Calculation.scss"

function Calculation() {
  return (
    <div className='calculation-container'>

      {/* Salary data collection form */}
      
      <div id='income-wrapper' className="income-wrapper">
        <div className='income-input-wrapper'>
          <p>Your Income</p>  
          <p>Annually</p>
        </div>
        <div className='input-container'>
          <h1>$200,000</h1>
        </div>
      </div>

      {/* Expenses Data Collection Form */}

      <div className='expenses-input-wrapper'>
        <div className='expenses-title-div'>
          <p>Expenses</p>
        </div>
        <div className='expenses-div'>
          <form>
            <input className='expenses-title' placeholder='Expenses-1-title' type='string'/>
            <input className='expenses-amount' placeholder='Expenses-Amount' type='string'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Calculation