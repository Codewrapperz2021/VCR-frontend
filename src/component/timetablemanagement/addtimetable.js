import React from 'react'
import '../../timetable.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import lectureservices from '../../services/lectureservices';
import courseservices from '../../services/courseservices';
import subjectservices from '../../services/subjectservices';
import facultyservices from '../../services/facultyservices';
import timetableservices from '../../services/timetableservices';
import dayservices from '../../services/dayservices';
import swal from 'sweetalert';


export default function Timetable() {
    const [lectures, setLecture] = useState([]);
    const [courses, setCourse] = useState([]);
    const [subjects, setSubject] = useState([]);
    const [faculties, setFaculties] = useState([]);
    const [days, setDays] = useState([]);
    const [selectcourseID, setSelectcourseID] = useState(0)
    const [selectsubjectID, setSelectsubjectID] = useState(0)
    const [selectfacultyID, setSelectfacultyID] = useState(0)
    const [selecttimeID, setSelecttimeID] = useState(0)
    const [multidata, setMultidata] = useState([]);
    let navigate = useNavigate();
    //     const [image, setImage] = useState();

    //    const img = () => setImage(<img style={{ width: "200px", padding: "10px" }} src="images/logo.png" alt="" />);
    function showtimetable() {
        navigate('/viewtimetable')
    }

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
    function handleSchedule(e) {
        e.preventDefault();
        timetableservices.addtimetable(multidata).then(res => {
            swal("Scheduled", "lecture Scheduled successfully", "success", {
                buttons: false,
                timer: 2000,
            });
            showtimetable()
        })
    }
    const StoreResult = () => {
        const data = { time_id: selecttimeID, subject_name: selectsubjectID, faculty_name: selectfacultyID, course_name: selectcourseID };
        multidata.push(data)
        console.log(multidata)
    }

    return (

        <div class="container ">
            <div class="timetable-img text-center">
                <img src="img/content/timetable.png" alt="" />
            </div>
            <div class="table-responsive">
                <h2 class="text-center"><select class="lecture select_drop" name="course" onChange={(e) => { setSelectcourseID(e.target.value); }}>
                    <option value={0}>Select Course</option>
                    {courses.map(course =>
                        <option value={course.id}>{course.cname}</option>
                    )}</select> Timetable</h2>
                <form>
                    <table class="table table-bordered text-center">
                        <thead>
                            <tr class="bg-light-gray">
                                <th>TIME/DAY</th>
                                {days.map(day =>
                                    <th class="text-uppercase" value={day.day_name}>{day.day_name}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {lectures.map(lecture =>
                                <tr>
                                    <div className='lect' >
                                        <tr><td class="bg-light-gray">{lecture.lect_name}</td><td class="bg-light-gray">{lecture.lect_time + '-' + (parseInt(lecture.lect_time) + 1) + ":00"}</td>
                                        </tr>
                                        <div class="form-check checktime" onClick={(e) => setSelecttimeID(e.target.value)}>
                                            <input class="form-check-input" type="checkbox" value={lecture.id} id="flexCheckDefault" />
                                        </div>
                                    </div>
                                    <td>
                                        <select class="lecture" name="subject" onChange={(e) => setSelectsubjectID(e.target.value)} >
                                            <option value={0}>Select Subject</option>
                                            {selectcourseID ? (subjects.filter(subject => subject.course_id == selectcourseID)).map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) }) : subjects.map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) })}
                                        </select><br></br><br></br>
                                        <select class="lecture" name="faculty" onChange={(e) => setSelectfacultyID(e.target.value)}>
                                            <option value={0}>Select Faculty</option>
                                            {faculties.map(faculty => { return (<option value={faculty.id}>{faculty.first_name}</option>) })}
                                        </select>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" onClick={() => StoreResult()} value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                    <td>
                                        <select class="lecture" name="subject" onChange={(e) => setSelectsubjectID(e.target.value)} >
                                            <option value={0}>Select Subject</option>
                                            {selectcourseID ? (subjects.filter(subject => subject.course_id == selectcourseID)).map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) }) : subjects.map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) })}
                                        </select><br></br><br></br>
                                        <select class="lecture" name="faculty" onChange={(e) => setSelectfacultyID(e.target.value)}>
                                            <option value={0}>Select Faculty</option>
                                            {faculties.map(faculty => { return (<option value={faculty.id}>{faculty.first_name}</option>) })}
                                        </select>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" onClick={() => StoreResult()} value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                    <td>
                                        <select class="lecture" name="subject" onChange={(e) => setSelectsubjectID(e.target.value)} >
                                            <option value={0}>Select Subject</option>
                                            {selectcourseID ? (subjects.filter(subject => subject.course_id == selectcourseID)).map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) }) : subjects.map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) })}
                                        </select><br></br><br></br>
                                        <select class="lecture" name="faculty" onChange={(e) => setSelectfacultyID(e.target.value)}>
                                            <option value={0}>Select Faculty</option>
                                            {faculties.map(faculty => { return (<option value={faculty.id}>{faculty.first_name}</option>) })}
                                        </select>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" onClick={() => StoreResult()} value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                    <td>
                                        <select class="lecture" name="subject" onChange={(e) => setSelectsubjectID(e.target.value)} >
                                            <option value={0}>Select Subject</option>
                                            {selectcourseID ? (subjects.filter(subject => subject.course_id == selectcourseID)).map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) }) : subjects.map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) })}
                                        </select><br></br><br></br>
                                        <select class="lecture" name="faculty" onChange={(e) => setSelectfacultyID(e.target.value)}>
                                            <option value={0}>Select Faculty</option>
                                            {faculties.map(faculty => { return (<option value={faculty.id}>{faculty.first_name}</option>) })}
                                        </select>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" onClick={() => StoreResult()} value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                    <td>
                                        <select class="lecture" name="subject" onChange={(e) => setSelectsubjectID(e.target.value)} >
                                            <option value={0}>Select Subject</option>
                                            {selectcourseID ? (subjects.filter(subject => subject.course_id == selectcourseID)).map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) }) : subjects.map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) })}
                                        </select><br></br><br></br>
                                        <select class="lecture" name="faculty" onChange={(e) => setSelectfacultyID(e.target.value)}>
                                            <option value={0}>Select Faculty</option>
                                            {faculties.map(faculty => { return (<option value={faculty.id}>{faculty.first_name}</option>) })}
                                        </select>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" onClick={() => StoreResult()} value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                    <td>
                                        <select class="lecture" name="subject" onChange={(e) => setSelectsubjectID(e.target.value)} >
                                            <option value={0}>Select Subject</option>
                                            {selectcourseID ? (subjects.filter(subject => subject.course_id == selectcourseID)).map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) }) : subjects.map((sub) => { return (<option value={sub.id}>{sub.sname}</option>) })}
                                        </select><br></br><br></br>
                                        <select class="lecture" name="faculty" onChange={(e) => setSelectfacultyID(e.target.value)}>
                                            <option value={0}>Select Faculty</option>
                                            {faculties.map(faculty => { return (<option value={faculty.id}>{faculty.first_name}</option>) })}
                                        </select>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" onClick={() => StoreResult()} value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </form>
            </div>
            <div className='text-center'>
                <button id="button" class="Schedule" onClick={handleSchedule}>Schedule</button>
            </div>
        </div>
    )
}



