import React from 'react'

export const History = () => {
  return (
      <>
          <h3>Income</h3>
      <ul class="list">
          <li className="plus">
          💼Work <span>+£153.90</span>
          </li>
          <li className="plus">
          💻Facebook marketplace <span>+£53.90</span>
          </li>
          <li className="plus">
          💼Work <span>+£290.09</span>
          </li>
      </ul>
      <h3>Epenses </h3>
      <ul  class="list">
          <li className="minus">
          🌇 Outings <span>-£39.90</span>
          </li>
          <li className="minus">
          🏠 Rent Bill <span>-£350.00</span>
          </li>
          <li className="minus">
          👚 BooHoo.com <span>-£21.99</span>
          </li>
      </ul>
      
      </>
    )
}




export default History