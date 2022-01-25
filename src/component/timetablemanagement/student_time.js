import React, { useState, useEffect } from 'react'
import timetableservices from '../../services/timetableservices';
import dayservices from '../../services/dayservices';
import lectureservices from '../../services/lectureservices';
import studentservices from '../../services/studentservices';
import Navbar from '../masterdas/navbar';
import Studentsidebar from '../masterdas/studentsidebar';
import Footer from '../masterdas/footer';
import { useSelector } from 'react-redux';


export default function Student_time() {
  const [timetable, setTimetable] = useState([]);
  const [days, setDays] = useState([]);
  const [time, setTime] = useState([]);
  const [selectcourseID, setSelectcourseID] = useState(0)
  const [course, setCourse] = useState('')
  const [student, setStudent] = useState([]);
  const data = useSelector(state => state.login.UserData)

  useEffect(() => {
    timetableservices.viewtimetable()
      .then(res => {
        const timetable = res.data;
        setTimetable(timetable);
      })
    dayservices.viewday()
      .then(res => {
        const day = res.data;
        setDays(day);
      })
    lectureservices.viewlecture()
      .then(res => {
        const time = res.data;
        setTime(time);
      })
    studentservices.viewstudent()
      .then(res => {
        const students = res.data;
        setStudent(students)
      })
    studentservices.viewstudent()
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].email == data.data.user?.email) {
            console.log(res.data[i].email)
            setSelectcourseID(res.data[i]?.course_id)
            setCourse(res.data[i]?.cname)
          }
        }
      })
  }, [])

  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Studentsidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div class="table-responsive mx-2">
              <h2 class="text-center " name="course">{course} Timetable</h2>
              <table class="table table-bordered">
                <thead>
                  <tr class="table-info text-center">
                    <th>TIME/DAY</th>
                    {days.map(day =>
                      <th class="text-uppercase">{day.day_name}</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {time.map(time =>
                    <tr>
                      <td className="text-center">{time.lect_time + '-' + (parseInt(time.lect_time) + 1) + ":00"}</td>
                      {selectcourseID ? (timetable.filter(timetable => timetable.course_name == selectcourseID && timetable.time_id == time.id)).map((tym) => { return (<td className="text-center"><button className="timebtn">{tym.sname}</button><br></br><button className="timebtntec">{tym.first_name}</button></td>) }) : ''}
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
