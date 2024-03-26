import React, { useState } from 'react';
import { FaNoteSticky } from 'react-icons/fa6';
import { GiLevelFour } from 'react-icons/gi';
import { BsFillTrophyFill } from 'react-icons/bs';
import { CgPlayListCheck } from "react-icons/cg";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Calendar from '../components/Calender';

function Home() {
  const data = [
    { name: 'Attendance', Performance: 50 },
    { name: 'Quiz', Performance: 30 },
    { name: 'Assignment', Performance: 69 },
    { name: 'ExtraCurricular', Performance: 60 },
    { name: 'Quiz', Performance: 30 },
  ];

  const divStyle = {
    height: '170px', 
  };

  const cardStyle = {
    ...divStyle,
    background: '#2f2f2f', 

    borderRadius: '8px', 
    padding: '20px', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    textAlign: 'center',
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 14px, rgba(0, 0, 0, 0.3) 0px 13px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
    transition: 'all 0.3s ease',
  };

  const cardHoverStyle = {
    background: '#4f4f4f', 
    borderRadius: '10px', 
    boxShadow: 'rgba(0, 0, 0, 0.8) 0px 2px 20px, rgba(0, 0, 0, 0.6) 0px 15px 15px -7px, rgba(0, 0, 0, 0.4) 0px -3px 0px inset',
    transform: 'scale(1.05)',
  };

  // State to track hover state
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="main-container dark-theme">
      <div className="main-title dark-bg" >
        <h2 className="text-2xl font-bold">Hi there</h2>
      </div>

      <div className="main-cards">
        <div className="card bg-blue-300 dark-card shadow-lg" style={{ ...cardStyle, ...(isHovered && cardHoverStyle),  }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-gray-800 rounded-lg p-5 flex flex-col justify-center items-center shadow-lg" style={{ ...cardStyle, background: '#2c2c2c', color: 'aqua' }}>
            <BsFillTrophyFill className="card_icon text-4xl ml-auto text-yellow-500" />
            <h2 className="text-3xl font-bold">56</h2>
            <h2>Total Trophy Earned </h2> 
          </div>
        </div>

        <div className="card bg-blue-300 dark-card shadow-lg" style={{ ...cardStyle, ...(isHovered && cardHoverStyle) }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-gray-800 rounded-lg p-5 flex flex-col justify-center items-center shadow-lg" style={{ ...cardStyle, background: '#2c2c2c', color: 'aqua' }}>
            <GiLevelFour className="card-icon text-4xl ml-auto text-blue-500" />
            <h2 className="text-3xl font-bold">3</h2>
            <h2>Total Badges Earned </h2> 
          </div>
        </div>

        <div className="card bg-blue-300 dark-card shadow-lg" style={{ ...cardStyle, ...(isHovered && cardHoverStyle) }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-gray-800 rounded-lg p-5 flex flex-col justify-center items-center shadow-lg" style={{ ...cardStyle, background: '#2c2c2c', color: 'aqua' }}>
            <FaNoteSticky className="text-4xl ml-auto text-green-500" />
            <h2 className="text-3xl font-bold">36</h2>
            <h2>Private Notes / Public Notes </h2> 
          </div>
        </div>

        <div className="card bg-blue-300 dark-card shadow-lg" style={{ ...cardStyle, ...(isHovered && cardHoverStyle) }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-gray-800 rounded-lg p-5 flex flex-col justify-center items-center shadow-lg" style={{ ...cardStyle, background: '#2c2c2c', color: '#fff' }}>
            <CgPlayListCheck className="text-5xl text-blue-500" />
            <h2 className="text-3xl font-bold">36</h2>
            <h2>Statistics Granted</h2> 
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <ResponsiveContainer width="50%" height="48%">
    <div style={{ width: '100%', height: '300px' }} >
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 15,
          right: 0,
          left: -18,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="linear" dataKey="Performance" stroke="grey" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  </ResponsiveContainer>

  <ResponsiveContainer width="50%" height="48%">
    <div style={{ width: '100%', height: '300px' }}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 15,
          right: 0,
          left: -18,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Performance" stroke="grey" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  </ResponsiveContainer>
</div>


      <div style={{ display: 'flex' }}>
        <div className="flex justify-center items-center" style={{ marginRight: 'auto' }}>
          <Calendar />
        </div>

        <div style={cardStyle}>
      <div className="bg-[#2f2f2f] rounded-2xl dark-card shadow-xl h-full">
        <h1 className="text-center text-2xl font-bold text-white">Pending Assignment</h1>
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          <div className="text-center">Subject</div>
          <div className="text-center">Teachers Name</div>
          <div className="text-center">Deadline</div>
          <div className="text-center">English</div>
          <div className="text-center">Mr.A.Roy</div>
          <div className="text-center">22.03.2024</div>
          <div className="text-center">Science</div>
          <div className="text-center">Mr.Shyam Saha</div>
          <div className="text-center">23.3.2024</div>
        </div>
      </div>
    </div>
      </div>

      
    </main>
  );
}

export default Home;
