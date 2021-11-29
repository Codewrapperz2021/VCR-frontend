import React,{ useState} from 'react';
import facultyservices from '../../services/facultyservices';
import swal from 'sweetalert';

export default function Deletefaculty(props)  {
  const [id] = useState('');


 const handleDelete =() => {
      var id=props.id
        facultyservices.deletefaculty(id)
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

