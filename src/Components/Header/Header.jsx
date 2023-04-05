import React from 'react';
import Logo from '../../assets/images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-[#1C2B35] px-28 py-4'>
      <img src={Logo} alt="" />
      <div className='flex justify-center items-center lg:gap-12 md:gap-6 gap-4 text-lg text-white'>
        <Link to="/" className='hover:text-orange-300'>Shop</Link>
        <Link to="/orders" className='hover:text-orange-300'>Orders</Link>
        <Link to="/inventory" className='hover:text-orange-300'>Inventory</Link>
        <Link to="/login" className='hover:text-orange-300'>Login</Link>
      </div>
      
    </div>
  );
};

export default Header;