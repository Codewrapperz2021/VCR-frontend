import React, { useState, useEffect } from 'react'
import Deletelecture from './deletelecture';
import lectureservices from '../../services/lectureservices';
import Navbar from '../masterdas/navbar';
import Adminsidebar from '../masterdas/adminsidebar';
import Footer from '../masterdas/footer';
import { Link } from 'react-router-dom';

export default function Viewlecture() {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    lectureservices.viewlecture()
      .then(res => {
        const lecture = res.data;
        setLectures(lecture);
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
          <h2 class="text-center " > Lecture list</h2>
            <table class="table table-bordered  ">
              <thead>
                <tr class="table-info">
                  <th scope="col-2">S.no.</th>
                  <th scope="col-2">Lecture Name</th>
                  <th scope="col-2">Lecture Time</th>
                  <th scope="col-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {lectures.map(lecture => <tr>
                  <td>{lecture.id}</td>
                  <td>{lecture.lect_name}</td>
                  <td>{lecture.lect_time}</td>
                  <td><Deletelecture id={lecture.id} /> &nbsp;
                    <Link to={"/updatelecture/" + lecture.id}>
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



