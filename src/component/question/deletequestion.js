import React,{ useState} from 'react';
import questionservices from '../../services/questionservices';


export default function Deletequestion(props)  {
  const [id] = useState('');


 const handleDelete =() => {
      var id=props.id
      questionservices.deletequestion(id)
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

