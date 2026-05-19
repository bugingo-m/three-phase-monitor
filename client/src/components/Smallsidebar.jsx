import React from 'react'
import Wrapper from '../assets/Wrappers/Smallsidebar'
import {AiOutlineClose} from 'react-icons/ai'
import { useDashboardLayoutContext } from '../pages/DashboardLayout'
import NavLinksComponent from './NavLinksComponent'
const Smallsidebar = () => {
  const {showSidebar,toggleSidebar} = useDashboardLayoutContext()
  return (
    <Wrapper>
      <div className={showSidebar?"overlay show":"overlay"}>
          <div className="container">
            <button className="close-btn" onClick={toggleSidebar}>
              <AiOutlineClose/></button>
              <NavLinksComponent/>
          </div>
            
        </div>
    </Wrapper>
  )
}

export default Smallsidebar
