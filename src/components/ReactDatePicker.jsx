import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
const ReactDatePicker = () => {
    const [selectedDate,setSelectedDate]=useState(null)

 const   handleDateChange=(date)=>{
        setSelectedDate(date)
    }
  return (
  
    <div>
         <h1>Hello Date Picker</h1>
         <DatePicker 
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
         />
    </div>
  )
}

export default ReactDatePicker
