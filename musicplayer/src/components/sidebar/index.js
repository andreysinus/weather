import React from 'react'
import './sidebar.css'
import myLogo from './logo.svg'
import SidebarButton from './sidebarButton';
import { MdSettings, MdAvTimer, MdOutlineInfo, MdOutlineWidgets } from "react-icons/md";





export default function Sidebar() {
  return (
    <div className='sidebar-container'>
        <img className='logo-img' src={myLogo} alt='Player'/>
        <div>
            <SidebarButton title="Now" to="/" icon={<MdAvTimer/>}/>
            <SidebarButton title="Random" to="/random" icon={<MdOutlineWidgets/>}/>
            <SidebarButton title="Settings" to="/settings" icon={<MdSettings/>}/>
        </div>
        <SidebarButton title="About us" to="/aboutus" icon= {<MdOutlineInfo/>}/>
    </div>
  ) 
}
