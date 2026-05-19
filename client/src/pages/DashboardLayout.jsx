import React from 'react'
import { Outlet,redirect,useLoaderData,useNavigate } from 'react-router-dom'
import { Navbar,Smallsidebar,Bigsidebar } from '../components'
import Wrapper from '../assets/Wrappers/Dashboard'
import {toast} from 'react-toastify'
import customFetch from '../utils/customFetch'
import { useState, createContext, useContext } from 'react';
const DashboardLayoutContext = createContext();

export const loader = async()=>{
  try {
    const {data} = await customFetch('/user/current-user')
    return data;
  } catch (error) {
    return redirect('/');
  }
}
const DashboardLayout = () => {

  const navigate = useNavigate();
  const {user} = useLoaderData();

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate('/')
    await customFetch.get('/auth/logout')
    toast.success('Logging out...')
  };
  return (
    <DashboardLayoutContext.Provider
    value={{
      user,
      logoutUser,
      toggleSidebar,
      showSidebar,
    }}
    >
      <Wrapper>
     <div className="dashboard">
            
            <Bigsidebar/>
            <Smallsidebar/>
            
            {/* <h2>heading</h2> */}
            <div >
              <Navbar/>
              <div className="dashboard-page">
                <Outlet context={{user}}/>
              </div>
            </div>
          </div>
    </Wrapper>
    </DashboardLayoutContext.Provider>
    
  )
}
export const useDashboardLayoutContext = () => useContext(DashboardLayoutContext);
export default DashboardLayout
