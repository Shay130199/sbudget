import React from 'react'
import CardsData from '../Data/Data1';
import './Cards.css'
import Card from './Card';

const Cards = () => {
    return (
        <div className="Cards">
            {CardsData.map((card, id) =>{
                return(
                    <div className="parentContainer">
                        <Card
                        title={card.title}
                        color={card.color}
                        barValue={card.barValue}
                        value={card.value}
                        png={card.png}
                        series={card.series}
                        />
                    </div>
                )

            })}
        </div>
    )
}

export default Cards;