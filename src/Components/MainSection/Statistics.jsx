import React from "react";
import Cards from "../Cards";
import Doughnut from "./Doughnut";
import History from "./History";

import './Statistics.css'





function Statistic() {
    return (
        <div className="Statistic">
            <h2>Your Weekly & Monthly Statistics 📈</h2>
            <Cards/>
            <div className="flexbox-container">
                <div className="flexbox-item flexbox-item-1">
            <Doughnut/>
            <History/>
            </div>
        </div>
    </div>
    );
}

export default Statistic;