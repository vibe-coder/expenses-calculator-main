import React from 'react'
import "./styles/Calculation.scss"
import { useState, useEffect } from 'react';

function Calculation() {

  // const [myData, getMyData] = useState()


  function displaySalary(){
    let salary = document.getElementById('salary').value;
    console.log(salary)
  }

    let data = []

    
    let newData = []

    async function getExpensesData (){
      data = [
        {name: document.getElementById("expenses-title-1").value, amount: document.getElementById("expenses-amount-1").value},
        {name: document.getElementById("expenses-title-2").value, amount: document.getElementById("expenses-amount-2").value},
        {name: document.getElementById("expenses-title-3").value, amount: document.getElementById("expenses-amount-3").value},
      ]

      data.map((input) =>{
        return(newData.push(input))
      })

      console.log(newData)
      console.log(data)
    }

    console.log(newData)
    

  
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
          <input onChange={displaySalary} className='salary-amount' placeholder='Amount' type='number' min="1" id='salary'/>
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
                <input id='expenses-title-1' className='expenses-title' placeholder='Expenses' type='text'/>
                <input id='expenses-amount-1' className='expenses-amount' placeholder='Amount' type='number'/>
              </div>
              <div className='expenses-input-set'>
                <input id='expenses-title-2' className='expenses-title' placeholder='Expenses' type='text'/>
                <input id='expenses-amount-2' className='expenses-amount' placeholder='Amount' type='number'/>
              </div>
              <div className='expenses-input-set'>
                <input id='expenses-title-3' className='expenses-title' placeholder='Expenses' type='text'/>
                <input  id='expenses-amount-3' className='expenses-amount' placeholder='Amount' type='number'/>
              </div>
            </div>
            <div className='add-button-div'>
              <button className='add-button'>+</button>
              <button className='add-button'>-</button>
            </div>
            <div  className='calculate-button-wrapper'>
              <div onClick={getExpensesData} className='calculate-button'>Calculate</div>
            </div>
          </form>
        </div>
      </div>


      {/* Expenses Data Collection Form */}

      <div className='summary-wrapper'>
        <div className='summary-title-div'>
          <h1>Summary</h1>
        </div>

        <div className='expenses-summary'>
              <p>Hey</p> 
              <p>Hwey</p> 
           </div>

        {/* {myData.map((singleData) => {
          return (
            <div className='expenses-summary'>
              <p>singleData[].name</p> 
              <p>singleData[].amount</p> 
           </div>
          )
        } )} */}
      </div>


    </div>
  )
}

export default Calculation