import React, { useState, useEffect } from 'react';
import facultyservices from '../../services/facultyservices';
import '../../form.css'
import { useNavigate } from 'react-router';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

export default function Updatefaculty() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  function handlesubmit() {
    const data = { first_name: firstName, last_name: lastName, email: email, phone: phone, dob: dob }
    facultyservices.updatefaculty(id, data).then(res => {
      navigate("/viewfaculty")
      swal("Edited", "details edited successfully", "success", {
        buttons: false,
        timer: 2000,
      });
    })
  }
  useEffect(() => {
    facultyservices.facultyById(id)
      .then(res => {
        const persons = res.data;
        setFirstName(persons.first_name);
        setLastName(persons.last_name);
        setDob(persons.dob);
        setEmail(persons.email);
        setPhone(persons.phone);
      })
  },[])

  return (<div>
    
    <form>
        <div className="container pt-5 d-flex justify-content-center" >
          <div className="col-md-6 shadow p-4">
            <h3 className="text-center">Update Faculty</h3>
            <hr />
            <label for=""><b>First Name</b></label>
            <input id="fname" type="text" placeholder="Enter your first name" defaultValue={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <label for=""><b>Last Name</b></label>
            <input id="lname" type="text" placeholder="Enter your last name" defaultValue={lastName} onChange={(e) => setLastName(e.target.value)} />
            <label for=""><b>Date Of Birth</b></label>
            <input id="dob" type="date" placeholder="enter dob" defaultValue={dob} onChange={(e) => setDob(e.target.value)} />
            <label for=""><b>Email</b></label>
            <input id="email" type="email" placeholder="name@example.com" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
            <label for=""><b>Phone</b></label>
            <input id="phone" type="text" placeholder="Enter your phone number" defaultValue={phone} onChange={(e) => setPhone(e.target.value)} />
            <button class="updatebtn" type="button" onClick={handlesubmit}>Update</button>
            <center><Link  to="/viewfaculty">Click to go back</Link></center>
          </div>
        </div>
    </form>
  </div>)
}
