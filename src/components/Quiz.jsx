import React from 'react'

import Question from './Question'

export default function Quiz(props) {
    let questionItems = props.questions.map((question, index)=>
        {
            return (
                <div className="questions">
                    <Question data={question} key="index"/>
                </div>
            )
        })


        return (
            questionItems
        )
}