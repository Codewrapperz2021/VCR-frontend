import React from 'react'
import { Link } from 'react-router-dom';

const Assessment = () => {
    return (
        <div >
            <div class="d-flex align-items-center tabvar ">
                <div class="nav flex-column shadow nav-pills mx-3 p-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button class="nav-link active " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Assessment 1</button>
                    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Assessment 2</button>
                    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Assessment 3</button>
                </div>
                <div class="tab-content " id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <div class="card text-center clr-white p-3" style={{width: "40rem"}}>
                            <div class="card-body shadow ">
                                <h5 class="card-title">Give Your Assessment On Apptitude</h5>
                                <p class="card-text">Topics: Percentage, Averages, Ratio & Proportion, Speed Distance & Time, Time & Work, Pipe & Cistern</p>
                                <p class="card-text"></p>
                                <Link to="/assessment-1" class="btn btn-primary">Take Test</Link>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <div class="card text-center clr-white p-3" style={{width: "40rem"}}>
                            <div class="card-body shadow">
                                <h5 class="card-title">Verbal Assessment</h5>
                                <p class="card-text">Topics: Antonym, Synonym, Reading Comprehension, Sentence Correction, One word Substitution, Change of Speech, Articles.</p>
                                <a href="#" class="btn btn-primary">Take Test</a>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    <div class="card text-center clr-white p-3" style={{width: "40rem"}}>
                            <div class="card-body shadow">
                                <h5 class="card-title">Reasoning Assessment</h5>
                                <p class="card-text">Topics: Number Series, Blood Relation, Age Based, Syllogs, Coding-Decoding, Seating Arrangements, Direction.</p>
                                <a href="#" class="btn btn-primary">Take Test</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Assessment;
