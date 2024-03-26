import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function Header({ open }) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={open} />
        </div>
        <div className='header-left'>
            <BsSearch className='icon' />
        </div>
        <div>
            
        </div>
        <div className='header-right flex flex-row gap-7'>
            <BsFillBellFill className='icon' />
            <BsFillEnvelopeFill className='icon' />
            <BsPersonCircle className='icon' />
        </div>
    </header>
  );
}

export default Header;
