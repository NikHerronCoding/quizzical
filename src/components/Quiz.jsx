import React from 'react'

export default function Quiz(props) {
    let questionItems = props.questions.map((question, index)=>
        {
            return (
                <>
                    <div> {JSON.stringify(question)} </div>
                </>
            )
        })


        return (
            questionItems
        )
}