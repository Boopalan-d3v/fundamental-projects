import React, { useState } from 'react'

const Tour = ({id, name, info, image, price, removeTour}) => {
  const [readMore, setReadMore] = useState(false)
  
  return (
    
    <article className="single-tour">
      <span className="tour-price"> ${price}</span>
      <img src={image} alt={name}className='img' />
      <div className="tour-info"> 
        <h5>{name}</h5>
        <p>
          { readMore ? info : `${info.substring(0, 200)}...`}
          <button type='button' className='info-btn' onClick={() => setReadMore(!readMore)}>{readMore ? 'show less': 'read more'}</button>
        </p>
        <button type='button' className='btn btn-block delete-btn' onClick={()=> removeTour(id)}> Not instrested</button>
      </div>
    </article>
  )
}
export default Tour