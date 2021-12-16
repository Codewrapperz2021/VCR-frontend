import { render } from '@testing-library/react';
import questionservices from '../../services/questionservices';
import React, { useState } from 'react';
import '../../form.css'
export default function Addquestion() {
  const [question, setQuestion] = useState('');
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');
    const [ans4, setAns4] = useState('');
    const [correctanswer, setCorrectanswer] = useState('');

const submitHandler = (e) =>{
e.preventDefault();
const data ={question:question, ans1:ans1,ans2:ans2,ans3:ans3,ans4:ans4,correctanswer:correctanswer}
questionservices.addquestion(data)
}
    return (
      <div>
            <form  onSubmit={(e)=>{submitHandler(e)}}>
              <div className="container pt-5 d-flex justify-content-center" >
                <div className="col-md-6 shadow p-4">
                  <h3 className="text-center">Add Question</h3>
                  <hr />
                  <label for=""><b>Question:</b></label>
                  <input id="question" type="text" placeholder="Enter your question" onChange={(e) => setQuestion(e.target.value)} />
                 
                   <label for=""><b>Answer 1</b></label>
                   <input id="ans1" type="text" placeholder="Enter Answer 1" onChange={(e) => setAns1(e.target.value)} />
                   <label for=""><b>Answer 2</b></label>
                  <input id="ans2" type="text" placeholder="Enter Answer 2" onChange={(e) => setAns2(e.target.value)} />
                   <label for=""><b>Answer 3</b></label>
                  <input id="ans3" type="text" placeholder="Enter Answer 3" onChange={(e) => setAns3(e.target.value)} />
                   <label for=""><b>Answer 4</b></label>
                  <input id="ans4" type="text" placeholder="Enter Answer 4" onChange={(e) => setAns4(e.target.value)} />
                  
                  <label for=""><b>Correct Answer</b></label>
                  <input id="correctanswer" type="text" placeholder="Enter correct answer" onChange={(e) => setCorrectanswer(e.target.value)} />
                  <button id="button" class="registerbtn" >Submit</button>
                </div>
              </div>
           </form>
      </div>
    )
  }