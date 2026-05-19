import React from 'react'
import { useState } from 'react'
import Wrapper from '../assets/Wrappers/LogoutContainer'
import {BiUserCircle} from 'react-icons/bi'
import{IoIosArrowDropdownCircle} from 'react-icons/io'
import { useDashboardLayoutContext } from '../pages/DashboardLayout'
const LogoutContainer = () => {
    const [showButton,setShowButton]= useState(false)
    const {user,logoutUser} = useDashboardLayoutContext()
  return (
    <Wrapper>
      <div className="logout">
        <div className="user">
          {user?.avatar?<img src={user.avatar} 
          className='img' alt='profile'/>:<span><BiUserCircle/></span>}
        
        <h4>{user.firstName}</h4>
        <button onClick={()=>setShowButton(!showButton)}><IoIosArrowDropdownCircle/></button>
        </div>
        {showButton && <button className='logout-btn' onClick={logoutUser} >logout</button>}
      
      </div>
    </Wrapper>
  )
}

export default LogoutContainer
