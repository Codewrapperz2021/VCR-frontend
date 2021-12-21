import React, { useState, useEffect } from 'react'
import Deletestudent from './deletestudent';
import studentservices from '../../services/studentservices';
import { Link } from 'react-router-dom';

export default function Viewstudent() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    studentservices.viewstudent()
      .then(res => {
        const persons = res.data;
        setPersons(persons);
      })
  },[])


  return (


    <table class="table table-bordered">
      <thead>
        <a href="http://127.0.0.1:8000/api/student-export-excel" class="btn btn-primary">Excel</a>
        <a href="http://127.0.0.1:8000/api/student-export-csv" class="btn btn-primary">CSV</a>

        <tr class="table-info">
          <th scope="col-2">S.no.</th>

          <th scope="col-2">First Name</th>
          <th scope="col-2">Last Name</th>
          <th scope="col-3">Email</th>
          <th scope="col-3">Contact</th>
          <th scope="col-3">Address</th>
          <th scope="col-2">Action</th>

        </tr>
      </thead>
      <tbody>
        {persons.map(person => <tr>
          <td>{person.id}</td>

          <td>{person.first_name}</td>
          <td>{person.last_name}</td>
          <td> {person.email}</td>
          <td>{person.phone}</td>
          <td>{person.address}</td>
          <td><Deletestudent id={person.id} /> &nbsp;
          <Link to= {"/updatestudent/"+person.id}>
              <button class="btn btn-primary">Edit</button>      
          </Link></td>
        </tr>)
        }
      </tbody>
    </table>
  )
}

