import React, { Fragment } from 'react'

export default function Color({ bg, color, word }) {
    const style = {
        backgroundColor: bg,
        color: color
    }
    return (
        <Fragment>
            <div className="jumbotron">
                <h1>Colorful</h1>
            </div>
            <h1 style={style}>The word is hello!</h1>
        </Fragment>
    )
}