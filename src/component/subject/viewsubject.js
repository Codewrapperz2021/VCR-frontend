import React, { useState, useEffect } from 'react'
import Deletesubject from './deletesubject';
import subjectservices from '../../services/subjectservices';
import Navbar from '../masterdas/navbar';
import Adminsidebar from '../masterdas/adminsidebar';
import Footer from '../masterdas/footer';
import { Link } from 'react-router-dom';

export default function Viewsubject() {
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    subjectservices.viewsubject()
      .then(res => {
        const subject = res.data;
        setSubjects(subject);
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
          <h2 class="text-center " > Subject list</h2>
            <table class="table table-bordered ">
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
                  <td><Deletesubject id={subject.id} /> &nbsp;
                    <Link to={"/updatesubject/" + subject.id}>
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

