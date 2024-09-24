import React, { useEffect, useRef, useState } from 'react'
import {toast} from 'react-toastify'
const Form = ({addItem}) => {

    const [itemInput, setItemInput] = useState('')

    const refContainer = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (!itemInput) {
            toast.error('Please provide a value')
            return;
        }
        addItem(itemInput)
        setItemInput('') 
    }

    useEffect(()=>{
        refContainer.current.focus()
    },[])

  return (
    <form className="item-form" onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div className="form-control">
        <input 
            type='text' 
            className='form-input' 
            value={itemInput} 
            onChange={(e) => setItemInput(e.target.value)} 
            ref={refContainer}
        />
        <button type='submit' className='btn'>Submit</button>
        </div>
    </form>
  )
}

export default Form
