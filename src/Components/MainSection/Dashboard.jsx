import React from 'react';
import Cards from '../Cards';
import TheRightSide from '../The Right Side/TheRightSide';
import './Dashboard.css';

import History from './History';
import IncomeExpense from './IncomeExpense';


function Dashboard() {
    return (
        <div className="Dashboard">
            <h1>Welcome, Shay-Lynn! 🤑</h1>
            <Cards />
            <IncomeExpense/>
            <History/>
            <TheRightSide/>
        </div>
    );
}

export default Dashboard;
