import React, { useState, useEffect } from 'react'
import timetableservices from '../../services/timetableservices';
import dayservices from '../../services/dayservices';
import lectureservices from '../../services/lectureservices';
import courseservices from '../../services/courseservices';
import Navbar from '../masterdas/navbar';
import Adminsidebar from '../masterdas/adminsidebar';
import Footer from '../masterdas/footer';
import { Link } from 'react-router-dom';



export default function Viewtimetable() {
  const [timetable, setTimetable] = useState([]);
  const [days, setDays] = useState([]);
  const [time, setTime] = useState([]);
  const [courses, setCourse] = useState([]);
  const [selectcourseID, setSelectcourseID] = useState(0)

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
    courseservices.viewcourse()
      .then(res => {
        const courses = res.data;
        setCourse(courses);
      })
  }, [])
  return (

    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Adminsidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="table-responsive mx-2 my-2">
              <h2 className="text-center"><select className="lecture select_drop" name="course" onChange={(e) => { setSelectcourseID(e.target.value); }}>
                <option value={0}>Select Course</option>
                {courses.map(course =>
                  <option value={course.id}>{course.cname}</option>
                )}</select> Timetable</h2>
              <table className="table table-bordered table-striped ">
                <thead >
                  <tr className="table-info text-center">
                    <th>TIME/DAY</th>
                    {days.map(day =>
                      <th className="text-uppercase">{day.day_name}</th>
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
          <center><Link  to="/admindashboard">Click to Dashboard</Link></center>
          <Footer />
        </div>
      </div>
    </div>
  )
}
