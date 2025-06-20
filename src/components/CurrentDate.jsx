import React, { useEffect, useState } from 'react'

const CurrentDate = () => {

    const[currentDate,setCurrentDate]=useState(new Date());

    useEffect(()=>{
      const intervalId=setInterval(()=>{
        setCurrentDate(new Date());
      },1000)
      return ()=> clearInterval(intervalId)
    },[])

  return (
    <div>
      <h1>Current Date and Time</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  )
}

export default CurrentDate
