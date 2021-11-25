import { render } from '@testing-library/react';
import facultyservices from '../../services/facultyservices';
import React, { useState } from 'react';
import '../../form.css'
export default function Addfaculty() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const data = { first_name: firstName, last_name: lastName, email: email, phone: phone, dob: dob }
    facultyservices.addfaculty(data)
  }
  return (
    <div>
      <form onSubmit={(e) => { submitHandler(e) }}>
        <div className="container pt-5 d-flex justify-content-center" >
          <div className="col-md-6 shadow p-4">
            <h3 className="text-center">Add Faculty</h3>
            <hr />
            
              <label for=""><b>First Name</b></label>
              <input id="fname" name="fname" type="text" placeholder="Enter your first name" onChange={(e) => setFirstName(e.target.value)} />
              
            <label for=""><b>Last Name</b></label>
            <input id="lname" type="text" placeholder="Enter your last name" onChange={(e) => setLastName(e.target.value)} />
            <label for=""><b>Date Of Birth</b></label>
            <input id="dob" type="date" placeholder="enter dob" onChange={(e) => setDob(e.target.value)} />
            <label for=""><b>Email</b></label>
            <input id="email" type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
            <label for=""><b>Phone</b></label>
            <input id="phone" type="text" placeholder="Enter your phone number" onChange={(e) => setPhone(e.target.value)} />
            <button id="button" class="registerbtn" >Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}
