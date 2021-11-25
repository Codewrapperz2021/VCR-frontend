import React,{ useState} from 'react';
import subjectservices from '../../services/subjectservices';

export default function Deletesubject(props)  {
  const [id] = useState('');


 const handleDelete =() => {
      var id=props.id
      subjectservices.deletesubject(id)
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

