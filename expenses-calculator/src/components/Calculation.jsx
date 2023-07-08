import React from 'react'
import "./styles/Calculation.scss"

function Calculation() {


  function displayNumber(){
    let num = document.getElementById('salary').value;
    console.log(num)
  }

  const expensesData = [{}]

  function getExpensesData (){
    let exp_1_Title = document.getElementById("expenses-title-1").value
    let exp_1_Amount = document.getElementById("expenses-amount-1").value
    
    expensesData.push(exp_1_Amount)
    
    
    console.log(exp_1_Amount)
    console.log(exp_1_Title)
  }

  
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
          <input onChange={displayNumber} className='salary-amount' placeholder='Amount' type='number' min="1" id='salary'/>
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
                <input onChange={getExpensesData} id='expenses-title-1' className='expenses-title' placeholder='Expenses' type='text'/>
                <input onChange={getExpensesData} id='expenses-amount-1' className='expenses-amount' placeholder='Amount' type='number'/>
              </div>
              <div className='expenses-input-set'>
                <input id='expenses-title-2' className='expenses-title' placeholder='Expenses' type='text'/>
                <input id='expenses-amount-1' className='expenses-amount' placeholder='Amount' type='number'/>
              </div>
              <div className='expenses-input-set'>
                <input id='expenses-title-3' className='expenses-title' placeholder='Expenses' type='text'/>
                <input id='expenses-amount-1' className='expenses-amount' placeholder='Amount' type='number'/>
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