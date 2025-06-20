import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import {isWeekend} from "date-fns"
const ReactDatePicker = () => {
    const [selectedDate,setSelectedDate]=useState(null)

 const   handleDateChange=(date)=>{
        setSelectedDate(date)
    }

// const minDate=new Date("06-09-2025") for restriction date from this date
// const maxDate=new Date() to current date 

const isWeekendDay=(date)=>{ // function to check if a date is a weekend
    return isWeekend(date)
}

const filterWeekends=(date)=>{  //function to filter out weekends
    return !isWeekendDay(date);
}
const importantDates=["06/15/2025","07/01/2025","08/07/2025"];

const highlightImportantDates=(date)=>{
  const formattedDate=date.toLocaleDateString("en-US");
  return importantDates.includes(formattedDate); 
}

  return (
  
    <div>
         <h1>Hello Date Picker</h1>
         <p>Highlighted dates are holidays</p>
         <DatePicker 
         inline //inline for removing input box in calendar and show the calendar 
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy, hh:mm"
        //   minDate={minDate}
        //   maxDate={maxDate}
        filterDate={filterWeekends}
        // showTimeSelect
        // timeIntervals={30}
        // timeFormat='hh:mm'    for time slection
        highlightDates={importantDates.map((dateString)=>new Date(dateString))}
         />
    </div>
  )
}

export default ReactDatePicker
