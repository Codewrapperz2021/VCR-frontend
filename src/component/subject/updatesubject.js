import React, { useState, useEffect } from 'react';
import subjectservices from '../../services/subjectservices';
import '../../form.css';
import { useNavigate } from 'react-router';
import swal from 'sweetalert';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function Updatesubject() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [sName, setsName] = useState('');
  const [subjectCode, setsubjectCode] = useState('');
  

  function handlesubmit() {
    const data = { sname: sName, subject_code: subjectCode}
    subjectservices.updatesubject(id, data).then(res => {
      navigate("/viewsubject")
      swal("Edited", "details edited successfully", "success", {
        buttons: false,
        timer: 2000,
      });
    })
  }
  useEffect(() => {
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
            
            <button class="updatebtn" type="button" onClick={handlesubmit}>Update</button>
            <center><Link  to="/viewsubject">Click to go back</Link></center>
          </div>
        </div>
    </form>
  </div>)
}
