
import 
{ BsGrid1X2Fill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import "../StudentApp.css"
function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            
            <div className='sidebar-brand bg-black rounded-full h-[70px] w-[70px]'>
                <img src='https://cdn-icons-png.flaticon.com/512/4892/4892735.png'className='h-16 w-16'/> PROFILE
                </div>
                
              
            
            <div className='close_icon' onClick={OpenSidebar}>X</div>
        </div>

        <ul className='sidebar-list'>
            <div className="flex">
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            </div>

            <li className='sidebar-list-item'>
                <a href="notes">
                    <BsFillGrid3X3GapFill className='icon'/> 
                    Upload Notes
                </a>
            </li>
            <li className='sidebar-list-item flex flex-row'>
                <a href="quizz">
                    <BsPeopleFill className='icon'/>Attempt Quiz
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="Assignments">
                    <BsListCheck className='icon'/> Assignment
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Update Profile
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Settings
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar