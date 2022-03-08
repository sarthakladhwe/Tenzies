import React from 'react'

export default function Die({ value, isHeld, holdDice }) {
    return (
        <div 
            className="die-face" 
            style={{backgroundColor: isHeld ? "#59E391" : "#fff"}} 
            onClick={holdDice}
        >
            <h2>{value}</h2>
        </div>
    )
}