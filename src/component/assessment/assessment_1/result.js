import React, { useState, useEffect } from 'react';
import studentassessmentservices from '../../../services/studentassessment';
import { useSelector } from 'react-redux';
import jsPDF from 'jspdf';

export default function Result() {
    const [results, setResults] = useState([]);
    const [studentid, setStudentid] = useState('');

    
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
           
    }, [])
    const PdfGenerate = () => {
        var doc = new jsPDF('p', 'pt', [700,700]);
        doc.html(document.querySelector('#content'), {
          callback: function (pdf) {
            pdf.save(data.data.user.name+'_result.pdf')
          }
        })
    
      }
    
    return (
        <div className='container justify-content-center d-flex' >
            <div className='col-md-6'>
                <div class="accordion accordion-flush border mar-top" id="accordionFlushExample">
                    <div class="accordion-item"id='content'>
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                {data.data.user.name}
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <table class="table table-bordered" >
                                <thead>
                                    <tr class="table-info">
                                        <th scope="col-2">S.no.</th>
                                        <th scope="col-2">Question</th>
                                        <th scope="col-2">Answer</th>
                                        <th scope="col-2">Correct Answer  <button className=" fa fa-download" onClick={PdfGenerate}></button></th>
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
    )
}
