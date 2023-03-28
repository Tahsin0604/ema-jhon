import React from 'react';
import Logo from '../../assets/images/Logo.svg';

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-[#1C2B35] px-28 py-4'>
      <img src={Logo} alt="" />
      <div className='flex justify-center items-center lg:gap-12 md:gap-6 gap-4 text-lg text-white'>
        <a href="" className='hover:text-orange-300'>Order</a>
        <a href="" className='hover:text-orange-300'>Order Review</a>
        <a href="" className='hover:text-orange-300'>Manage Inventory</a>
        <a href="" className='hover:text-orange-300'>Login</a>
      </div>
      
    </div>
  );
};

export default Header;