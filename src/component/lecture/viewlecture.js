import React, { useState, useEffect } from 'react'
import Deletelecture from './deletelecture';
import lectureservices from '../../services/lectureservices';
import { Link } from 'react-router-dom';

export default function Viewlecture() {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    lectureservices.viewlecture()
      .then(res => {
        const lecture = res.data;
        setLectures(lecture);
      })
  },[])


  return (


    <table class="table table-bordered">
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
          <Link to= {"/updatelecture/"+lecture.id}>
              <button class="btn btn-primary">Edit</button>      
          </Link></td>
        </tr>)
        }
      </tbody>
    </table>
  )
}

