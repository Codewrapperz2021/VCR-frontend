import '../../App.css';
import '../script';
import React, { useState, useEffect } from 'react'
import subjectservices from '../../services/subjectservices';
import studentservices from '../../services/studentservices';
import { useSelector } from 'react-redux';
import Studentsidebar from '../masterdas/studentsidebar';
import Navbar from '../masterdas/navbar';
import Footer from '../masterdas/footer';
import Viewlist from '../Todo/Viewlist';


const StudentDashboard = () => {

    const [subjects, setSubjects] = useState([]);
    const [course, setCourse] = useState();
    const data = useSelector(state => state.UserData)
    let sn = 1;
    console.log(data.data.user.email);
    console.log(course)
    useEffect(() => {
        subjectservices.viewsubject()
            .then(res => {
                const subject = res.data;
                setSubjects(subject);
            })
        studentservices.viewstudent()
            .then(res => {
                console.log("data",res.data)
                for (let i = 0; i < res.data.length; i++) {
                    console.log(res.data)
                    if (res.data[i].email == data.data.user?.email) {
                        console.log(res.data[i].email)
                        setCourse(res.data[i]?.course_id)

                    }
                }
            })
    }, [])
    return (
        <div className="sb-nav-fixed">
            <Navbar/>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Studentsidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                    <div className="card-header d-flex justify-content-between" >
                                <div>
                                    <i className="fas fa-tachometer-alt p-1"></i>
                                    Student Dashboard
                                </div>
                            </div>
                            <div className=' container d-flex justify-content-evenly  ' >
                                <div className='col-md-7 '>
                                    <div class="shadow margin-auto" style={{ maxWidth: "772px" }}>
                                        <div class="row g-0">
                                            <div class="col-md-8">
                                                <div class="card-body ">
                                                    <p> Welcome Back, {data.data.user.name}</p>
                                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                    <button className='btn btn-primary'>Learn More</button>
                                                </div>
                                            </div>
                                            <div class="col-md-4 ">
                                                <img className='' style={{ width: "200px", padding: "10px" }} src="images/student.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 d-flex justify-content-around shadow p-2 flow' style={{height:"200px"}} >
                                    <Viewlist/ >

                                </div>
                            </div>
                            <div className='container d-flex justify-content-evenly'>
                                <div className='col-md-7 p-4 shadow '>
                                    <p className='text-center fs-4'>Exam Schedule</p>
                                    <div>
                                        <div className='row d-flex border p-2  justify-content-evenly'>
                                            <div className='col-md-2 text-center'>Physics</div>
                                            <div className='col-md-3 text-center'>Test 1</div>
                                            <div className='col-md-2 text-center'>Tuesday</div>
                                            <div className='col-md-2 text-center'>8:30 AM</div>
                                            <div className='col-md-2 text-center'><a href='#'>...</a></div>
                                        </div>
                                        <div className='row d-flex border p-2  justify-content-evenly mt-2'>
                                            <div className='col-md-2 text-center'>Biology</div>
                                            <div className='col-md-3 text-center'>Practise test</div>
                                            <div className='col-md-2 text-center'>friday</div>
                                            <div className='col-md-2 text-center'>8:30 AM</div>
                                            <div className='col-md-2 text-center'><a href='#'>...</a></div>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-4 shadow p-3'>
                                    <p className='text-center fs-4'>Project Status</p>
                                    <div className='border p-2'>
                                        <p className=''>Project frog Surgery </p>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div>
                                    </div>
                                    <div className='border p-2 mt-2'>
                                        <p className=''>Project Quantum </p>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='container p-4'>
                                <table class="table table-bordered">
                                    <thead>
                                        <tr class="table-info">
                                            <th scope="col-2">S.no.</th>

                                            <th scope="col-2">Subject Name</th>
                                            <th scope="col-2">Subject Code</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {course ? (subjects.filter(subject => subject.course_id == course)).map((subject) => { return <tr> <td>{sn++}</td><td>{subject.sname}</td><td>{subject.subject_code}</td></tr> }) : ''}
                                    </tbody>
                                </table>

                            </div> 
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
export default StudentDashboard;
