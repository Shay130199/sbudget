import React, { useState } from 'react'
import './Card.css'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {UilTimes} from '@iconscout/react-unicons'
import Chart from 'react-apexcharts'

const Card = (props) => {
    const [expanded, setExpanded] = useState(true);
    
    return (
        <AnimateSharedLayout>
               {expanded ? (
                <ExpandedCard param= {props} setExpanded={()=>setExpanded(false)}/>
            ) : (
            <CompactCard param = {props} setExpanded={()=>setExpanded(true)}/>
            )}
        </AnimateSharedLayout>
    );
};


//CompactCard

function CompactCard ({param, setExpanded}){
    const Png = param.png;
    return(
        <motion.div 
        className="CompactCard"
        style={{
            background: param.color.backGround,
            backShadow: param.color.backShadow,
            boxShadow: '0px 20px 30px 0px #80808029',
            
        }}
        onClick={setExpanded}
        layoutId='expandableCard'
        >
            <div className="radialBar">
                <CircularProgressbar
                value={param.barValue}
                text={param.barValue}
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png/>
                
                <span>£{param.value}</span>
                <span>Month: September</span>
            </div>
        </motion.div>
    )
}

function ExpandedCard({param, setExpanded}){

    const data = {
        options: {
            chart: {
                type:"area",
                height: "auto",
            },

            dropShadow: {
                enable: false,
                enableOnSeries: undefined,
                top: 0,
                left: 0,
                blue: 3,
                color: "#fff",
                opacity:0.35,
            },

            fill: {
                colors: ["#fff"],
                type: "gradient",
            },

            dataLabels: {
                enable: false,
            },

            stroke: {
                curve: "smooth",
                colors: ["red"],
            },

            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show:true,
            },

            xaxis: {
                type: "datetime",
                categories: [
                    "2022-09-19T00:00:00.000Z",
                    "2022-09-19T01:30:00.000Z",
                    "2022-09-19T02:30:00.000Z",
                    "2022-09-19T03:30:00.000Z",
                    "2022-09-19T04:30:00.000Z",
                    "2022-09-19T05:30:00.000Z",
                    "2022-09-19T06:30:00.000Z",
                ]
            },

            
        }
    }
    return(
        <motion.div
        className="ExpandedCard"
        style={{
            background:param.color.backGround,
            boxShadow: param.color.boxShadow,
            
        }}
        layoutId='expandableCard'
        >
        <div style={{alignSelf: 'flex-end', cursor: 'pointer', color: 'black'}}>
            <UilTimes onClick={setExpanded}



            />
        </div>
        <span>{param.title}</span>
        <div className="chartContainer">
            <Chart series={param.series} type='area' options={data.options}/>
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    );
}

export default Card;