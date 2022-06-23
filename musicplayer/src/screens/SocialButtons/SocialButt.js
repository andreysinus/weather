import React from 'react'
import { Link } from "react-router-dom";
import './aboutus.css'

export default function SocialButt(props) {
  return (
        <div>
            <a className='underCels-text blockCText SN' target="_blank" href={props.to}>{props.title}</a>
        </div>
  )
}
