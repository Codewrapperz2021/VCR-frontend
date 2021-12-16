import React, { useState, useEffect } from 'react';
import studentservices from '../../services/studentservices';
import '../../form.css'
import { useParams } from 'react-router';

export default function Updatestudent() {
  const {id} = useParams();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  function handlesubmit() {
    const data = { first_name: firstName, last_name: lastName, email: email, phone: phone, address: address }
    studentservices.updatestudent(id, data)
  }
  useEffect(() => {
    studentservices.studentById(id)
      .then(res => {
        const persons = res.data;
        setFirstName(persons.first_name);
        setLastName(persons.last_name)
        setAddress(persons.address)
        setEmail(persons.email)
        setPhone(persons.phone)
      })
     
  },[])

  return (<div>
    
    <form>
        <div className="container pt-5 d-flex justify-content-center" >
          <div className="col-md-6 shadow p-4">
            <h3 className="text-center">Update Student</h3>
            <hr />
            <label for=""><b>First Name</b></label>
            <input id="fname" type="text" placeholder="Enter your first name" defaultValue={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <label for=""><b>Last Name</b></label>
            <input id="lname" type="text" placeholder="Enter your last name" defaultValue={lastName} onChange={(e) => setLastName(e.target.value)} />
            <label for=""><b>Date Of Birth</b></label>
            <input id="address" type="text" placeholder="enter address" defaultValue={address} onChange={(e) => setAddress(e.target.value)} />
            <label for=""><b>Email</b></label>
            <input id="email" type="email" placeholder="name@example.com" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
            <label for=""><b>Phone</b></label>
            <input id="phone" type="text" placeholder="Enter your phone number" defaultValue={phone} onChange={(e) => setPhone(e.target.value)} />
            <button class="updatebtn" type="button" onClick={handlesubmit}>Update</button>
          </div>
        </div>
    </form>
  </div>)
}
