import React from 'react'
import he from 'he'

import Answer from './Answer'
export default function Question(props) {

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            // Generate a random index lower than i
            const j = Math.floor(Math.random() * (i + 1));
    
            // Swap elements at indices i and j
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    let correct_answer = props.data.correct_answer
    let incorrect_answers = props.data.incorrect_answers
    let answers = shuffleArray([correct_answer, ...incorrect_answers])

    let answerItems = answers.map((ele, index)=>{
        return <Answer key={index} data={he.decode(ele)}/>
    })

    console.log(answers)
    return (<div className="question">
        <h2>{he.decode(props.data.question)}</h2>
            {answerItems}
    </div>)
}