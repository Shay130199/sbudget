import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import BarChartIcon from '@mui/icons-material/BarChart';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import HelpIcon from '@mui/icons-material/Help';


 export const SidebarData= [

    {
        title: "My Dashboard",
        icon: <HomeIcon/>,
        link:"/MyDashboard"
    },

    {
        title: "About Us",
        icon: <PersonalVideoIcon />,
        link:"/Aboutus"
    },

    {
        title: "Statistics",
        icon: <BarChartIcon/>,
        link:"/Statistics"
    },

    {
        title: "Budget Plan",
        icon: <NoteAltIcon/>,
        link:"/BudgetPlan"
    },

    {
        title: "Need Help?",
        icon: < HelpIcon/>,
        link:"/Help"
    },

 ];

export default SidebarData;