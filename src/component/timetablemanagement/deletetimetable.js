import React, { useState, useEffect } from 'react'
import timetableservices from '../../services/timetableservices';
import swal from 'sweetalert';

export default function Deletetimetable(props){
    const [id] = useState('');
    const handleDelete =() => {
        var id=props.id
        timetableservices.deletetimetable(id)
          .then(res => {
            swal("deleted","data deleted successfully","success" ,{
              buttons: false,
              timer: 2000,
            });
        })
        console.log(props.id)
    }  
      return (
      <>
            <button className="btn btn-danger" onClick={()=>handleDelete()}>Delete</button>
      </>
      );
    }