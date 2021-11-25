import React, { useState, useEffect } from 'react'
import Deletecourse from './deletecourse';
import Updatecourse from './updatecourse';
import courseservices from '../../services/courseservices';
import { Link } from 'react-router-dom';

export default function Viewcourse() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    courseservices.viewcourse()
      .then(res => {
        const course = res.data;
        setCourses(course);
      })
  },[])


  return (


    <table class="table table-bordered">
      <thead>
        <tr class="table-info">
          <th scope="col-2">S.no.</th>

          <th scope="col-2">Course Name</th>
          <th scope="col-2">Action</th>

        </tr>
      </thead>
      <tbody>
        {courses.map(course => <tr>
          <td>{course.id}</td>

          <td>{course.cname}</td>
          <div><td><Deletecourse id={course.id} /> &nbsp;
          <Link to= {"/updatecourse/"+course.id}>
              <button class="btn btn-primary">Edit</button>      
          </Link></td></div>
        </tr>)
        }
      </tbody>
    </table>
  )
}

