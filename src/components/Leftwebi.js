import { useState } from "react"
import "./style/Leftwebi1.css"

import profgalp from './img/profgalp.jpg'
import kinghley from './img/kinghley.jpg'
import lipin from './img/lipinski.jpg'
import gold from './img/gold.png'
const Leftwebi = (props) => {
    const [interst, setInterest] = useState([

        {
            id: 1,
            interest_state: "Stopa referencyjna",
            number: "6,75",

        },
        {
            id: 2,
            interest_state: "Stopa lombardowa",
            number: "7,25",
        },
        {
            id: 3,
            interest_state: "Stopa depozytowa",
            number: "6,25",
        },
        {
            id: 4,
            interest_state: "Stopa redyskonta weksli",
            number: "6,80",
        },
        {
            id: 5,
            interest_state: "Stopa dyskontowa weksli",
            number: "6,85",
        },
    ])

    const [usenbp, seyUseNbp] = useState([
        {
            id: 1,
            Name: " Adam Glapiński",
            status: "Prezes NBP",
            img: profgalp,
        },
        {
            id: 2,
            Name: " Marta Kightley",
            status: "Wiceprezes NBP",
            status2: "– Pierwszy Zastępca Prezesa NBP",
            img: kinghley,
        },
        {
            id: 3,
            Name: " Adam Lipiński",
            status: " Wiceprezes NBP",
            img: lipin,
        },

    ])

    const mapnbp = usenbp.map(task => {
        return (
            <div key={task.id} className="namenbp">
                <div className="namenbp_center">
                    <div><img src={task.img} alt={task.Name}></img></div>
                    {task.Name}
                    <br></br>
                    {task.status}
                    <br></br>
                    {task.status2}

                </div>

            </div>
        )
    })

    const mapinterest = interst.map(task => {
        return (
            <div className="state_map" key={task.id}>
                {task.interest_state}: <span>{task.number}</span>
            </div>
        )
    })


    const mapgold = props.number.map(task => {
        return (
            <div key={task.cena}>{task.cena} zł</div>
        )
    })

    return (
        <div className="state_intereset">





            <h3>Stopy procentowe</h3>
            <hr></hr>

            <div className="state_interest_map">
                {mapinterest}
            </div>
            <hr></hr>
            <div className="bargold">
                <h4> Dziesiejsza Cena złota:
                    <br></br>za 1g</h4>
                <br></br>
                {mapgold}
                <img src={gold} alt="gold"></img>


            </div>
            <div className="center_name">
                <hr></hr>
                {mapnbp}
                <hr></hr>
            </div>
        </div>
    )
}

export default Leftwebi