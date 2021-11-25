import subjectservices from '../../services/subjectservices';
import React, { useState } from 'react';
import '../../form.css'
export default function Addsubjct() {
    const [sName, setSName] = useState('');
    const [subjectCode, setsubjectcode] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        const data = { sname: sName, subject_code: subjectCode }
        subjectservices.addsubject(data)
    }
    return (
        <div>
            <form onSubmit={(e) => { submitHandler(e) }}>
                <div className="container pt-5 d-flex justify-content-center" >
                    <div className="col-md-6 shadow p-4">
                        <h3 className="text-center">Add Subject</h3>
                        <hr />
                        <label for=""><b>Subject Name</b></label>
                        <input id="sname" type="text" placeholder="Enter your subject name" onChange={(e) => setSName(e.target.value)} />
                        <label for=""><b>Subject Code</b></label>
                        <input id="subject_code" type="text" placeholder="Enter your subject code" onChange={(e) => setsubjectcode(e.target.value)} />

                        <button id="button" class="registerbtn" >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
