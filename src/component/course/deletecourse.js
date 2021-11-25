import React,{ useState} from 'react';
import courseservices from '../../services/courseservices';

export default function Deletecource(props)  {
  const [id] = useState('');


 const handleDelete =() => {
      var id=props.id
      courseservices.deletecourse(id)
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


