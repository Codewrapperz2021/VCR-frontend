import React, { useState, useEffect } from 'react'
import timetableservices from '../../services/timetableservices';
import dayservices from '../../services/dayservices';
import lectureservices from '../../services/lectureservices';


export default function Viewtimetable() {
  const [timetable, setTimetable] = useState([]);
  const [days, setDays] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    timetableservices.viewtimetable()
      .then(res => {
        const timetable = res.data;
        setTimetable(timetable);
      })
      dayservices.viewday()
      .then(res =>{
          const day = res.data;
          setDays(day);
      })
      lectureservices.viewlecture()
      .then(res =>{
          const time = res.data;
          setTime(time);
      })
  },[])
  return (
    <table class="table table-bordered">
      <thead>
      <tr class="table-info">
      <th>TIME/DAY</th>
      {days.map(day=>  
         <th class="text-uppercase">{day.day_name}</th> 
      )}
        </tr>
      </thead>
      <tbody>
          {time.map(time=>
          <tr>
              <tr><td>{time.lect_time+'-' +(parseInt(time.lect_time)+1)+":00"}</td></tr>
              </tr>
              )}
              <tr>
              {timetable.map(table =><td>
               <td>{table.sname}</td> 
               <td>{table.first_name}</td> 
               </td>
              )}
             </tr>
      </tbody>
    </table>
  )
}
 {/* {table.time_id === time.id}<br></br> */}