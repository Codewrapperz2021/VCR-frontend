import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import courseservices from '../../services/courseservices';
import '../../form.css'

export default function Updatecourse() {
  const [sname, setcName] = useState('');
 
  

  function handlesubmit() {
    let id = Number(window.location.pathname.substring(14, 25));
    const data = { cname:sname}
    courseservices.updatecourse(id, data)
  }
  useEffect(() => {
    const id = window.location.pathname.substring(14,25)
    courseservices.courseById(id)
      .then(res => {
        const persons = res.data;
        setcName(persons.cname);
      })
     
  },[])

  return (<div>
    
    <form>
        <div className="container pt-5 d-flex justify-content-center" >
          <div className="col-md-6 shadow p-4">
            <h3 className="text-center">Update Cource</h3>
            <hr />
            <label for=""><b>Course Name</b></label>
            <input type="text" name='sname' defaultValue={sname} onChange={(e) => setcName(e.target.value)} />
            
            <button class="registerbtn" type="button" onClick={handlesubmit}>Update</button>
          </div>
        </div>
    </form>
  </div>)
}
