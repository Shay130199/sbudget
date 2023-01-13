import React from 'react'
import Chart from 'react-apexcharts'


function Doughnut() 
{
  return (
    <React.Fragment>
      <h2>Donut Chart</h2>
      <Chart
      type="donut"
      width={400}
      height={400}
      series={[45,67,89,34,43,20,48,]}

      options={{
        labels:['Car Insurance', 'Rent', 'Grocery', 'Outings', 'Treats', 'Phone Bill', 'Photoshop' ]
      }}
      />

    </React.Fragment>
    
    );
  }

export default Doughnut;