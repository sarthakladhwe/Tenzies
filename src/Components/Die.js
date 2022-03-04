import React from 'react'

export default function Die({ value }) {
    return (
        <div className="die-face">
            <h2>{value}</h2>
        </div>
    )
}