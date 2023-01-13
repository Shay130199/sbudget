import React  from "react";
import './Budgetplan.css'
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import Transaction from "./Transaction";
import { History } from "./History";
import AddTransaction from "./AddTransaction";






function Budgetplan() {

return (
    <div> 
        <h2>Income & Expenses Tracker</h2>
        <Balance/>
        <IncomeExpense/>
        <AddTransaction/>
        <Transaction/>
        <History/>
    
    </div>
        
    );
}

export default Budgetplan;