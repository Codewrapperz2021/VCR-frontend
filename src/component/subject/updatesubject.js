import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import subjectservices from '../../services/subjectservices';
import '../../form.css'

export default function Updatesubject() {
  const [sName, setsName] = useState('');
  const [subjectCode, setsubjectCode] = useState('');
  

  function handlesubmit() {
    let id = Number(window.location.pathname.substring(15, 25));
    const data = { sname: sName, subject_code: subjectCode}
    subjectservices.updatesubject(id, data)
  }
  useEffect(() => {
    const id = window.location.pathname.substring(15,25)
    subjectservices.subjectById(id)
      .then(res => {
        const persons = res.data;
        setsName(persons.sname);
        setsubjectCode(persons.subject_code)
      })
     
  },[])

  return (<div>
    
    <form>
        <div className="container pt-5 d-flex justify-content-center" >
          <div className="col-md-6 shadow p-4">
            <h3 className="text-center">Update Subject</h3>
            <hr />
            <label for=""><b>Subject Name</b></label>
            <input type="text" name='sname' defaultValue={sName} onChange={(e) => setsName(e.target.value)} />
             <label for=""><b>Subject Code</b></label>
             <input type="text" name='subject_code' value={subjectCode} onChange={(e) => setsubjectCode(e.target.value)} />
            
            <button class="registerbtn" type="button" onClick={handlesubmit}>Update</button>
          </div>
        </div>
    </form>
  </div>)
}
