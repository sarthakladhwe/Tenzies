import React from "react";

export default function Button({ rollDice }) {
    return (
        <button className="btn-roll" onClick={rollDice}>
            Roll
        </button>
    )
}