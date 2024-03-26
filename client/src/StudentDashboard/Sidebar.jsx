import React, { useState } from 'react';
import {
  BsGrid1X2Fill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill
} from 'react-icons/bs';
import '../StudentApp.css';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title flex' >
        <div className='sidebar-brand bg-black rounded-full h-[70px] w-[70px]'>
          <img src='https://cdn-icons-png.flaticon.com/512/4892/4892735.png' className='h-16 w-16' alt="Profile" />
          PROFILE
          <div className='icon close_icon' onClick={OpenSidebar}></div>
        </div>
       
       
       
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="/Stud" className='flex'>
            <BsGrid1X2Fill className='icon' />
            Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/notes"  className='flex'>
            <BsFillGrid3X3GapFill className='icon' />
            Upload Notes
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/quiz "  className='flex'>
            <BsPeopleFill className='icon' />
            Attempt Quiz
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/assignment"  className='flex'>
            <BsListCheck className='icon' />
            Assignment
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/Voca"  className='flex'>
            <BsGrid1X2Fill className='icon' />
            Word Challenge
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/update-profile"  className='flex'>
            <BsMenuButtonWideFill className='icon' />
            Update Profile
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/settings"  className='flex'>
            <BsFillGearFill className='icon' />
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
