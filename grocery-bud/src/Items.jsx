import React from 'react'
import SingleItem from './SingleItem'

const Items = ({item, removeItem, editItem}) => {
  return (
    <div className='items'>
        {item.map((item) => <SingleItem key={item.id} item={item} removeItem={removeItem} editItem={editItem}/>)}
    </div>
  )
}

export default Items