import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import './DarkModeTheme.css'
const CustomDatePickerDarkTheme = () => {
  const [selectedDate,setSelectedDate]=useState(null)
  return (
    <div className='date-picker-container'>
      <h2>Select a Date</h2>
      <DatePicker 
      selected={selectedDate}
      onChange={(date)=>setSelectedDate(date)}
      dateFormat="yyyy/MM/dd"
      placeholderText='Select a date'
      className='custom-datepicker'
      />
    </div>
  )
}

export default CustomDatePickerDarkTheme
