import React, { useState, useEffect } from 'react'
import Deletesubject from './deletesubject';
import subjectservices from '../../services/subjectservices';
import { Link } from 'react-router-dom';

export default function Viewsubject() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    subjectservices.viewsubject()
      .then(res => {
        const subject = res.data;
        setSubjects(subject);
      })
  },[])
  return (
    <table class="table table-bordered">
      <thead>
        <tr class="table-info">
          <th scope="col-2">S.no.</th>

          <th scope="col-2">Subject Name</th>
          <th scope="col-2">Subject Code</th>
          <th scope="col-2">Action</th>

        </tr>
      </thead>
      <tbody>
        {subjects.map(subject => <tr>
          <td>{subject.id}</td>

          <td>{subject.sname}</td>
          <td>{subject.subject_code}</td>
          <div><td><Deletesubject id={subject.id} /> &nbsp;
          <Link to= {"/updatesubject/"+subject.id}>
              <button class="btn btn-primary">Edit</button>      
          </Link></td></div>
        </tr>)
        }
      </tbody>
    </table>
  )
}

