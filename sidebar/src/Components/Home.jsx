import React from 'react'
import { useGlobalContext } from './context'

const Home = () => {
  useGlobalContext()
  return (
    <div>
        <h5>hey world !</h5>
        <button type='button'>#First</button>
        <button type='button'>#Second</button>
    </div>
  )
}

export default Home 