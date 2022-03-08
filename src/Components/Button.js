import React from "react";

export default function Button({ rollDice, won }) {
    return (
        <button className="btn-roll" onClick={rollDice}>
            { won ? "New Game" : "Roll" }
        </button>
    )
}