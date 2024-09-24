import React from 'react'
 
const SingleItem = ({item, removeItem, editItem}) => {
    const {id, name, completed} = item

    /* const handleCheck = () => {
        if(!isChecked){
            setIsChecked({completed:true})
        }
        return;
    } */

  return (
    <div className='single-item'>
        <input type="checkbox" checked={completed} onChange={() => editItem(id)}/>
        <p style={{textTransform: 'capitalize', textDecoration: completed && 'line-through'}}>{name}</p>
        <button type='button' className='btn remove-btn' onClick={() => removeItem(id)}>Delete</button>
    </div>
  )
}

export default SingleItem