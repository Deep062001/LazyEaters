import React from 'react'
import Logo from '../../assets/Lazeee.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
        <div className='right'>
          <ShoppingCart className="icon-navbar" onClick={()=>{
            navigate("/cart");
          }}/>
          <a href='http://localhost:3001/'><AccountCircleIcon/></a>
        </div>
    </div>
  )
}

export default NavBar