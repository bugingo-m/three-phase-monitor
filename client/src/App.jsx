import { useState,useEffect } from 'react'
//import { ref, onValue } from 'firebase/database';
import firebase from './firebase'; // Import the initialized db
import{RouterProvider,createBrowserRouter} from 'react-router-dom'

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  Admin,
  DataDashboard,
  Profiles,
} from './pages';

import {action as registerAction} from './pages/Register'
import {action as loginAction} from './pages/Login'
import {action as profileAction} from './pages/Profiles'
import {loader as dashboardLoader} from './pages/DashboardLayout'
import {loader as adminLoader} from './pages/Admin'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/register',
        element: <Register />,
        action:registerAction,
      },
      {
        path: '/login',
        element: <Login />,
        action:loginAction,
      },
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        loader:dashboardLoader,
        children: [
          {
            index: true,
            element: <DataDashboard />,
          },
          {
            path: 'profile',
            element: <Profiles />,
            action:profileAction,
            
          },
          {
            path: 'creators',
            element: <Admin />,
            loader:adminLoader
          },
        ],
      },
    ],
  },
]);






const App=()=> {
  // const [integer, setInteger] = useState({})
  // const [data, setData] = useState({});
  // useEffect(() => {
     
  //   readData();
  // }, []);// Empty dependency array ensures it runs once on mount


  // const readData=()=>{
  //     const floatRef=firebase.database().ref('test/float')
  //     const intRef=firebase.database().ref('test/int')

  //     floatRef.on('value',(snapshot)=>{
  //       const floatValue=snapshot.val();
  //       if (snapshot.exists()) {
  //         setData(floatValue);
  //         console.log(floatValue);
  //       } else {
  //         setData({});
  //       }
  //     })
  
  //     intRef.on('value',(snapshot)=>{
  //       const intValue=snapshot.val();
  //       if (snapshot.exists()) {
  //         setInteger(intValue);
  //         console.log(intValue);
  //       } else {
  //         setInteger({});
  //       }
  //     })
  // }
  
    // <>
    //   <section id="center">
    //     <h4 className='title'>Here we come</h4>
    //     {data ? (
    //     // Render your data, e.g., if data is an object
    //     <p>Value: {JSON.stringify(data)}</p>
    //   ) : (
    //     <p>No data found.</p>
    //   )}
    //   {integer ? (
    //     // Render your data, e.g., if data is an object
    //     <p>Value two: {JSON.stringify(integer)}</p>
    //   ) : (
    //     <p>No data found.</p>
    //   )}
    // </section>
    // </>
 // )
 return (
  <>
  <RouterProvider router={router} />;
  
  </>
 )
}


export default App
