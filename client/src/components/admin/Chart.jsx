import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

function Chart({title,xLabels,series}) {
  return (
    <div className='bg-light py-8 px-4'>
        <h1 className='text-xl font-semibold mb-4 text-[#464255]'>{title}</h1>
        <LineChart
            xAxis={[{ scaleType: 'point', 
                    data: xLabels,
                    tickLabelStyle : {
                        fill : '#B9BBBD' 
                    },
                }]}
            yAxis={[{
                    data: [2000,4000,6000,8000,10000],
                    tickLabelStyle : {
                        fill : '#B9BBBD' 
                    },
                    tickNumber : 4
                }]}
            series={[
                {
                data: series,
                color: '#FF8000',
                }
            ]}
            height={250}
            width={550}
            sx={{
                '.MuiChartsAxis-line': { stroke: 'none' },      // Hides axis line
                '.MuiChartsAxis-tick': { stroke: 'none' },      // Hides ticks
              }}
            
        />
    </div>
  )
}

export default Chart