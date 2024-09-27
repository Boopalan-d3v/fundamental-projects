import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from './context'
import NavLinks from './NavLinks';

const Navbar = () => {
   const {openSidebar} =   useGlobalContext();
  return (
    <nav>
        <div className="nav-center">
            <h3 className='logo'>starpi</h3>
            <button className="toggle-btn" onClick={openSidebar}><FaBars/></button>
            <NavLinks/>
        </div>
    </nav>
  )
}

export default Navbar 