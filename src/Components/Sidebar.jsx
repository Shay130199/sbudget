import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Sidebar.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventNoteIcon from '@mui/icons-material/EventNote';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const variants ={
    open: {opacity: 1, x: 0,},
    closed: {opacity: 0, x: "-100%"}

}
const Sidebar = () => {

    const [show, setshow] = useState(false);
    return(
        <>
            <motion.nav 
            animate={show? "open" : "closed"}
            variants={variants}
            transition={{duration: 0.5}}
            >
                <motion.div className="inner-nav">
                    <ul>
                        <motion.li whileHover={{backgroundColor: 'gba(231, 231, 231, 1)'}} whileTap={{scale: 0.9}}>
                            <a href="/"><DashboardIcon/>My Dashboard</a>
                        </motion.li>
                        <motion.li whileHover={{backgroundColor: 'gba(231, 231, 231, 1)'}} whileTap={{scale: 0.9}}>
                            <a href="BudgetPlan"><StickyNote2Icon/>My Budget Planner</a>
                        </motion.li>
                        <motion.li whileHover={{backgroundColor: 'gba(231, 231, 231, 1)'}} whileTap={{scale: 0.9}}>
                            <a href="Statistics"><AutoGraphIcon />My Statistics</a>
                        </motion.li>
                        <motion.li whileHover={{backgroundColor: 'gba(231, 231, 231, 1)'}} whileTap={{scale: 0.9}}>
                            <a href="Articles"><EventNoteIcon/>Article</a>
                        </motion.li>
                        <motion.li whileHover={{backgroundColor: 'gba(231, 231, 231, 1)'}} whileTap={{scale: 0.9}}>
                            <a href="SignOut"><EventNoteIcon/>SignOut</a>
                        </motion.li>
                    </ul>
                </motion.div>

            </motion.nav>
            <motion.button
                className="toggle"
                onClick={() => setshow(show => ! show)}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
            >
            {show? <CloseIcon/>: <MenuIcon/> }
        </motion.button>
        </>
    )
}

export default Sidebar;