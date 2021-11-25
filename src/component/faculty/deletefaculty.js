import React,{ useState} from 'react';
import facultyservices from '../../services/facultyservices';


export default function Deletefaculty(props)  {
  const [id] = useState('');


 const handleDelete =() => {
      var id=props.id
        facultyservices.deletefaculty(id)
        .then(res => {
      })
      console.log(props.id)
  }  
    return (
    <>
          <button className="btn btn-danger" onClick={()=>handleDelete()}>Delete</button>
    </>
    );
  }

