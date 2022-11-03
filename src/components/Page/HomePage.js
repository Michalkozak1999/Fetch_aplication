import React, { useState, useEffect } from 'react'

import nbp from '../img/nbp.jpg'
import nbp2 from '../img/nbp2.jpeg'
import galp from '../img/galpiński.jpg'


import "../style/Homepage.css"

const list = [
    {
        id: 1, img: nbp, text: "nbp"
    },
    {
        id: 2, img: nbp2, text: "nbp2"
    },
    {
        id: 3, img: galp, text: "galpiński"
    }
]



const HomePage = () => {


    const [change, setChange] = useState(1)
    const [opacity, setOpacity] = useState({ opacity: 0.5 })

    useEffect(() => {
       
        const interval = setInterval(() => {
           setTimeout(()=> {
                setOpacity({ opacity: 1 })
            }, 200)
            setTimeout(function () {
                setOpacity({ opacity: 0.01 })
            }, 4500)
            clearTimeout()
           
            if (change < 3) {
                setChange(change + 1)
            } else {
                setChange(1)
            }


        }, 5000)
        return () => clearInterval(interval)
        
    })
    console.log(change)

    const newlist = [...list]
    const filterone = newlist.filter(task => task.id === change)
    console.log(filterone)
    const map = filterone.map(task => {

        return (
            <img key={task.id} style={opacity} src={task.img} alt={task.text}></img>
        )
    })

    return (
        <div className="nbp1">
            <div >
               




                {map}


               
            </div>
        </div>
    )
}

export default HomePage