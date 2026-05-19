import React from 'react'
import NavLinksComponent from './NavLinksComponent'
import Wrapper from '../assets/Wrappers/Bigsidebar'
import { useDashboardLayoutContext } from '../pages/DashboardLayout'
const Bigsidebar = () => {
  const {showSidebar,toggleSidebar} = useDashboardLayoutContext()
  return (
    <Wrapper>
      <div className={showSidebar?'container':'container show-sidebar'}>
        <div className="wrapper">
          <NavLinksComponent isBigSidebar/>
        </div>
      </div>
    </Wrapper>
  )
}

export default Bigsidebar
