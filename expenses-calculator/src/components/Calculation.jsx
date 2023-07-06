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
          <p>Currency</p>
        </div>
        <div className='expenses-div'>
          <form>
            <div className='form-inputs'>
              <div className='expenses-input-set'>
                <input className='expenses-title' placeholder='Expenses' type='text'/>
                <input className='expenses-amount' placeholder='Amount' type='number'/>
              </div>
              <div className='expenses-input-set'>
                <input className='expenses-title' placeholder='Expenses' type='text'/>
                <input className='expenses-amount' placeholder='Amount' type='number'/>
              </div>
              <div className='expenses-input-set'>
                <input className='expenses-title' placeholder='Expenses' type='text'/>
                <input className='expenses-amount' placeholder='Amount' type='number'/>
              </div>
            </div>
          </form>

          <div className='add-button-div'>
              <button className='add-button'>+</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Calculation