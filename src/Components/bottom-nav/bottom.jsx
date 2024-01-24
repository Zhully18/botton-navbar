import React, { useState } from 'react'
import './bottom.css'
import contacts from '../Asset/contacts-line.svg'
import home from '../Asset/home-4-line.svg'
import work from '../Asset/user-add-line.svg'
import email from '../Asset/mail-fill.svg'
import { Link } from 'react-router-dom'

const Bottom = () => {
   const [menu, setMenu] =useState('home')
  return (
    <div>
        <div className="container">
          <nav className='nav-container'>
          <ul>
                <Link to='/'><li onClick={()=>{setMenu("home")}} className="nav-list"><img src={home} alt='home' className='img'/><br/>Home {menu==="home"?<hr/>:<></>} </li></Link>
                <Link to='/about'><li onClick={()=>{setMenu("about")}} className="nav-list"> <img src={work} alt="" className='img'/><br/> About {menu==="about"?<hr/>:<></>} </li></Link>
                <Link to='/work'><li onClick={()=>{setMenu("work")}} className="nav-list"> <img src={email} alt="" className='img'/><br/> Work {menu==="work"?<hr/>:<></>} </li></Link>
                <Link to='/contact'><li onClick={()=>{setMenu("contact")}} className="nav-list"> <img src={contacts} alt="" className='img'/><br/> Contact {menu==="contact"?<hr/>:<></>} </li></Link>
            </ul>
          </nav>
            
        </div>
    </div>
  )
}

export default Bottom