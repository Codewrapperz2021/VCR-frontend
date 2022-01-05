import React,{ useState} from 'react';
import materialservices from '../../services/materialservices';
import swal from 'sweetalert';

export default function Deletematerial(props)  {
  const [id] = useState('');


 const handleDelete =() => {
      var id=props.id
      materialservices.deletematerial(id)
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


