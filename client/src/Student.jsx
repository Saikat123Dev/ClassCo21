import { useState } from 'react';
import Header from './StudentDashboard/Header';
import Sidebar from './StudentDashboard/Sidebar';
import Home from './StudentDashboard/Home';
import './StudentApp.css';
import { Outlet } from "react-router-dom";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Header open={toggleSidebar}/>
      
      <Sidebar open={openSidebarToggle} toggle={toggleSidebar}/>
      <Outlet/>
      <Home />
      
    </div>
  )
}

export default App;
