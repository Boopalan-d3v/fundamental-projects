import React from 'react'
import SingleQuestion from './SingleQuestion'

const Questions = ({questions , activeid, toggleQuestion}) => {
  return (
    <section className='container'>
        <h1>Questions</h1>
        {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} 
            activeid={activeid} toggleQuestion={toggleQuestion}/>
        })}
    </section>
  )
}
export default Questions
