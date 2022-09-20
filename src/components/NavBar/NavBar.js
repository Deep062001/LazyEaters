import React from 'react'
import Logo from '../../assets/Lazeee.png'
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import './NavBar.scss'
import {  useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
        <div className='logo-div'>
            <img className='logo-img' src={Logo} alt='logo' /><p>Eaters</p>
        </div>
          <ShoppingCart className="icon-navbar" onClick={()=>{
            navigate("/cart");
          }}/>
    </div>
  )
}

export default NavBar