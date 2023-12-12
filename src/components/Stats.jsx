import React from 'react'

export default function Stats({numCorrect, numTotal}) {
    return (
        <h3 className="stats">{`You Scored ${numCorrect}/${numTotal} questions correct.`}</h3>
    )
}