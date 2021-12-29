// import React, {useState} from 'react'
// export default function Test() {
// const [hidden, setHidden] = useState(false);
//   return (
//      <div className="Test">
//       {!hidden && <button onClick={() => setHidden(true)}>Click Me</button>}
//     </div>
//   );
// }
// import React from 'react'

// export default function Test() {
//   return (
//     <div>
//       <img style={{ width: "200px", padding: "10px" }} src="images/logo.png" alt="" />
//     </div>
//   )
// }


// import React, { useState, useEffect } from 'react';
// import studentassessmentservices from '../../../services/studentassessment';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import PDF,{Text,Addpage,Line,Image,Table,Html} from 'jspdf-react'

// export default function Result() {
//     const [results, setResults] = useState([]);
//     const [studentid, setStudentid] = useState('');
//     const [per, setPer] = useState(0);
//     const [datas,setDatas]=useState([])
//     const [Rs,setRs]=useState(0)
//     const data1 = useSelector(state => state.UserData)
//     const [test1,setTest1]=useState([])
//     let id = 1;
//     let per=0;
//     let r=0;
//     useEffect(async () => {
//      const {data}= await studentassessmentservices.viewstudentassesment()
//      setTest1(data)
//             .then(res => {
//                 const result = res.data;
//                 setResults(res.data);
//                 setStudentid(data.user.id)
//                 console.log(result)
//             })

        
        
//     }, [])
//     useEffect(() => {
//         (test1.filter(result => result.s_id == data1.user.id)).forEach(element => {
//             element.correctanswer==element.answer && r++
//         });
//         setRs(r)
//      setDatas( (test1.filter(result => result.s_id == data1.user.id)).map((result) => 
//         {
//             return result }))
              
//     }, [test1])

//     function Result() {
//         if(per>60){
//             console.log('first')
//         }
//         else if(per>30 && per<60){
//             console.log('second')
//         }
//         else{
//             console.log('fail')
//         }
//     } 
// const test = () => {
//     <tr> <td>{id++}</td><td hidden>{result.correctanswer==result.student_answer&&r++}</td><td>{result.question}</td><td>{result.student_answer}</td><td>{result.correctanswer}</td></tr>})
    
//  console.log('test')
//   setR(r)
// }
    
//     return (
//         <div className='container justify-content-center d-flex'>
//             <div className='col-md-6'>
//                 <div class="accordion accordion-flush border mar-top" id="accordionFlushExample">
//                     <div class="accordion-item">
//                         <h2 class="accordion-header" id="flush-headingTwo">
//                             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
//                                 {data1.user.name}
//                             </button>
//                         </h2>
//                         <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
//                             <table class="table table-bordered">
//                                 <thead>
//                                     <tr class="table-info">
//                                         <th scope="col-2">S.no.</th>
//                                         <th scope="col-2">Question</th>
//                                         <th scope="col-2">Answer</th>
//                                         <th scope="col-2">Correct Answer<Link to={""} class="fa fa-download"></Link></th>
//                                     </tr>
//                                 </thead>
//                                 <tbody> 
//                                 {datas.map(result=>{return(<tr> <td>{id++}</td><td hidden>{result.correctanswer==result.student_answer&&r++}</td><td>{result.question}</td><td>{result.student_answer}</td><td>{result.correctanswer}</td></tr>)})}                             
//                                 </tbody>
//                             </table>
//                             <table class="table table-bordered">
//                                 <thead>
//                                     <tr class="table-info">
//                                         <th scope="col-2">total Question</th>
//                                         <th scope="col-2">Correct Answer</th>
//                                         <th scope="col-2">percentage</th>
//                                         <th scope="col-2">Grade</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                <td hidden>
//                                     {setPer(r/(id - 1)*100)} 
//                                </td>
//                                    <tr>
//                                     <td>{id - 1}</td>
//                                     <td>{Rs}</td>
//                                      <td>{Rs/(id-1)*100}%</td>  
//                                      <td>{Result()}</td> 
//                                     </tr>                                  
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
