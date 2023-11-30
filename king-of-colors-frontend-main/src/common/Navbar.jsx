import { useState } from 'react'
import './App.css'
import './Navbar.css'
import React from 'react';
import LogoutButton from '../components/profile/logout';


function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navcontainer'>
        <div className='contabout_navbar'>
          <a href='/rules' className='about_navbar'>Reglas</a>
          <a href='/about' className='about_navbar'>About</a>
          <a href='/aboutUs' className='about_navbar'>About Us</a>
        

        </div>
        <div className='titulo_navbar'><a href='/' className='titulo_navbar'> KINGS OF COLORS</a></div>
        <div className='contbuttons_navbar'>
          <a href='/login' className='buttons_navbar'>Iniciar Sesión</a>
          <a href='/registro' className='buttons_navbar'>Registrarse</a>
          <LogoutButton></LogoutButton>

        </div>
      </div>

    </nav>
  )
}

export default Navbar
