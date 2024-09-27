import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
    const {openSidebar} = useGlobalContext()
  return (
    <nav>
        <div className="nav-center">
            <h3 className='logo'>starpi</h3>
            <button className="toggle-btn" onClick={openSidebar}><FaBars/></button>
            {/* Nav Links */}
        </div>
    </nav>
  )
}

export default Navbar 