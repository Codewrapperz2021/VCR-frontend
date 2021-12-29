import '../../App.css';
import '../script';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import subjectservices from '../../services/subjectservices';
import studentservices from '../../services/studentservices';
import { useSelector } from 'react-redux';
import axios from 'axios'





const StudentDashboard = () => {

    const [subjects, setSubjects] = useState([]);
    const [student, setStudent] = useState([]);
    const [course, setCourse] = useState();
    const data = useSelector(state => state.UserData)
    let sn=1;
    useEffect(() => {
        subjectservices.viewsubject()
            .then(res => {
                const subject = res.data;
                setSubjects(subject);
            })
            studentservices.viewstudent()
            .then(res=>{
                const students = res.data;
                setStudent(students)
            })  
            for(let i=0; i<student.length;i++){
                if(student[i].email==data.data.user?.email){
                 setCourse(student[i]?.course_id)
                }
             }
             console.log(data.data.user?.email) 
    }, [])
  const logout = (token)=>{
        axios.interceptors.request.use(function (config){
            const token = data.data.token
            console.log(token)
            config.headers.Authorization = token ? `Bearer ${token}` : '';
            return config;
        })
        axios.post('http://localhost:8000/api/logout',data)
    }
    return (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>Student Dashboard</title>
                <link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet" />

            </head>
            <body className="sb-nav-fixed">
                <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">

                    <img style={{ width: "200px", padding: "10px" }} src="images/logo.png" alt="" />


                    <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars navbar-logo"></i></button>

                    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                        <div className="input-group">

                        </div>
                    </form>


                   

                    <button type="button"class="btn btn-warning ">Hii, {data.data.user.name}</button>

                    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img className='profile' src={`http://localhost:8000/images/${data.data.user.profileimage}`}/></a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">

                                <li><a className="dropdown-item" onClick={()=>logout(data.data.token)}>Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div className="sb-sidenav-menu">
                                <div className="nav">
                                    <div className="sb-sidenav-menu-heading">Core</div>
                                    <Link className="nav-link" to="/studentdashboard">
                                        <div className="sb-nav-link-icon  "><i className="fas fa-tachometer-alt navbar-logo"></i></div>
                                        <h6 className="pt-2 " style={{ color: "white" }}>Student Dashboard</h6>
                                    </Link>
                                    <Link className="nav-link" to="#">
                                        <div className="sb-nav-link-icon  "><i className="fas fa-hourglass-start navbar-logo"></i></div>
                                        <h6 className="pt-2 " style={{ color: "white" }}>Time Table</h6>
                                    </Link>
                                    <Link className="nav-link" to="/assessment">
                                        <div className="sb-nav-link-icon  "><i className="fas fa-columns navbar-logo"></i></div>
                                        <h6 className="pt-2 " style={{ color: "white" }}>Assessments</h6>
                                    </Link>
                                    <Link className="nav-link" to="/result">
                                        <div className="sb-nav-link-icon  "><i className="fas fa-graduation-cap navbar-logo"></i></div>
                                        <h6 className="pt-2 " style={{ color: "white" }}>Grade</h6>
                                    </Link>
                                    <Link className="nav-link" to="#">
                                        <div className="sb-nav-link-icon  "><i className="fab fa-accusoft navbar-logo"></i></div>
                                        <h6 className="pt-2 " style={{ color: "white" }}>Subjects</h6>
                                    </Link>
                                    <Link className="nav-link" to="#">
                                        <div className="sb-nav-link-icon  "><i className="fas fa-calendar-alt navbar-logo"></i></div>
                                        <h6 className="pt-2 " style={{ color: "white" }}>Calender</h6>
                                    </Link>
                                    <Link className="nav-link" to="#">
                                        <div className="sb-nav-link-icon  "><i className="fas fa-bookmark navbar-logo"></i></div>
                                        <h6 className="pt-2 " style={{ color: "white" }}>Material</h6>
                                    </Link>
                                    {/* <Link className="nav-link" to="#">
                                        <div className="sb-nav-link-icon  "><i className="fas fa-graduation-cap navbar-logo"></i></div>
                                        <h6 className="pt-2 " style={{ color: "white" }}>Grade</h6>
                                    </Link> */}
                                    <Link className="nav-link" to="#">
                                        <div className="sb-nav-link-icon  "><i className="fas fa-calendar-check navbar-logo"></i></div>
                                        <h6 className="pt-2 " style={{ color: "white" }}>Attendence</h6>
                                    </Link>
                                </div>
                            </div>
                        </nav>
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
                                <div className='col-md-4 d-flex justify-content-around shadow p-2' style={{ height: "100px" }}>
                                    <div className='col-md-3 text-center'>
                                        <p>Attendence</p>
                                        <p className='fs-3 text-danger'>345</p>

                                    </div>
                                    <div className='col-md-3 text-center'>
                                        <p>Half day</p>
                                        <p className='fs-3 text-danger'>40</p>

                                    </div>
                                    <div className='col-md-3 text-center'>
                                        <p>Leave</p>
                                        <p className='fs-3 text-primary'>40</p>
                                    </div>

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
                                    {course ? (subjects.filter(subject => subject.course_id == course )).map((subject) => { return <tr> <td>{sn++}</td><td>{subject.sname}</td><td>{subject.subject_code}</td></tr> }) : subjects.map((subject) => { return <tr> <td>{subject.id}</td><td>{subject.sname}</td><td>{subject.subject_code}</td></tr> })}
                                        {/* {subjects.map(subject => <tr>
                                            <td>{subject.id}</td>

                                            <td>{subject.sname}</td>
                                            <td>{subject.subject_code}</td>

                                        </tr>)
                                        } */}
                                    </tbody>
                                </table>

                            </div>
                        </main>
                        <footer className="py-4 bg-light mt-auto">
                            <div className="container-fluid px-4">
                                <div className="d-flex align-items-center justify-content-between small">
                                    <div className="text-muted">Copyright &copy; RealCODERZ</div>

                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></script>
                <script src="assets/demo/chart-area-demo.js"></script>
                <script src="assets/demo/chart-bar-demo.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></script>
                <script src="js/datatables-simple-demo.js"></script>

            </body>
        </html>
    );
};

export default StudentDashboard;
