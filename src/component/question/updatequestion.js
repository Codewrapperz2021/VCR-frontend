import { render } from '@testing-library/react';
import questionservices from '../../services/questionservices';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import swal from 'sweetalert';
import '../../form.css'
export default function Updatequestion() {
  const navigate = useNavigate();
  const [question, setQuestion] = useState('');
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');
    const [ans4, setAns4] = useState('');
    const [correctanswer, setCorrectanswer] = useState('');

    
  function handlesubmit() {
    let id = Number(window.location.pathname.substring(16, 25));
    const data ={question: question, ans1: ans1,ans2:ans2,ans3: ans3,ans4: ans4,correctanswer: correctanswer}
questionservices.updatequestion(id, data).then(res => {
  navigate("/viewquestion")
  swal("Edited", "details edited successfully", "success", {
    buttons: false,
    timer: 2000,
  });
})
  }
  useEffect(() => {
    const id = window.location.pathname.substring(16,25)
    questionservices.questionById(id)
      .then(res => {
        const persons = res.data;
        setQuestion(persons.question);
        setAns1(persons.ans1)
        setAns2(persons.ans2)
        setAns3(persons.ans3)
        setAns4(persons.ans4) 
        setCorrectanswer(persons.correctanswer) 
    })
     
  },[])

  return (<div>
    
    <form>
    <div className="container pt-5 d-flex justify-content-center" >
                <div className="col-md-6 shadow p-4">
                  <h3 className="text-center">Update Question</h3>
                  <hr />
                  <label for=""><b>question</b></label>
                  <input id="question" type="text" placeholder="Enter your question"defaultValue={question} onChange={(e) => setQuestion(e.target.value)} />
                 
                   <label for=""><b>Ans1</b></label>
                   <input id="ans1" type="text" placeholder="Enter Answer 1"defaultValue={ans1} onChange={(e) => setAns1(e.target.value)} />
                   <label for=""><b>Ans2</b></label>
                  <input id="ans2" type="text" placeholder="Enter Answer 2" defaultValue={ans2} onChange={(e) => setAns2(e.target.value)} />
                   <label for=""><b>Ans3</b></label>
                  <input id="ans3" type="text" placeholder="Enter Answer 3" defaultValue={ans3} onChange={(e) => setAns3(e.target.value)} />
                   <label for=""><b>Ans4</b></label>
                  <input id="ans4" type="text" placeholder="Enter Answer 4" defaultValue={ans4} onChange={(e) => setAns4(e.target.value)} />
                  
                  <label for=""><b>Correct Answer</b></label>
                  <input id="correctanswer" type="text" placeholder="Enter correct answer" defaultValue={correctanswer}onChange={(e) => setCorrectanswer(e.target.value)} />
                  <button class="registerbtn" type="button" onClick={handlesubmit}>Update</button>
                  <center><Link  to="/teacherdashboard">Click to go back</Link></center>
                </div>
              </div>
    </form>
  </div>)
}
