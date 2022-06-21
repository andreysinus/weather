import React from 'react'
import './sidebar.css'
import myLogo from './logo.svg'
import SidebarButton from './sidebarButton';
import { MdFavorite } from "react-icons/md";
import { MdCalendarViewDay } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { MdLocalFireDepartment } from "react-icons/md";
import { FaSignOutAlt, FaPlay } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
        <img className='logo-img' src={myLogo} alt='Player'/>
        <div>
            <SidebarButton title="Feed" to="/feed" icon={<MdCalendarViewDay/>}/>
            <SidebarButton title="Trending" to="/trending" icon={<MdLocalFireDepartment/>}/>
            <SidebarButton title="Player" to="/player" icon={<FaPlay/>}/>
            <SidebarButton title="Favourite" to="/favourites" icon={<MdFavorite/>}/>
            <SidebarButton title="Library" to="/" icon={<MdLibraryBooks/>}/>
        </div>
        <SidebarButton title="Sign out" to="" icon= {<FaSignOutAlt/>}/>
    </div>
  ) 
}
