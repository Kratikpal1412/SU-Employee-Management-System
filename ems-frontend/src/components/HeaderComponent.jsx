import React from 'react'
import imgl from '../assets/SU_logo.png'

export const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-dark'>
            <a class="navbar-brand" href="#">SU-Employee Management System</a>
            <img src={imgl} alt="SU Logo" style={{width:"80px",height:"65px",margin:"8px"}}></img>


            </nav>
        </header>


    </div>
  )
}
