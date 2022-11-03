import { useEffect, useState } from "react"
import './style/Debt.css'

const Debt = () => {

    const [value, setvalue] = useState("")
    useEffect(() => {
        const interval = setInterval(() => {
            const date = Date.parse('25 Dec 2021 06:55:50 GMT')
            const date1 = Date.parse('31 Dec 2022 23:59:59 GMT')
            // console.log(date + "czas od 1970 do 2021")
            // console.log(date1 + "czas od 1970 do 2022")
            //date2021_2022 daje mi informacje ile milisekund minie od 2021 do 2022
            const date2021_2022 = date1 - date
            // console.log(date2021_2022 + "czas od 2021 do 2022 grudnia")
            const date3 = new Date().toUTCString()
            //  date4 podaje ile milisekund minelo od dzisija do 1970 roku
            const date4 = Date.parse(`${date3}`)
            //howmuch daje mi informacje ile milisekund minelo od 2021 do dzisiaj 
            const howmuch = date4 - date
            // console.log(howmuch + "czas od 2021 do dzisaj")

            const ilezostalo = date2021_2022 - howmuch
            // console.log(ilezostalo + "ile milisekund zostalo do końca 2022 roku")
            const end2021 = 1415000000000
            const end2022 = 1553000000000
            const onesecend = 4361
           
            const howmuchtoday = end2021 + (howmuch/1000) * onesecend
            const text= howmuchtoday.toString()

       
          

const sli1 = text.slice(0,1)
const sli2 = text.slice(1,4)
const sli3 = text.slice(4,7)
const sli4 = text.slice(7,10)
const sli5 = text.slice(10,13)
const sli6 = (sli1 + " " + sli2 + " " + sli3+ " " + sli4 + " " + sli5)

            
         
            
            setvalue(sli6)
        }, 1000)
        return () => clearInterval(interval);
    }, [])




    // console.log(date2)



    return (
        <div className="alldebt">
             <div className="valuehr">
             <hr></hr>
            </div>
            
            <h2> Dług Publiczny Polski</h2>
           
            <h3 className="value"> {value}</h3>
            <div className="valuehr">
            <hr></hr>
            </div>
        </div>
    )
}

export default Debt