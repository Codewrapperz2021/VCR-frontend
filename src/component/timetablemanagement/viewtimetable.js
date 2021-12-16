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
      {days.map(day=>
        
         <th>{day.day_name}</th>
      
      )}
        </tr>
      </thead>
      <tbody>
          {time.map(tym=>
              <tr>
              <td>{tym.lect_time+'-' +(parseInt(tym.lect_time)+1)+":00"}</td>
              {timetable.map(tym=>
              
              <td>{tym.sname}</td>
            //  {/* <td>{console.log()}</td> */}
              
          )}
             
              </tr>
          )}
          
          {
            //   for(let i=0;i<4;i)
          }
              
      </tbody>
      {/* <tbody>
        {timetable.map(table => <tr>
          <td>{table.id}</td>
          <td>{table.cname}</td>
          <td>{table.day_name}</td>
          <td>{table.lect_name}</td>
          <td>{table.sname}</td>
          <td>{table.first_name}</td>
        </tr>)
        }
      </tbody> */}
    </table>
  )
}
