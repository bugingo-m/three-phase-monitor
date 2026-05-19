import React,{useContext,createContext} from 'react'
import { Form,redirect,useNavigation,
  useOutletContext,useLoaderData } from 'react-router-dom'
import Wrapper from '../assets/Wrappers/Profile'
import { SingleUser } from '../components'
import customFetch from '../utils/customFetch'

export const loader = async()=>{

  try {
    const {data} = await customFetch('/user/all-users')
    return data
  } catch (error) {
    return redirect('/')
  }
}
const AdminContext = createContext()
const Admin = () => {
  const {users}= useLoaderData();
  console.log(users);
  return (
    <>
      <h5 className='test-title'>project creators</h5>
      <div className="testomonies-container">
      
      {users.map((user,index)=>{
        return(
          <SingleUser key={index} odd={(index+1)%2} {...user}/>
        )
      }

      )}
      </div>
      
    </>
  )
}

export default Admin
