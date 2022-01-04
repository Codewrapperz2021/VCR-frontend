import React, { useState, useEffect } from 'react';
import questionservices from '../../../services/questionservices'
import studentassessmentservices from '../../../services/studentassessment';
import swal from 'sweetalert';
import CountDownTimer from './countdowntimer'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
export default function Assessment_1() {
    const navigate = useNavigate();

    const hoursMinSecs = { minutes: 0, seconds: 10 }
    const [formdata, setFormdata] = useState({
        option: "",

    })
    console.log(hoursMinSecs)
  
    const data = useSelector(state => state.UserData)
    const [questions, setQuestion] = useState([]);
    const [id, setId] = useState(0);
    const [multidata, setMultidata] = useState([]);
    const s_id = data.data.user.id;
    const [count, setCount] = useState(1);


    const autosubmit=()=>{
        if( hoursMinSecs.seconds==0){
            submitHandler() 
    }}

    const submitHandler = (e) => {
        e.preventDefault();
        StoreResult();
        studentassessmentservices.addstudentassesment(multidata);
        navigate('/feedback')
        swal("Your result successfully submit!", "Please submit Your Feedback!", "success", {
            buttons: false,
            timer: 2000,
        });
        console.log("result",multidata)
    }

    useEffect(() => {
        questionservices.viewquestion()
            .then(res => {
                const question = res.data;
                setQuestion(question);
            })
    }, [])

    const StoreResult = () => {
        const data = { student_answer: formdata.option, q_id: questions[id]?.id, s_id: s_id };
        multidata.push(data)
    }


    const saveAndNext = () => {
        setId(id + 1);
        setCount(count => count + 1)
        StoreResult();
        autosubmit();


    }
    const saveAndPrev = () => {
        setId(id - 1);
        setCount(count => count - 1)
        StoreResult();
    }
    const handleClick = e => {
    }

    const handlechange = e => {
        const target = e.target
        const name = target.name
        const value = target.value
        setFormdata({
            ...formdata,
            [name]: value
        })
    }

    return (
        <div>
            <div className="container-fluid bg-success vh-100 bg-opacity-10">
                <div className="row d-flex justify-content-center bg-primary-light">
                    <div className='col-md-6 '>
                        <span className=" text-light float-end">Time Left<CountDownTimer hoursMinSecs={hoursMinSecs} /></span>
                    </div>
                    <div className='col-md-5 text-white'>
                        <span className='float-end'>{data.data.user.name}</span>
                    </div>
                </div>
                <div className="row border d-flex align-center bg-light-white">
                    <div className="col-md-6 list_style negotiate">
                        <ul className="d-flex list-unstyled mb-0 ">
                            <li><a href="">Assessment 1</a></li>
                            <li><a href="">Assessment 2</a></li>
                            <li><a href="">Assessment 3</a></li>
                        </ul>
                    </div>
                </div>
                <div className='row d-flex'>
                    <div className='col-md-9 '>
                        <form className='row' onSubmit={(e) => { submitHandler(e) }}>
                            <div className="col-md-6 text-center d-flex flex-column hey">
                                <div className="border bg-light-white">
                                    <span className="">Question:{id + 1}</span>
                                </div>
                                <div className="border bg-light-white">
                                    <p>{questions[id]?.question}</p>
                                    <hr />
                                </div>
                                <div className="mt-4 ">
                                    {/* {/ <div className="btn btn-dark float-start 0" style={{ visibility: id === 0 ? 'hidden' : "visible" }} onClick={() => saveAndPrev()}>Previous</div> /} */}
                                    <div className="btn btn-dark float-end" style={{ visibility: id === questions.length - 1 ? 'hidden' : "visible", }} onClick={() => saveAndNext()}>Next </div>
                                </div>
                            </div>
                            <div className="col-md-6  d-flex flex-column hey">
                                <div className="border text-center bg-light-white">
                                    <span className="">Options</span>
                                </div>
                                <div>
                                    <div className="border bg-light-white">
                                        <input type="radio" name="option" value={questions[id]?.ans1} checked={formdata.option == questions[id]?.ans1} id="1" onChange={handlechange} />
                                        <span >{questions[id]?.ans1}</span>
                                    </div>
                                    <div className="border bg-light-white">
                                        <input type="radio" name="option" value={questions[id]?.ans2} checked={formdata.option == questions[id]?.ans2} id="2" onChange={handlechange} />
                                        <span>{questions[id]?.ans2}</span>
                                    </div>
                                    <div className="border bg-light-white">
                                        <input type="radio" name="option" value={questions[id]?.ans3} checked={formdata.option == questions[id]?.ans3} id="3" onChange={handlechange} />
                                        <span>{questions[id]?.ans3}</span>
                                    </div>
                                    <div className="border bg-light-white">
                                        <input type="radio" name="option" value={questions[id]?.ans4} checked={formdata.option == questions[id]?.ans4} id="4" onChange={handlechange} />
                                        <span>{questions[id]?.ans4}</span>
                                    </div>
                                </div>
                                <div className=" text-center ">
                                    <input className="btn btn-dark" type="submit" style={{ visibility: id === questions.length - 1 ? 'visible' : "hidden", }} />
                                </div>

                            </div>
                        </form>
                    </div>
                    <div className='col-md-3'>
                        <div class="accordion accordion-flush border mar-top" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Assessment 1
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body d-flex  justify-content-around">
                                        {questions.map(id => (
                                            <button className="col-md-1 border p-1 text-center rounded-3 " onClick={() => handleClick(setId(id.id - 1))}>{id.id}</button>

                                        ))}
                                        <div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Assessment 2
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body d-flex justify-content-around">
                                        <div className="col-md-2 border p-2 text-center rounded-3">1</div>
                                        <div className="col-md-2 border p-2 text-center rounded-3">2</div>
                                        <div className="col-md-2 border p-2 text-center rounded-3">3</div>
                                        <div className="col-md-2 border p-2 text-center rounded-3">4</div>
                                        <div className="col-md-2 border p-2 text-center rounded-3">5</div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Assessment 3
                                    </button>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="bg-light-white fixed-bottom">
                    <div className="row border d-flex align-center ">
                        <div className="col-md-6 list_style negotiate-margin">
                            <ul className="d-flex list-unstyled mb-0 ">
                                <li className="bg-opacity-10"><a href="">Clear Response</a></li>
                                <li><a href="">Report</a></li>
                                <li><a href="">Bookmark</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 list_style negotiate-margin">
                            <ul className="d-flex list-unstyled mb-0 float-end">
                                <li><a href="">Help</a></li>
                                <li><a href="">Instruction</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}