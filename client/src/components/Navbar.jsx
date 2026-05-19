import React from 'react'
import {FaHome} from 'react-icons/fa'
import Wrapper from '../assets/Wrappers/Navbar'
import{FaAlignJustify} from 'react-icons/fa'
import{AiOutlineWarning} from 'react-icons/ai'
import LogoutContainer from './LogoutContainer'
import { useDashboardLayoutContext } from '../pages/DashboardLayout'
const Navbar = () => {
    const {toggleSidebar,showSidebar} = useDashboardLayoutContext()
  return (
    <Wrapper>
      <nav className='nav-1'>
      <div className="container">
        <button className="toggle" onClick={toggleSidebar}><FaAlignJustify/></button>
        <div className="title">
          <span  className='img-1'><AiOutlineWarning/></span>
          <h2 className='nav-title'>3 phase </h2>
        </div>
        <div className="logout">
          <LogoutContainer/>
        </div>
        
      </div>
     </nav>
    </Wrapper>
  )
}

export default Navbar
