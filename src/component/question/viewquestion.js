import React, { useState, useEffect } from 'react'
import Deletequestion from './deletequestion';
import questionservices from '../../services/questionservices';
import { Link } from 'react-router-dom';

export default function Viewquestion() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    questionservices.viewquestion()
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

          <th scope="col-2">Question</th>
          <th scope="col-2">Ans1</th>
          <th scope="col-3">Ans2</th>
          <th scope="col-3">Ans3</th>
          <th scope="col-3">Ans4</th>
          <th scope="col-2">Correct Answer</th>
          <th scope="col-2">Action</th>

        </tr>
      </thead>
      <tbody>
        {persons.map(person => <tr>
          <td>{person.id}</td>

          <td>{person.question}</td>
          <td>{person.ans1}</td>
          <td>{person.ans2}</td>
          <td>{person.ans3}</td>
          <td>{person.ans4}</td>
          <td>{person.correctanswer}</td>
          <div><td><Deletequestion id={person.id} /> &nbsp;
          <Link to= {"/updatequestion/"+person.id}>
              <button class="btn btn-primary">Edit</button>      
          </Link></td></div>
        </tr>)
        }
      </tbody>
    </table>
  )
}

