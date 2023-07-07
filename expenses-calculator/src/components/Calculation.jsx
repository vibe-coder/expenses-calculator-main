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
          <p>$</p>
          <input className='salary-amount' placeholder='Amount' type='number'/>
        </div>
      </div>

      {/* Expenses Data Collection Form */}

      <div className='expenses-input-wrapper' id='calculation'>
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
            <div className='add-button-div'>
              <button className='add-button'>+</button>
              <button className='add-button'>-</button>
            </div>
            <div className='calculate-button-wrapper'><button className='calculate-button'>Calculate</button></div>
          </form>
        </div>
      </div>


      {/* Expenses Data Collection Form */}

      <div className='summary-wrapper'>
        <div className='summary-title-div'>
          <h1>Summary</h1>
        </div>

        <div className='expenses-summary'>
          <p>Cable TV</p> 
          <p>$200</p> 
        </div>

        <div className='expenses-summary'>
          <p>Cable TV</p> 
          <p>$200</p> 
        </div>

        <div className='expenses-summary'>
          <p>Cable TV</p> 
          <p>$200</p> 
        </div>

        <div className='expenses-summary'>
          <p>Cable TV</p> 
          <p>$200</p> 
        </div>

        <div className='expenses-summary'>
          <p>Cable TV</p> 
          <p>$200</p> 
        </div>
      </div>


    </div>
  )
}

export default Calculation