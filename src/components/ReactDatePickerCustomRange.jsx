import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const ReactDatePickerCustomRange = () => {
    const [dateRange,setDateRange]=useState("")
    const [startDate,setStartDate]=useState(new Date)
    const [endDate,setEndDate]=useState(null)

    const onChange=(dates)=>{
        const [start,end]=dates;
        setStartDate(start)
        setEndDate(end);
    }

    useEffect(()=>{if (startDate && endDate){
      setDateRange(`Selected date range: ${startDate.toDateString()}-${endDate.toDateString()}`);
    }else if(startDate){
        setDateRange(`Selected start date:${startDate.toDateString()}`);
    }else{
        setDateRange("")
    }
}, [startDate,endDate])

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
      <p>{dateRange}</p>
    </div>
  )
}

export default ReactDatePickerCustomRange
