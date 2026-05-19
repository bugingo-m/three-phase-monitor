import React from 'react'
import Wrapper from '../assets/Wrappers/NavLinksComponent'
import links from '../utils/Links'
import{NavLink} from 'react-router-dom'
import { useDashboardLayoutContext } from '../pages/DashboardLayout'
const NavLinksComponent = ({isBigSidebar}) => {
    const {toggleSidebar,user} = useDashboardLayoutContext()
  return (
    <Wrapper>
      {links.map((link)=>{
                const{id,icon,name,path} = link
                const {role} = user
                if(role !=='admin' && path === 'profile')return
                return(
                    <div className="container1" key={id}>
                        <NavLink to={path}  onClick={isBigSidebar? null:toggleSidebar} end>
                        <div className="link-wrapper">
                            <span>{icon}</span>
                            <h4>{name}</h4>
                        </div>
                        
                    </NavLink>
                    </div>
                    
                )
            })}
    </Wrapper>
  )
}

export default NavLinksComponent
