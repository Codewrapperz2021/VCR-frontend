import React,{ useState} from 'react';
import lectureservices from '../../services/lectureservices';
import swal from 'sweetalert';

export default function Deletelecture(props)  {
  const [id] = useState('');


 const handleDelete =() => {
      var id=props.id
      lectureservices.deletelecture(id)
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


