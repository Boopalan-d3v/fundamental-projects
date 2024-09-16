import React from 'react'
import SingleQuestion from './SingleQuestion'

const Questions = ({questions}) => {
  return (
    <section>
        {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question}/>
        })}
    </section>
  )
}
export default Questions
