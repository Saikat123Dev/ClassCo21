import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <img src='https://cdn-icons-png.freepik.com/512/206/206897.png' className='h-16 w-16'/> PROFILE
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/Teach" className='flex'>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="teachquiz" className='flex'>
                    <BsFillGrid3X3GapFill className='icon'/> Upload Quiz
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="uploadAssign" className='flex'>
                    <BsFillGrid3X3GapFill className='icon'/> Upload Assignments
                </a>
            </li>
            <li className='sidebar-list-item flex flex-row'>
                <a href="" className='flex'>
                    <BsPeopleFill className='icon'/> Manage Students
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="QRCodegenerator" className='flex'>
                    <BsListCheck className='icon'/> Track Attendance
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" className='flex'>
                    <BsMenuButtonWideFill className='icon'/> Update Profile
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" className='flex'>
                    <BsFillGearFill className='icon'/> Settings
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar