import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './home.css'
import Sidebar from '../components/sidebar'
import Settings from './settings'
import Now from './now'
import Random from './random'
import AboutUs from './aboutus'


export default function Home() {
  return (
    <Router>
        <div className='main-body'>
        <Sidebar/>    
        <Routes>
            <Route path="/" element={<Now />}/>
            <Route path="/random" element={<Random />}/>
            <Route path="/aboutus" element={<AboutUs />}/>
            <Route path="/settings" element={<Settings />}/>
        </Routes>   
        </div> 
    </Router>
  )
}
