import React from 'react'
import { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
const SingleQuestion = ({ title, info}) => {
    const [showData, setShowData] = useState(false)
  return (
    <main>
        <article className='container'>
            <header>
                <h3>Questions</h3>
            </header>
            <h5>{title}</h5>
            {showData && <p>{info}</p>}
            <button type='button' onClick={() => setShowData(!showData)}>
                {showData ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>
        </article>
    </main>
  )
}

export default SingleQuestion