import React, { useEffect, useRef } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret from '../../assets/caret_icon.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const navRef = useRef()

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 100){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  })

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar_left">
        <img src={logo} alt='' />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar_right">
        <img src={search} alt='' className='icons' />
        <p>Children</p>
        <img src={bell} alt='' className='icons' />
        <div className="navbar_profile">
            <img src={profile} alt='' className='profile'/>
            <img src={caret} alt=''/>
            <div className="dropdown">
                <NavLink className="link" to="/login">Sign Out On Netflix</NavLink>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
