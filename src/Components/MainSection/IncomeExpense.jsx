import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';

function IncomeExpense() {

  return (
    <div className="inc-exp-container">
        <div>
            <h3>Income</h3>
            <p class="money plus">£20</p>
            </div>
            <div className="minus">
            <h3>Expenses</h3>
            <p class="money minus">£20</p>
        </div>
    </div>
  )
}

export default IncomeExpense

