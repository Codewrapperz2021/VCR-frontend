import React, { useState, useEffect } from 'react'
import Deletecourse from './deletecourse';
import courseservices from '../../services/courseservices';
import Navbar from '../masterdas/navbar';
import Adminsidebar from '../masterdas/adminsidebar';
import Footer from '../masterdas/footer';
import { Link } from 'react-router-dom';

export default function Viewcourse() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    courseservices.viewcourse()
      .then(res => {
        const course = res.data;
        setCourses(course);
      })
  }, [])

  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Adminsidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="table-responsive mx-2 my-2">
              <h2 class="text-center " > Course list</h2>
              <table class="table table-bordered ">
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
                    <td><Deletecourse id={course.id} /> &nbsp;
                      <Link to={"/updatecourse/" + course.id}>
                        <button class="btn btn-primary">Edit</button>
                      </Link></td>
                  </tr>)
                  }
                </tbody>
              </table>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
