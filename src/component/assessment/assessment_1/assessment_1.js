import React, { useState, useEffect } from 'react';
import questionservices from '../../../services/questionservices'
import studentassessmentservices from '../../../services/studentassessment';
import CountDownTimer from './countdowntimer'
export default function Assessment_1() {

    const hoursMinSecs = { minutes: 20, seconds: 0 }
    const [student_answer, setStudent_answer] = useState();
    
    const [questions, setQuestion] = useState([]);
    const [id, setId] = useState(0);
    const submitHandler = (e) => {
        e.preventDefault();
        const data = { student_answer: student_answer, q_id: id + 1};
        studentassessmentservices.addstudentassesment(data);    
    }

    useEffect(() => {
        questionservices.viewquestion()
            .then(res => {
                const question = res.data;
                setQuestion(question);
            })
    }, [])

    const StoreResult = () =>{
        
        const data = { student_answer: student_answer, q_id: id + 1};
        
        console.log("data",data);
      }
    
    
    const saveAndNext = () => {
        setId(id + 1);
        StoreResult();
    
    }

    const saveAndPrev = () => {
        setId(id - 1);
        StoreResult();
    
    }





    // 
    // const handleOption = e => {

    //     const target = e.target
    //     const name = target.name
    //     const value = target.value

    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     })


    // console.log(formData[1].option)
    // studentassessmentservices.addstudentassesment(formData[1].option)





    return (
        <div>
            <div className="container-fluid bg-success vh-100 bg-opacity-10">
                <div className="row text-center bg-primary-light">
                    <span className=" text-light">Time Left<CountDownTimer hoursMinSecs={hoursMinSecs} /></span>

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

                <form className="row" onSubmit={(e) => { submitHandler(e) }}>


                    <div className="col-md-5 text-center d-flex flex-column hey">
                        <div className="border bg-light-white">
                            <span className="">Question:{id + 1}</span>
                        </div>
                        <div className="border bg-light-white">
                            <p>{questions[id]?.question}</p>
                            <hr />
                        </div>
                        <div className="mt-4 ">
                            {/* {console.log('saransh',questions[id]?.id)} */}
                            <div className="btn btn-dark float-start 0"  onClick={()=>saveAndPrev()}>Previous</div>
                            <div className="btn btn-dark float-end" onClick={()=>saveAndNext()}>Next </div>
                        </div>
                    </div>
                    <div className="col-md-4  d-flex flex-column hey">
                        <div className="border text-center bg-light-white">
                            <span className="">Options</span>
                        </div>
                        <div>
                            <div className="border bg-light-white">
                                <input type="radio"  name="option" unchecked="checked" value={questions[id]?.ans1} id="1" onChange={(e) => { setStudent_answer(e.target.value) }} />
                                <span >{questions[id]?.ans1}</span>
                            </div>
                            <div className="border bg-light-white">
                                <input type="radio" name="option" unchecked="checked" value={questions[id]?.ans2} id="2" onChange={(e) => { setStudent_answer(e.target.value)}} />
                                <span>{questions[id]?.ans2}</span>
                            </div>
                            <div className="border bg-light-white">
                                <input type="radio"  name="option" unchecked="checked" value={questions[id]?.ans3} id="3" onChange={(e) => { setStudent_answer(e.target.value)}} />
                                <span>{questions[id]?.ans3}</span>
                            </div>
                            <div className="border bg-light-white">
                                <input type="radio"  name="option" unchecked="checked" value={questions[id]?.ans4} id="4" onChange={(e) => { setStudent_answer(e.target.value)}} />
                                <span>{questions[id]?.ans4}</span>
                            </div>
                        </div>
                        {/* <div>
                            <p>Option:{formData.option}</p>
                        </div> */}
                        <div className=" text-center ">
                            <input className="btn btn-dark" type="submit" style={{visibility:id===3? 'visible':"hidden", }} />
                        </div>

                    </div>


                    <div className="col-md-3 ">

                        <div class="accordion accordion-flush border mar-top" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Assessment 1
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
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
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body d-flex justify-content-around">
                                        <div className="col-md-2 border p-2 text-center rounded-3">1</div>
                                        <div className="col-md-2 border p-2 text-center rounded-3">2</div>
                                        <div className="col-md-2 border p-2 text-center rounded-3">3</div>
                                        <div className="col-md-2 border p-2 text-center rounded-3">4</div>
                                        <div className="col-md-2 border p-2 text-center rounded-3">5</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </form>

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

