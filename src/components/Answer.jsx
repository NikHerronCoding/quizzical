import React from 'react'

export default function Answer({answer, selected, number, clicked, gameOver, correctAnswer}){

    function determineClass(gameOver, selected){

        if (gameOver && selected && answer !== correctAnswer) {
            return "answer wrong"
        } else if (gameOver && answer === correctAnswer) {
            return "answer correct"
        } else if ((!gameOver && !selected) ||(gameOver && !selected))  {
            return "answer"
        } else if (!gameOver && selected) {
            return "answer selected"
        }
    }

    return <p className={determineClass(gameOver, selected)} onClick={()=>{clicked(answer, number, gameOver)}}>{answer}</p>
}