import React from 'react'
import he from 'he'

import Answer from './Answer'
export default function Question({question, answers, number, selected, clicked, gameOver, correctAnswer}) {


    let answerItems = answers.map((ele, index)=>{
        return <Answer 
            key={index} 
            answer={he.decode(ele)} 
            selected={selected === he.decode(ele)}
            number={number}
            clicked={clicked}
            gameOver={gameOver}
            correctAnswer={he.decode(correctAnswer)}
            />
    })
    
    return (<div className="question">
        <h2>{he.decode(question)}</h2>
           <div className="answer-container">{answerItems}</div> 
    </div>)
}