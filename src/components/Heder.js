import './style/Heder.css'
import React from 'react'
import { NavLink } from "react-router-dom"
import market from './img/market.png'


const list = [
    { name: "Start", path: "/", end: true, active: false, },
    { name: "Obliczenia", path: "/finanse", end: true, active: false, },
]



const Heder = (props) => {

    let activeStyle = {

        color: "rgb(195, 182, 162)",
        borderBottom: "3px rgb(87, 206, 87) solid",
        

    }
    let nonactiveStyle = {
        color: "black"
    }

    const mapnavigation = list.map(task => {
        return (
            <li className="list" key={task.name}>
                <NavLink
                    end= {task.end ? task.end : false}
                    to={task.path}

                    style={({ isActive }) => isActive ? activeStyle : nonactiveStyle}>
                    {task.name}

                </NavLink>

            </li>
        )
    })
    return (

        <div className="heder">

            <div><img src={market} alt="market"></img></div>

            {mapnavigation}

            <div> </div>
        </div>
    )
}

export default Heder