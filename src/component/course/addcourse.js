import { render } from '@testing-library/react';
import courseservices from '../../services/courseservices';
import React, { useState } from 'react';
import '../../form.css'
export default function Addcourse() {
    const [cname, setCName] = useState('');
   

    const submitHandler = (e) => {
        e.preventDefault();
        const data = { cname: cname}
        courseservices.addcourse(data)
    }
    return (
        <div>
            <form onSubmit={(e) => { submitHandler(e) }}>
                <div className="container pt-5 d-flex justify-content-center" >
                    <div className="col-md-6 shadow p-4">
                        <h3 className="text-center">Add Cource</h3>
                        <hr />
                        <label for=""><b>Cource Name</b></label>
                        <input id="cname" type="text" placeholder="Enter the cource name" onChange={(e) => setCName(e.target.value)} />

                        <button id="button" class="registerbtn" >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
