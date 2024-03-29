import Sidebar from  './Components/Sidebar'
import Dashboard  from './Components/MainSection/Dashboard';
import Budgetplan from './Components/MainSection/Budgetplan';
import Statistics from './Components/MainSection/Statistics'
import SignOut from './Components/The Right Side/SignOut'
import React from 'react';
import './App.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {


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

export default App;
