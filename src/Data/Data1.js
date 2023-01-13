import{
    UilUsdSquare,
    UilMoneyWithdrawal,
    UilChart,
 } from "@iconscout/react-unicons";


export const CardsData =[
    {
        title: "Balance",
        color: {
            backGround: "white",
            boxShadow: "10px 10px 10px 0px grey",
        },
        barValue: 70,
        value: "259.07",
        png: UilUsdSquare,
            series: [
                {
                    name: "Balance",
                    data: [31, 40, 28, 51, 42, 109, 100],
                },
            ],
        },
        {
            title: "Income",
            color: {
                backGround: 
                "white",
                boxShadow: "0px 10px 20px 0px #e0c6f5",
            },
            barValue: 67,
            value: "142.90",
            png: UilMoneyWithdrawal,
                
                series: [
                    {
                        name: "Income",
                        data:[10, 100, 50, 70, 80, 30, 40],
                    },
                ],
            },
            {
                title: "Expenses",
                color: {
                    backGround: 
                    "white",
                    boxShadow: "30px 20px 30px 0px #e0c6f5",
                },
                barValue: 31,
                value: "71.80",
                png: UilChart,
                    
                    series: [
                        {
                            name: "Expenses",
                            data:[5, 10, 59, 79, 85, 21, 2],
                        },
                    ],
                },
]

export default CardsData;