import React,{useState,createContext,useContext} from 'react'
import Wrapper from '../assets/Wrappers/Landing';
//import React,{useState,createContext,useContext} from 'react'
//import Wrapper from '../assets/Wrappers'
import {Outlet } from 'react-router-dom'
import{FaAlignJustify} from 'react-icons/fa'
import {Link,NavLink} from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            3 <span>phase-monitor</span> app
          </h1>
          <br></br>
          <h4 className='title'>background</h4>
          <p>
          Electric power is the backbone of modern industrial and commercial activities. 
          Three-phase power distribution is widely used due to its efficiency, reliability, and ability to support heavy electrical loads. However, with the increased dependence on automated systems, uninterrupted electrical supply has become more critical than ever. A failure in any of the three phases can result in severe consequences, including equipment damage, 
          operational downtime, loss of revenue and safety hazards.
          </p>
          <p>
          In traditional settings, power monitoring is often done manually or with basic alarm systems that only detect complete blackouts. Such methods lack the capability to detect subtle faults such as phase loss, phase imbalance, under-voltage, and irregular fluctuations. These undetected failures may lead to overheating of motors, reduced efficiency, 
          harmonics and premature equipment failure.
          </p>
          <p>
          The emergence of the Internet of Things (IoT) has revolutionized remote monitoring by enabling wireless data transmission, real-time notifications, cloud dashboards, mobile alerts, and predictive analysis. IoT devices can continuously observe electrical parameters and instantly notify stakeholders when a fault occurs. This project aims to develop a comprehensive, low-cost IoT-based three-phase power monitoring system capable of detecting phase failure conditions 
          and providing timely alerts through online platforms.
    
          </p>
          <h4 className='title'>problem statement</h4>
          <p>
          Many organizations suffer from unexpected electrical disruptions but lack a reliable monitoring system capable of alerting them in real-time when faults occur in any of the three phases. Existing commercial systems are either too expensive or do not provide detailed monitoring across all phases. Manual inspection methods are reactive rather 
          than proactive and often result in delayed responses.
          </p>
          <p>
          The core problem is the absence of an affordable, IoT-enabled, multi-phase monitoring solution that can detect and report electrical anomalies instantaneously. This gap results in avoidable equipment breakdowns, costly repairs, production delays and compromised safety. Therefore, the development of a smart IoT-based 
          three-phase failure monitoring 
          system is essential for efficient energy management.
          </p>
          <h4 className='title'>General objective</h4>
          <p>
          To design, develop an IoT-based system capable of detecting and reporting three-phase power failures in 
          real-time to reduce equipment damage and operational downtime.
          </p>
          <h4 className='title'>specific objectives</h4>
          <p>To analyze three-phase power behavior and define fault detection parameters.</p>
          <p>To design and simulate a three-phase monitoring electronic circuit.</p>
          <p>To build a fully functional IoT-based prototype using physical hardware components.</p>
          <p>To test and validate the reliability and efficiency of the system under real electrical conditions.</p>
        </div>
        
      </div>
      <footer>
			
			<p style={{color:'black',
		paddingBottom:'0.5rem'}}>Already have an account?
			<Link to='/login'> login, </Link>no account yet?
			<Link to='/register'> create one </Link>.</p>
		</footer>
    </Wrapper>
  )
}

export default Landing
