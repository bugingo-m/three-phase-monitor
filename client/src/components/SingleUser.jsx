import React from 'react'
import Wrapper from '../assets/Wrappers/Singleuser'
const SingleUser = ({_id,firstName,lastName,avatar,profile,odd}) => {
  return (
    <Wrapper odd={odd}>
      <header>
        <div className="user">
        
      {avatar?<img src={avatar} 
          className='img' alt='profile'/>:<span>
            <h2 className='first-char'>{firstName?.charAt(0)}</h2></span>}
            <p className="person">{firstName} <span className='country'>{lastName}</span></p>
        </div>
      
      
      
      </header>
      <div>
        <p className="biography">{profile}</p>
        
      </div>
    </Wrapper>
  )
}

export default SingleUser
