import React from "react";
import {BsQuestionSquare,BsWalletFill} from 'react-icons/bs'
import {SiSinglestore} from 'react-icons/si'
import {CgProfile} from 'react-icons/cg'
// import { IoMdHome } from "react-icons/io";
import {BiCustomize,BiBorderAll} from 'react-icons/bi'
const links=[
   
   {
      id:1,
      icon:<BiBorderAll/>,
      name:'Data dashboard',
      path:'.'
   },
   {
      id:2,
      icon:<SiSinglestore/>,
      name:'Profiles',
      path:'profile'
   },
 {
    id:3,
    icon:<BsQuestionSquare/>,
    name:'project creators',
    path:'creators'
 },
 

]
export default links;