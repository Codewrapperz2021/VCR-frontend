import { render } from '@testing-library/react';
import studentservices from '../../services/studentservices';
import React, { useState } from 'react';
import '../../form.css'
export default function Addstudent() {
  const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

const submitHandler = (e) =>{
e.preventDefault();
const data ={first_name:firstName, last_name:lastName, email:email, phone:phone,address:address}
studentservices.addstudent(data)
}
    return (
      <div>
            <form  onSubmit={(e)=>{submitHandler(e)}}>
              <div className="container pt-5 d-flex justify-content-center" >
                <div className="col-md-6 shadow p-4">
                  <h3 className="text-center">Add Student</h3>
                  <hr />
                  <label for=""><b>First Name</b></label>
                  <input id="fname" type="text" placeholder="Enter your first name" onChange={(e) => setFirstName(e.target.value)} />
                  <label for=""><b>Last Name</b></label>
                  <input id="lname" type="text" placeholder="Enter your last name" onChange={(e) => setLastName(e.target.value)} />
                  <label for=""><b>Address</b></label>
                  <input id="address" type="text" placeholder="enter address" onChange={(e) => setAddress(e.target.value)} />
                  <label for=""><b>Email</b></label>
                  <input id="email" type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
                  <label for=""><b>Phone</b></label>
                  <input id="phone" type="text" placeholder="Enter your phone number" onChange={(e) => setPhone(e.target.value)} />
                  <button id="button" class="registerbtn" >Submit</button>
                </div>
              </div>
           </form>
      </div>
    )
  }
