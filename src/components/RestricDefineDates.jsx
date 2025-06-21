import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
const RestricDefineDates = () => {
    const [selectedDate,setSelectedDate]=useState(null);

    const handleDateChanges=(date)=>{
        setSelectedDate(date);
    }

    const disableDateRanges=[
        {start:new Date("2025-06-01"),end:new Date("2025-06-16")}
    ]
  return (
    <div>
      <p>Dates from June 2,2025 to june 15, 2025 are disable</p>
      <DatePicker 
      inline
      selected={selectedDate}
      onChange={handleDateChanges}
      dateFormat="MM/dd/yyyy"
      excludeDateIntervals={disableDateRanges}
      />
    </div>
  )
}

export default RestricDefineDates
