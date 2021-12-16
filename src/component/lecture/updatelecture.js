import React, { useState, useEffect } from 'react';
import lectureservices from '../../services/lectureservices';
import '../../form.css';
import { useParams } from 'react-router';


export default function Updatelecture() {
  const {id} = useParams();
  const [lect_name, setLect_name] = useState('');
  const [lect_time, setLect_time] = useState('');
  
  function handlesubmit() {
    const data = { lect_name:lect_name,lect_time:lect_time}
    lectureservices.updatelecture(id, data)
    
  }
  useEffect(() => {
    lectureservices.lectureById(id)
      .then(res => {
        const lecture = res.data;
        setLect_name(lecture.lect_name);
        setLect_time(lecture.lect_time);
       
      })
     
  },[])

  return (<div>
    
    <form>
        <div className="container pt-5 d-flex justify-content-center" >
          <div className="col-md-6 shadow p-4">
            <h3 className="text-center">Update Lecture</h3>
            <hr />
            <label for=""><b>Lecture Name</b></label>
            <input type="text" name='lect_name' defaultValue={lect_name} onChange={(e) => setLect_name(e.target.value)} />
            <label for=""><b>Lecture Time</b></label><br></br>
            <input type="time" name='lect_time' defaultValue={lect_time} onChange={(e) => setLect_time(e.target.value)} />            
            <button class="updatebtn" type="button" onClick={handlesubmit}>Update</button>
          </div>
        </div>
    </form>
  </div>)
}