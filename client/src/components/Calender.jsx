
import { useState } from 'react';
import Calendar from 'react-calendar';


function CalendarApp() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
     
     <div className='bg-[#2f2f2f] rounded-lg p-5 flex flex-col justify-center items-center shadow-lg' style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset' }}>

        <Calendar onChange={setDate} value={date} />
        <p className='text-center'>
        <span className='bold'></span>{' '}
        {date.toDateString()}
      </p>
      </div>
      
    </div>
  );
}

export default CalendarApp;