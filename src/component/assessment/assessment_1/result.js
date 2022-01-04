import React, { useState, useEffect } from 'react';
import studentassessmentservices from '../../../services/studentassessment';
import { useSelector } from 'react-redux';
import jsPDF from 'jspdf';
import { Link } from 'react-router-dom';
import studentservices from '../../../services/studentservices';
import axios from 'axios';

export default function Result() {
    const [results, setResults] = useState([]);
    const [studentid, setStudentid] = useState('');
    const [student, setStudent] = useState([]);

    
    const data = useSelector(state => state.UserData)
    let id = 1;
    let per=0;
    let r=0;
    useEffect(() => {
        studentassessmentservices.viewstudentassesment()
            .then(res => {
                const result = res.data;
                setResults(result);
                setStudentid(data.data.user.id)
            })
            studentservices.viewstudent()
            .then(res=>{
                for(let i=0; i<res.data.length;i++){ 
                  if(res.data[i].email==data.data.user?.email){
                    setStudent(res.data[i])
                     
                  }  
                 }       
             })  
           
    }, [])
    const PdfGenerate = () => {
        var doc = new jsPDF('p', 'pt', [2000, 7000]);
        doc.html(document.querySelector('#content'), {
          callback: function (pdf) {
            pdf.save(data.data.user.name+'_result.pdf')
          }
        })
    
      }
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
                                <Link className="nav-link" to="/student_time">
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
                                <Link className="nav-link" to="#">
                                    <div className="sb-nav-link-icon  "><i className="fas fa-calendar-check navbar-logo"></i></div>
                                    <h6 className="pt-2 " style={{ color: "white" }}>Attendence</h6>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content">
                <div className='container justify-content-center d-flex 'id='content' >
            <div className='col-md-11 fullres'>
                <div className='d-flex flex-row bg-info mt-2'>
            <div className='col-md-4 resultdata p-4'>
                <div className='d-flex'><h6 className='text-uppercase'>Name : </h6><p className='pro text-uppercase'> {student.first_name} {student.last_name}</p></div>
                <div className='d-flex'><h6 className='text-uppercase'>roll : </h6><p className='pro text-uppercase'> {student.roll} </p></div>
                <div className='d-flex'><h6 className='text-uppercase'>email : </h6><p className='pro text-uppercase'> {student.email} </p></div>
                <div className='d-flex'><h6 className='text-uppercase'>mob no : </h6><p className='pro '> {student.phone}  </p></div>
                <div className='d-flex'><h6 className='text-uppercase'>collage : </h6><p className='pro text-uppercase'> {student.collage} </p></div>
                <div className='d-flex'><h6 className='text-uppercase'>address : </h6><p className='pro text-uppercase'> {student.address} </p></div>
            </div>
             <div className='col-md-2 '>
                 
             <img className='resultprofile' src={`http://localhost:8000/images/${data.data.user.profileimage}`}/>
                <button className="print" onClick={PdfGenerate}>print</button>
             </div>
             </div>
                <div class="accordion accordion-flush border mar-top" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Result
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <table class="table table-bordered " >
                                <thead>
                                    <tr class="table-info ">
                                        <th scope="col-2">S.no.</th>
                                        <th scope="col-2">Question</th>
                                        <th scope="col-2">Answer</th>
                                        <th scope="col-2">Correct Answer  </th>
                                    </tr>
                                </thead>
                                <tbody> 
                                   {studentid ?(results.filter(result => result.s_id == studentid)).map((result) => {return <tr> <td>{id++}</td><td hidden>{result.correctanswer==result.student_answer&&r++}</td><td>{result.question}</td><td>{result.student_answer}</td><td>{result.correctanswer}</td></tr>}): results.map((result) => { return <tr><td>{id++}</td><td>{result.question}</td><td>{result.student_answer}</td><td>{result.correctanswer}</td></tr> })}                                  
                                </tbody>
                            </table>
                            <table class="table table-bordered" >
                                <thead>
                                    <tr class="table-info">
                                        <th scope="col-2">total Question</th>
                                        <th scope="col-2">Correct Answer</th>
                                        <th scope="col-2">percentage</th>
                                        <th scope="col-2">Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                               <td hidden>{per =(r/(id - 1)*100)}
                               </td>
                                   <tr>
                                    <td>{id - 1}</td>
                                    <td>{r}</td>
                                    <td>{per}%</td>
                                    <td>{per>30?'Pass':'Fail'}</td>
                                    </tr>                                  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    )
}
