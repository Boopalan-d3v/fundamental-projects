import React, { useState } from 'react'
import {toast} from 'react-toastify'
const Form = ({addItem}) => {

    const [itemInput, setItemInput] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        if (!itemInput) {
            toast.error('Please provide a value')
            return}
        addItem(itemInput)
        setItemInput('') 
    }

  return (
    <form className="item-form" onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div className="form-control">
        <input 
            type='text' 
            className='form-input' 
            value={itemInput} 
            onChange={(e) => setItemInput(e.target.value)} 
        />
        </div>
        <button type='submit' className='btn'>Submit</button>
    </form>
  )
}

export default Form
