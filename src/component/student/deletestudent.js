import React,{ useState} from 'react';
import studentservices from '../../services/studentservices';


export default function Deletestudent(props)  {
  const [id] = useState('');


 const handleDelete =() => {
      var id=props.id
      studentservices.deletestudent(id)
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

