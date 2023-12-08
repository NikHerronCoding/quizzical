import React from 'react'

export default function StartGame(props) {
    return (
        <>
            <h1>Quizzical</h1>
            <h3>A quiz game written in React and based on the OpenTrivia API</h3>
            <button onClick={props.click}>
                Start Quiz
            </button>
        </>
    )
}