import React, { useState, useEffect } from 'react'
import Deletestudent from './deletestudent';
import studentservices from '../../services/studentservices';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf'

export default function Viewstudent() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    studentservices.viewstudent()
      .then(res => {
        const persons = res.data;
        setPersons(persons);
      })
  }, [])

  const PdfGenerate = () => {
    
    var doc = new jsPDF('p', 'pt',[1000, 1000],true);
    doc.html(document.getElementById('content'), {
      callback: function (pdf) {
        pdf.save('b.pdf')
      }
    })

  }


  return (

    <div>
      <div className=''>
        <button className='btn btn-dark float-end ' onClick={PdfGenerate}> download PDF</button>

      </div>

      <table id='content' className="table table-bordered">
        <thead>
          <tr className="table-info ">
            <th scope="col-2">S.no.</th>

            <th scope="col-2">First Name</th>
            <th scope="col-2">Last Name</th>
            <th scope="col-3">Email</th>
            <th scope="col-3">Course</th>
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
            <td> {person.cname}</td>
            <td>{person.phone}</td>
            <td>{person.address}</td>
            <td><Deletestudent id={person.id} /> &nbsp;
              <Link to={"/updatestudent/" + person.id}>
                <button class="btn btn-primary">Edit</button>
              </Link></td>
          </tr>)
          }

        </tbody>

      </table>
    </div>



  )
}


