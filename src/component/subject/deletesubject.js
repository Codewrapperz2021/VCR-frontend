import React,{ useState} from 'react';
import subjectservices from '../../services/subjectservices';
import swal from 'sweetalert';

export default function Deletesubject(props)  {
  const [id] = useState('');


 const handleDelete =() => {
      var id=props.id
      subjectservices.deletesubject(id)
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

