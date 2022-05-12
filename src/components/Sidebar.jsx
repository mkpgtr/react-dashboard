import React from 'react'
import logo from '../../src/imgs/logo.png'
import './Sidebar.css'
import {useState} from 'react'
import { SidebarData } from '../Data/Data';
import {UilEstate} from '@iconscout/react-unicons';
import {UilSignOutAlt} from '@iconscout/react-unicons'
const Sidebar = () => {
    const [selected,setSelected] = useState(0)
  return (
      <div className="Sidebar">
          <div className="logo">
              <img src={logo} alt="" />
              <span>
                  Sh<span>o</span>ps
              </span>
          </div>

          <div className="menu">
             {
                 SidebarData.map((item,index)=>{
                     return (
                         <div className={selected===index?'menuItem active':'menuItem'} key={index}
                         onClick={()=>setSelected(index)}
                         >
                             
                                 <item.icon/>

                                 <span>
                                     {item.heading}
                                 </span>
                            
                         </div>
                     )
                 })
                
             }

             <div className="menuItem">
                <UilSignOutAlt/>
             </div>
          </div>
      </div>
  )
}

export default Sidebar