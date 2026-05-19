import React,{ useState,useEffect } from 'react'
import firebase from '../firebase'
import Wrapper from '../assets/Wrappers/Datadashboard'
const DataDashboard = () => {
  const [phaseone, setPhaseone] = useState(0)
  const [phasetwo, setPhasetwo] = useState(0)
  const [phasethree, setPhasethree] = useState(0)
  useEffect(() => {
     
    readData();
  }, []);// Empty dependency array ensures it runs once on mount


  const readData=()=>{
      const phaseone=firebase.database().ref('threePhase/phaseOne')
      const phasetwo=firebase.database().ref('threePhase/phaseTwo')
      const phasethree=firebase.database().ref('threePhase/phaseThree')

      phaseone.on('value',(snapshot)=>{
        const phaseone=snapshot.val();
        if (snapshot.exists()) {
          setPhaseone(phaseone);
          console.log(phaseone);
        } else {
          setPhaseone(0);
        }
      })
  
      phasetwo.on('value',(snapshot)=>{
        const phasetwo=snapshot.val();
        if (snapshot.exists()) {
          setPhasetwo(phasetwo);
          console.log(phasetwo);
        } else {
          setPhasetwo(0);
        }
      })

      phasethree.on('value',(snapshot)=>{
        const phasethree=snapshot.val();
        if (snapshot.exists()) {
          setPhasethree(phasethree);
          console.log(phasethree);
        } else {
          setPhasethree(0);
        }
      })
  }
  return (
    <Wrapper>
      <h1 className='top'>data dashboard</h1>
    <div className="dashboard">
      <div className="one">
      <h4 className='title'>PHASE ONE</h4>
        {phaseone==1? (
        // Render your data, e.g., if data is an object
        <div>
          <p className='on'>PHASE-ONE: <span className='on-1'>ON</span></p>
          <h3 className='running'>RUNNING....</h3>
        </div>
       
       ) : (
        <div>
          <p className='on'>PHASE-ONE: <span className='off'>OFF</span></p>
          <p className='off-1'>Fault detected on Phase one. Please alert Technicians to rectify the problem.</p>
        </div>
         )}
         
      </div>
      <div className="two">
      <h4 className='title'>PHASE TWO</h4>
      {phasetwo==1? (
        // Render your data, e.g., if data is an object
       <div>
          <p className='on'>PHASE-TWO: <span className='on-1'>ON</span></p>
          <h3 className='running'>RUNNING....</h3>
       </div>
       ) : (
        <div>
          <p className='on'>PHASE-TWO: <span className='off'>OFF</span></p>
          <p className='off-1'>Fault detected on Phase two. Please alert Technicians to rectify the problem.</p>
        </div>
         )}
      </div>
      <div className="three">
      <h4 className='title'>PHASE THREE</h4>
      {phasethree==1? (
        // Render your data, e.g., if data is an object
       <div>
          <p className='on'>PHASE-THREE: <span className='on-1'>ON</span></p>
          <h3 className='running'>RUNNING....</h3>
       </div>
       ) : (
        <div>
          <p className='on'>PHASE-THREE: <span className='off'>OFF</span></p>
          <p className='off-1'>Fault detected on Phase three. Please alert Technicians to rectify the problem.</p>
        </div>
         )}
      
      </div>
    </div>
      
    
    </Wrapper>
  )
}

export default DataDashboard
