import React, { useState } from 'react'

const Form = ( {addColor}) => {
    const [ input, setInput] = useState ('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addColor(input);
        
    }

  return (
    <section className='container'>
        <h4>Color Generator</h4>
        <form className='color-form' onSubmit={handleSubmit}>
            <input 
                type='color' 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
            />

            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder='#f15025' 
            />

            <button 
                type='submit' 
                className='btn' 
                style={{background: input}}
            >
                Submit
            </button>
        </form>
    </section>
  )
}

export default Form