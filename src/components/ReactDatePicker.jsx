import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import {addDays,isWeekend} from "date-fns"
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

  return (
  
    <div>
         <h1>Hello Date Picker</h1>
         <DatePicker 
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
        //   minDate={minDate}
        //   maxDate={maxDate}
        filterDate={filterWeekends}
         />
    </div>
  )
}

export default ReactDatePicker
