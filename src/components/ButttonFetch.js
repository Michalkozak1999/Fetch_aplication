import React, { useState } from "react"
import "./style/buttonfetch.css"
const ButtonFetch = (props) => {

   
   
    
    return (

        <div className="buttonFetch">
         
            
            
            
            
            <button onClick={() => props.click()}> Dodaj </button>
        
        
        
        </div>
    )
}

export default ButtonFetch