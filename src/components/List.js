import React, { useState } from "react"
import 'bootstrap'
import Chart from 'react-google-charts'
import "./style/list.css"













const scatterOptions = {
    title: 'Data / Cena',
    hAxis: { title: 'Data', },
    vAxis: { title: 'Cena', minValue: 0, maxValue: 400 },
    series: {
        1: { curveType: "function" }
    },
    legend: 'none',
}


const List = (props) => {
    const mapusers = props.users.map(task => {
        return (
            <div key={task.data}>
                Cena:   {task.cena} Data: {task.data}
            </div>
        )
    })


    const mapfunction = props.users.map(task => [task.data.slice(0, 10), task.cena])
    const scatterData1 = [
        ['Age', 'Cena']
    ]
    const contact = scatterData1.concat(mapfunction)

   


    return (
        <div>

           

            <div className="chart">
                <Chart
                    width={'800px'}
                    height={'420px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={contact}
                    options={scatterOptions}
                    rootProps={{ 'data-testid': '1' }}
                    backgroundColor={"black"}
                />
            </div>



        </div>

    )
}

export default List