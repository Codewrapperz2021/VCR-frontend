import React,{ useState} from 'react';
import courseservices from '../../services/courseservices';
import swal from 'sweetalert';

export default function Deletecource(props)  {
  const [id] = useState('');


 const handleDelete =() => {
      var id=props.id
      courseservices.deletecourse(id)
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


