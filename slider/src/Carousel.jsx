import React from 'react'
import { shortList,longList, list } from './data';
import { useState} from 'react'
import {FiChevronLeft , FiChevronRight} from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
const Carousel = () => {
  const [dataList, setDataList] = useState(longList)
  const [currentPerson, setCurrentPerson] = useState(0)

  const prevSlide = () => {
    setCurrentPerson((oldPerson) =>{
      const result = (oldPerson - 1 + dataList.length) % dataList.length
      return result
    } )
  }

  const nextSlide = () => {
    setCurrentPerson((oldPerson) =>{
      const result = (oldPerson + 1) % dataList.length
      return result
    } )
  }

  return (
    <section className='slider-container'>
      {dataList.map((people, peopleIndex) => {
        const { id, name, image,title, quote} = people
        return <article className="slide" 
        style={{transform:`translateX(${100 * (peopleIndex - currentPerson)}%)`, 
          opacity:peopleIndex === currentPerson?1:0, 
          visibility:peopleIndex === currentPerson? 'visible' : 'hidden'}}
         key={id}>
          <img src={image} alt={name} className='person-img'/>
          <h5 className='name'>{name}</h5>
          <p className="title">{title}</p>
          <p className='text'>{quote}</p>
          <FaQuoteRight className='icon'/>
        </article>
      })}
      <button type='button' className='prev-btn' onClick={prevSlide}><FiChevronLeft/></button>
      <button type='button' className='next-btn' onClick={nextSlide}><FiChevronRight/></button>
    </section>
  )
}

export default Carousel