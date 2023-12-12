import React from 'react'

import Question from './Question'
import Stats from './Stats'

export default function Quiz({questions, clicked, check, gameOver, correctQuestions, restart}) {
    let questionItems = ''
    if (questions) {
        questionItems = questions.map((question, index)=>{
            return <Question 
                question={question.question} 
                answers={question.answers} 
                number={question.number} 
                selected={question.selected}
                clicked={clicked}
                key={question.key}
                gameOver={gameOver}
                correctAnswer={question.correct_answer}
            />
        })
    }


    return ( 
    <>
    <div className="question-container">
         {questionItems}
    </div>
       <div className="stats">{gameOver && <Stats numCorrect={correctQuestions} numTotal={questions.length}/>}
            {gameOver? <button className="button" onClick={restart}>Play Again</button> : <button className="button" onClick={check}>Check Questions</button>}

       </div>
    </>
       
    )
    
}