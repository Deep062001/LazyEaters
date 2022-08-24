import React from 'react'
import Logo from '../../assets/Lazeee.png'
import './NavBar.scss'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='logo-div'>
            <img className='logo-img' src={Logo} alt='logo' /><p>Eaters</p>
        </div>
        <div className='login-button-navbar'>
            <button type='submit' >Login</button>
        </div>
    </div>
  )
}

export default NavBar