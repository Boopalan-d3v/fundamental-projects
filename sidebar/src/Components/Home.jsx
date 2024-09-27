import React from 'react'
import { useGlobalContext } from './context'
import { FaBars} from 'react-icons/fa'

const Home = () => {
  const {openSidebar, openModel} = useGlobalContext()
  
  return (
    <main>
      <button onClick={openSidebar} className='sidebar-toggle'><FaBars></FaBars></button>
      <button className="btn" onClick={openModel}>show model</button>
    </main>
  )
}

export default Home 