import React from 'react'
import '../../timetable.css';
import { useState, useEffect } from 'react';
import lectureservices from '../../services/lectureservices';
import courseservices from '../../services/courseservices';
import subjectservices from '../../services/subjectservices';
import facultyservices from '../../services/facultyservices';
import timetableservices from '../../services/timetableservices';
import dayservices from '../../services/dayservices';


export default function Timetable() {
    const [lectures, setLecture] = useState([]);
    const [flag, setFlag] = useState(false);
    const [courses, setCourse] = useState([]);
    const [subjects, setSubject] = useState([]);
    const [faculties, setFaculties] = useState([]);
    const [days, setDays] = useState([]);
    const [selectcourseID, setSelectcourseID] = useState(0)
    const [selectsubjectmon, setSelectsubjectmon] = useState(0)
    const [selectsubjecttue, setSelectsubjecttue] = useState(0)
    const [selectsubjectwed, setSelectsubjectwed] = useState(0)
    const [selectsubjectthr, setSelectsubjectthr] = useState(0)
    const [selectsubjectfri, setSelectsubjectfri] = useState(0)
    const [selectsubjectsat, setSelectsubjectsat] = useState(0)
    const [selectsubjectsun, setSelectsubjectsun] = useState(0)
 
    console.log(subjects)

    useEffect(() => {
        lectureservices.viewlecture()
            .then(res => {
                const lectures = res.data;
                setLecture(lectures);
            })
            dayservices.viewday()
            .then(res => {
                const days = res.data;
                setDays(days);
            })
            courseservices.viewcourse()
            .then(res => {
                const courses = res.data;
                setCourse(courses);
            })
            subjectservices.viewsubject()
            .then(res => {
                const subjects = res.data;
                setSubject(subjects);
            })
            facultyservices.viewfaculty()
            .then(res => {
                const faculties = res.data;
                setFaculties(faculties);

            })
    }, [])
   
    function handleSchedule() {
    //     e.preventDefault();
    //     const data = {course_name:selectcourse, subject_name:selectsubjectmon,faculty_name:faculties}
    //     timetableservices.addtimetable(data)
     }
    return (

            <div class="container ">
                <div class="timetable-img text-center">
                    <img src="img/content/timetable.png" alt="" />
                </div>
                <div class="table-responsive">
                    <h2 class="text-center"><select class="lecture course_select" name="course" onChange={(e) => { setSelectcourseID(e.target.value); setFlag(true) }}>
                <option value={0}>Select Course</option>
                {courses.map(course =>
                    <option value={course.id}>{course.cname}</option>
                )}</select> Timetable</h2>
                <form>
                    <table class="table table-bordered text-center">
                        <thead>
                            <tr class="bg-light-gray">
                                {days.map(day =>
                                    <th class="text-uppercase" value={day.day_name}>{day.day_name}</th>
                                )}
                            </tr>

                        </thead>
                       <tbody>
                            {lectures.map(lecture =>
                                <tr>
                                    <tr><td>{lecture.lect_name}</td><td>{lecture.lect_time + '-' + (parseInt(lecture.lect_time) + 1) + ":00"}</td></tr>
                                    
                                    <td>
                                        <select class="lecture" name="subject" onChange={(e) => setSelectsubjectmon(e.target.value)} >
                                            <option  value={0}>Select Subject</option>
                                            {selectcourseID ? (subjects.filter(subject => subject.course_id == selectcourseID)).map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) }) : subjects.map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) })}
                                        </select><br></br><br></br>
                                        <select class="lecture" name="faculty">
                                            <option value={0}>Select Faculty</option>
                                            {selectsubjectmon ? (faculties.filter(faculty => faculty.subject_id == selectsubjectmon)).map((faculty) => { return (<option value={faculty.first_name}>{faculty.first_name}</option>) }) : faculties.map((faculty) => { return (<option value={faculty.first_name}>{faculty.first_name}</option>) })}
                                        </select>
                                    </td>
                                    <td>
                                    <select class="lecture" name="subject" onChange={(e) => setSelectsubjecttue(e.target.value)} >
                                            <option value={0}>Select Subject</option>
                                            {selectcourseID ? (subjects.filter(subject => subject.course_id == selectcourseID)).map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) }) : subjects.map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) })}
                                        </select><br></br><br></br>
                                        <select class="lecture" name="faculty">
                                            <option value={0}>Select Faculty</option>
                                            {selectsubjecttue ? (faculties.filter(faculty => faculty.subject_id == selectsubjecttue)).map((faculty) => { return (<option value={faculty.first_name}>{faculty.first_name}</option>) }) : faculties.map((faculty) => { return (<option value={faculty.first_name}>{faculty.first_name}</option>) })}
                                        </select>
                                    </td>
                                    <td>
                                    <select class="lecture" name="subject" onChange={(e) => setSelectsubjectwed(e.target.value)} >
                                            <option value={0}>Select Subject</option>
                                            {selectcourseID ? (subjects.filter(subject => subject.course_id == selectcourseID)).map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) }) : subjects.map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) })}
                                        </select><br></br><br></br>
                                        <select class="lecture" name="faculty">
                                            <option value={0}>Select Faculty</option>
                                            {selectsubjectwed ? (faculties.filter(faculty => faculty.subject_id == selectsubjectwed)).map((faculty) => { return (<option value={faculty.first_name}>{faculty.first_name}</option>) }) : faculties.map((faculty) => { return (<option value={faculty.first_name}>{faculty.first_name}</option>) })}
                                        </select>
                                    </td>
                                    <td>
                                    <select class="lecture" name="subject" onChange={(e) => setSelectsubjectthr(e.target.value)} >
                                            <option value={0}>Select Subject</option>
                                            {selectcourseID ? (subjects.filter(subject => subject.course_id == selectcourseID)).map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) }) : subjects.map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) })}
                                        </select><br></br><br></br>
                                        <select class="lecture" name="faculty">
                                            <option value={0}>Select Faculty</option>
                                            {selectsubjectthr ? (faculties.filter(faculty => faculty.subject_id == selectsubjectthr)).map((faculty) => { return (<option value={faculty.first_name}>{faculty.first_name}</option>) }) : faculties.map((faculty) => { return (<option value={faculty.first_name}>{faculty.first_name}</option>) })}
                                        </select>
                                    </td>
                                    <td>
                                    <select class="lecture" name="subject" onChange={(e) => setSelectsubjectfri(e.target.value)} >
                                            <option value={0}>Select Subject</option>
                                            {selectcourseID ? (subjects.filter(subject => subject.course_id == selectcourseID)).map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) }) : subjects.map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) })}
                                        </select><br></br><br></br>
                                        <select class="lecture" name="faculty">
                                            <option value={0}>Select Faculty</option>
                                            {selectsubjectfri ? (faculties.filter(faculty => faculty.subject_id == selectsubjectfri)).map((faculty) => { return (<option value={faculty.first_name}>{faculty.first_name}</option>) }) : faculties.map((faculty) => { return (<option value={faculty.first_name}>{faculty.first_name}</option>) })}
                                        </select>
                                    </td>
                                    <td>
                                    <select class="lecture" name="subject" onChange={(e) => setSelectsubjectsat(e.target.value)} >
                                            <option value={0}>Select Subject</option>
                                            {selectcourseID ? (subjects.filter(subject => subject.course_id == selectcourseID)).map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) }) : subjects.map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) })}
                                        </select><br></br><br></br>
                                        <select class="lecture" name="faculty">
                                            <option value={0}>Select Faculty</option>
                                            {selectsubjectsat ? (faculties.filter(faculty => faculty.subject_id == selectsubjectsat)).map((faculty) => { return (<option value={faculty.first_name}>{faculty.first_name}</option>) }) : faculties.map((faculty) => { return (<option value={faculty.first_name}>{faculty.first_name}</option>) })}
                                        </select>
                                    </td>
                                    <td>
                                    <select class="lecture" name="subject" onChange={(e) => setSelectsubjectsun(e.target.value)} >
                                            <option value={0}>Select Subject</option>
                                            {selectcourseID ? (subjects.filter(subject => subject.course_id == selectcourseID)).map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) }) : subjects.map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) })}
                                        </select><br></br><br></br>
                                        <select class="lecture" name="faculty">
                                            <option value={0}>Select Faculty</option>
                                            {selectsubjectsun ? (faculties.filter(faculty => faculty.subject_id == selectsubjectsun)).map((faculty) => { return (<option value={faculty.first_name}>{faculty.first_name}</option>) }) : faculties.map((faculty) => { return (<option value={faculty.first_name}>{faculty.first_name}</option>) })}
                                        </select>
                                    </td>
                                    <td>
                                    <button id="button" class="Schedule" onClick={handleSchedule}>Schedule</button>
                                    </td>
                                </tr>
                            )}
                        </tbody> 
                    </table>
                    </form>
                </div>
            </div>
    )
}

{/* <tbody>
{lectures.map((lect)=><tr class="text-uppercase" value={lect.lect_name}> 
    {lect.lect_name} {lect.lect_time} 
   
    {subjects.map((sub)=><td>
        
        <select id="s1">
     
            <option value={sub.sname}>{sub.sname}</option>
                           

        </select>
        </td>)}
        </tr>)} */}









