import React, { useState, useEffect } from 'react'
import Deletefaculty from './deletefaculty';
import facultyservices from '../../services/facultyservices';
import { Link } from 'react-router-dom';

export default function Viewfaculty() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    facultyservices.viewfaculty()
      .then(res => {
        const persons = res.data;
        setPersons(persons);
      })
  },[])


  return (


    <table class="table table-bordered">
      <thead>
        <tr class="table-info">
          <th scope="col-2">S.no.</th>

          <th scope="col-2">First Name</th>
          <th scope="col-2">Last Name</th>
          <th scope="col-3">Email</th>
          <th scope="col-3">Contact</th>
          <th scope="col-3">dob</th>
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
          <td>{person.dob}</td>
          <td><Deletefaculty id={person.id} /> &nbsp;
          <Link to= {"/updatefaculty/"+person.id}>
              <button class="btn btn-primary">Edit</button>      
          </Link></td>
        </tr>)
        }
      </tbody>
    </table>
  )
}

