import React from 'react'
import './sidebar.css'
import myLogo from './logo.svg'
import "./sidebarButton.js"

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
        <img className='logo-img' src={myLogo} alt='Player'/>
        <div>
            <sidebarButton />
            <sidebarButton />
            <sidebarButton />
            <sidebarButton />
        </div>
    </div>
  ) 
}
