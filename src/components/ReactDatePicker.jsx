import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
const ReactDatePicker = () => {
    const [selectedDate,setSelectedDate]=useState(null)

 const   handleDateChange=(date)=>{
        setSelectedDate(date)
    }

const minDate=new Date("06-09-2025")
const maxDate=new Date()

  return (
  
    <div>
         <h1>Hello Date Picker</h1>
         <DatePicker 
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
          minDate={minDate}
          maxDate={maxDate}
         />
    </div>
  )
}

export default ReactDatePicker
