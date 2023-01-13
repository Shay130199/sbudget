import React from 'react'

function IncomeList() {
  return (
    <div className="transaction transactions-income">
        <h2>Transaction History</h2>
        <ul className="transaction">
            <li className="transaction">
                <span className="transation-text">Salary</span>
                <span className="transaction-amount">£120</span>
                <button className="delete-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        </ul>
    </div>
  )
}

export default IncomeList