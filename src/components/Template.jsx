import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export const Template = (props) => {
  return (
    <div className='template'>
        <div className='templateContainer'>
            <Link className="iframeContainer" to={props.link}>
              <div className={"iframeClass " + props.cl}></div>            
            </Link> 
            <div className='templateTitle'>{props.name}</div>
        </div>
    </div>
  )
}
