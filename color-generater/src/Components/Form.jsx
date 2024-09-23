import React, { useState } from 'react'

const Form = () => {
    const [ input, setInput] = useState ('')
    const [ color, setColor] = useState('')
  return (
    <form className='color-form'>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <input type='color' value={color} onChange={(e) => setColor()}/>
    </form>
  )
}

export default Form