import React, { useState, useEffect } from 'react';
import courseservices from '../../services/courseservices';
import '../../form.css';
import { useParams } from 'react-router';


export default function Updatecourse() {
  const {id} = useParams();
  const [cname, setcName] = useState('');
  

  function handlesubmit() {
    const data = { cname:cname}
    courseservices.updatecourse(id, data)
    
  }
  useEffect(() => {
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
            <input type="text" name='sname' defaultValue={cname} onChange={(e) => setcName(e.target.value)} />
            
            <button class="registerbtn" type="button" onClick={handlesubmit}>Update</button>
          </div>
        </div>
    </form>
  </div>)
}
