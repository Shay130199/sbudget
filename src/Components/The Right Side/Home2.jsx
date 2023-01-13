import Sidebar from  '../Sidebar'
import Dashboard  from '../MainSection/Dashboard';
import Budgetplan from '../MainSection/Budgetplan';
import Statistics from '../MainSection/Statistics'
import SignOut from '../The Right Side/SignOut'
import React from 'react';
import './Home.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Home() {


  return (
    <div className="App">
      <div className="AppGlass">
        <div/>
        <Router>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/BudgetPlan" element={<Budgetplan/>}/>
          <Route path="/Statistics" element={<Statistics/>}/>
          <Route path="/SignOut" element={<SignOut/>}/>
        </Routes>
        </Router>
        </div>
      </div>

  );
}

export default Home;
