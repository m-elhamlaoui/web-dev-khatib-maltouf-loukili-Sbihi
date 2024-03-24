import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaCircle } from "react-icons/fa";
import './calendar.css';
function MyCalendar({ dateRanges }) {



  const tileClassName = ({ date }) => {
    const isInRange = dateRanges.some(({ startDate, endDate }) => {
      const dateplusOneDay = new Date(date);
      dateplusOneDay.setDate(dateplusOneDay.getDate() + 1);
      return dateplusOneDay >= startDate && dateplusOneDay <= endDate;
    });
    const today = new Date()
    const isBeforeToday = date < today.setDate(today.getDate() - 1);
  
    if (isInRange) {
      return 'selected-date';
    } else if (isBeforeToday) {
      return 'before-today';
    } else {
      return 'unselected-date';
    }
  };

  return (
    <div>
      
      <Calendar
        tileClassName={tileClassName}
        value={null}
        className="rounded-lg border-2 border-gray-300"
      />
      <div className='flex'>
        <div className='flex flex-col items-center mr-8'>
          <h1 className='mb-4'>journées disponibles</h1>
          <FaCircle style={{ color: 'green' }} />
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='mb-4'>journées Occupé</h1>
          <FaCircle style={{ color: 'red' }} />
        </div>
      </div>

    </div>
  );
}

export default MyCalendar;
