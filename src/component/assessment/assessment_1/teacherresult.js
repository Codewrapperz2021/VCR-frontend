import React, { useState, useEffect } from 'react';
import studentassessmentservices from '../../../services/studentassessment';
import studentservices from '../../../services/studentservices';
import authservices from '../../../services/authservices';
import Navbar from '../../masterdas/navbar';
import Teachersidebar from '../../masterdas/teachersidebar';
import Footer from '../../masterdas/footer';
export default function Teacherresult() {
    const [results, setResults] = useState([]);
    const [student, setStudent] = useState([]);
    let per = 0;
    let id = 1;
    let r = 0;

    useEffect(() => {
        studentassessmentservices.viewstudentassesment()
            .then(res => {
                const result = res.data;
                setResults(result);
            })
        studentservices.viewstudent()
            .then(res => {
                setStudent(res.data)
            })
    }, [])

    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Teachersidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div className='table-responsive mx-2 my-2'>
                            {student.map(stu =>
                                <div class="accordion accordion-flush border mar-top" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingTwo">
                                            <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                {stu.first_name}
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
                                                    {results ? (results.filter(result => result.s_id == stu.id)).map((result) => { return <tr> <td>{id++}</td><td hidden>{result.correctanswer == result.student_answer && r++}</td><td>{result.question}</td><td>{result.student_answer}</td><td>{result.correctanswer}</td></tr> }) : ""}
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
                                                    {results ? <tr>
                                                        <td>{id - 1}</td>
                                                        <td>{r}</td>
                                                        <td>{per}%</td>
                                                        <td>{per > 30 ? 'Pass' : 'Fail'}</td>
                                                    </tr> : ''}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
