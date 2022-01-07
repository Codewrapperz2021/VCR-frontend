import React, { useState, useEffect } from 'react';
import courseservices from '../../services/courseservices';
import '../../form.css';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';


export default function Updatecourse() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [cname, setcName] = useState('');
  
  function handlesubmit() {
    const data = { cname:cname}
    courseservices.updatecourse(id, data).then(res => {
      navigate("/viewcourse")
      swal("Edited", "details edited successfully", "success", {
        buttons: false,
        timer: 2000,
      });
    })
    
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
            <button class="updatebtn" type="button" onClick={handlesubmit}>Update</button>
            <center><Link  to="/viewcourse">Click to go back</Link></center>
          </div>
        </div>
    </form>
  </div>)
}