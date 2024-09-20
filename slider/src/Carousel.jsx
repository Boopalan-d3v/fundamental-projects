import React from 'react'
import { shortList,longList, list } from './data';
import { useState} from 'react'
import {FiChevronLeft , FiChevronRight} from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
const Carousel = () => {
  const [dataList, setDataList] = useState(shortList)

  const prevSlide = () => {

  }

  const nextSlide = () => {

  }

  return (
    <section className='slider-container'>
      {dataList.map((people) => {
        const { id, name, image,title, quote} = people
        return <article className="slide" key={id}>
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