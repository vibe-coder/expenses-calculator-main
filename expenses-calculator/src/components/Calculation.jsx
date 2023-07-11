import React from 'react'
import "./styles/Calculation.scss"
import { useState,} from 'react';

function Calculation() {

  const [myExpenses, getMyExpenses] = useState()

  const [mySalary, getMySalary] = useState()



// **************** Getting salary input

  let annualSalary = ""

  function displaySalary(){
    let salary = document.getElementById('salary').value;
    getMySalary(salary)
    // console.log(salary)

    annualSalary = salary * 12
    document.getElementById("annual-salary").innerHTML = annualSalary
    // console.log(annualSalary)
  }

  // console.log(mySalary)

// *************** Getting Expenses input
  let data = []
  async function getExpensesData (){
    getMyExpenses(data = [
      {name: document.getElementById("expenses-title-1").value, amount: document.getElementById("expenses-amount-1").value},
      {name: document.getElementById("expenses-title-2").value, amount: document.getElementById("expenses-amount-2").value},
      {name: document.getElementById("expenses-title-3").value, amount: document.getElementById("expenses-amount-3").value},
    ])
    // console.log(data)
  }



// ************ Calculating Expenses per Month and per Year

    let totalSalary = ""
    let yearlySalary = ""
    let monthlyExpenses = myExpenses
    
    
    // if(monthlyExpenses){
    //   console.log(monthlyExpenses[1].amount)
    // }

    if(monthlyExpenses){
      totalSalary = Number(monthlyExpenses[0].amount) + Number(monthlyExpenses[1].amount) + Number(monthlyExpenses[2].amount) 
      totalSalary = totalSalary / 100 * mySalary
      yearlySalary = Number(totalSalary * 12)
      console.log(yearlySalary)
    }





  
  return (
    <div className='calculation-container'>

      {/* Salary data collection form */}
      
      <div id='income-wrapper' className="income-wrapper">
        <div className='income-period-wrapper'>
          <p>Your Income / Monthly</p>  
          <p>Your Income / Annually</p>
        </div>
        
        <div className="salary-container">
          <div className='input-container'>
            <p>$</p>
            <input onChange={displaySalary} className='salary-amount' placeholder='Amount' type='number' min="1" id='salary'/>
          </div>

          <div className='input-container'>
            <p>$</p>
            <p id='annual-salary'></p>
          </div>
        </div>
      </div>

      {/* Expenses Data Collection Form */}

      <div className='expenses-summary-wrapper'>
        <div className='expenses-input-wrapper' id='calculation'>
          
          <div className='expenses-title-div'>
            <p>Expenses</p> 
            <p>Percentage</p>
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
              {/* <div className='add-button-div'>
                <button className='add-button'>+</button>
                <button className='add-button'>-</button>
              </div> */}
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

        {/* <div className='expenses-summary'>
              <p>Hey</p> 
              <p>Hwey</p> 
           </div> */}
        {
          myExpenses ? (myExpenses.map((singleExpenses) => {
            let calculatedExpenses = singleExpenses.amount / 100 * mySalary
            return (
              <div className='expenses-summary'>
                <p>{singleExpenses.name}</p> 
                <p>$ {calculatedExpenses}</p> 
              </div>
            )
          } )) : (
            <div className='expenses-summary'>
              <p> </p> 
              <p> </p> 
           </div>
          )
        }

        <div className='total-div'>
          <div className='monthly'>
            <p>Total Expenses <strong>Monthly:</strong></p>
            <p>$ {totalSalary}</p>
          </div>

          <div className="annually">
            <p>Total Expenses <strong>Annually:</strong></p>
            <p>$ {yearlySalary.toFixed(2)}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Calculation

// myData.map((singleData) => {
//   return (
//     <div  className='expenses-summary'>
//       <p>{singleData.name}</p> 
//       <p>{singleData.amount}</p> 
//    </div>
//   )
// } )

