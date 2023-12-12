import React from 'react'

export default function StartGame(props) {
    return (
        <>
            <h1 className="intro-title">Quizzical</h1>
            <h3>A quiz game written in React, based on the OpenTrivia API</h3>
            <button className="button" onClick={props.click}>
                Start Quiz
            </button>
        </>
    )
}