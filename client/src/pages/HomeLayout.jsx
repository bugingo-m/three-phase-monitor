import React from 'react'
import { Outlet } from 'react-router-dom'
const HomeLayout = () => {
  return (
    <div>
      <Outlet/>
      {/* <Link to='/login'>Login Page</Link> */}
    </div>
  )
}

export default HomeLayout
