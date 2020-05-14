import React from 'react'

export default function Number({ input }) {
    let num = true;
    if (isNaN(input)) {
        num = false;
    }
    return (
        <div className="jumbotron">
            {
                num ?
                    <h1>The number is {input}</h1>
                    :
                    <h1>The word is {input}</h1>

            }
        </div>
    )
}