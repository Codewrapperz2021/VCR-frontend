import React, { useState, useEffect } from 'react';
import studentassessmentservices from '../../../services/studentassessment';
import studentservices from '../../../services/studentservices';
import Navbar from '../../masterdas/navbar';
import Studentsidebar from '../../masterdas/studentsidebar';
import Footer from '../../masterdas/footer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';


export default function Result() {
    const [results, setResults] = useState([]);
    const [studentid, setStudentid] = useState('');
    const [student, setStudent] = useState([]);

    const data = useSelector(state => state.UserData)
    let id = 1;
    let per = 0;
    let r = 0;
    useEffect(() => {
        studentassessmentservices.viewstudentassesment()
            .then(res => {
                const result = res.data;
                setResults(result);
                setStudentid(data.data.user.id)
            })
        studentservices.viewstudent()
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].email == data.data.user?.email) {
                        setStudent(res.data[i])
                    }
                }
            })
    }, [])
    const PdfGenerate = () => {
        var doc = new jsPDF('p', 'pt', [2000, 7000]);
        doc.html(document.querySelector('#content'), {
            callback: function (pdf) {
                pdf.save(data.data.user.name + '_result.pdf')
            }
        })
    }
    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Studentsidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <h2 class="text-center"> Result</h2>
                        <div className='container justify-content-center d-flex ' id='content' >

                            <div className='col-md-11 fullres'>

                                <div className='d-flex flex-row bg-info mt-2'>
                                    <div className='col-md-4 resultdata p-4'>
                                        <div className='d-flex'><h6 className='text-uppercase'>Name : </h6><p className='pro text-uppercase'> {student.first_name} {student.last_name}</p></div>
                                        <div className='d-flex'><h6 className='text-uppercase'>roll : </h6><p className='pro text-uppercase'> {student.roll} </p></div>
                                        <div className='d-flex'><h6 className='text-uppercase'>email : </h6><p className='pro text-uppercase'> {student.email} </p></div>
                                        <div className='d-flex'><h6 className='text-uppercase'>mob no : </h6><p className='pro '> {student.phone}  </p></div>
                                        <div className='d-flex'><h6 className='text-uppercase'>college : </h6><p className='pro text-uppercase'> {student.college} </p></div>
                                        <div className='d-flex'><h6 className='text-uppercase'>address : </h6><p className='pro text-uppercase'> {student.address} </p></div>
                                    </div>
                                    <div className='col-md-2 mt-4'>
                                        <img className='resultprofile' src={`http://localhost:8000/images/profilephoto/${data.data.user.profileimage}`} />
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
                                                    {studentid ? (results.filter(result => result.s_id == studentid)).map((result) => { return <tr> <td>{id++}</td><td hidden>{result.correctanswer == result.student_answer && r++}</td><td>{result.question}</td><td>{result.student_answer}</td><td>{result.correctanswer}</td></tr> }) : ''}
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
                                                    <td hidden>{per = (r / (id - 1) * 100)}
                                                    </td>
                                                    <tr>
                                                        <td>{id - 1}</td>
                                                        <td>{r}</td>
                                                        <td>{per}%</td>
                                                        <td>{per > 30 ? 'Pass' : 'Fail'}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <center><Link to="/studentdashboard">Click to Dashboard</Link></center>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
