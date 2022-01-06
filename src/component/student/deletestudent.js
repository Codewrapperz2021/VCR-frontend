import React,{ useState} from 'react';
import studentservices from '../../services/studentservices';
import { useNavigate } from 'react-router';
import swal from 'sweetalert';

export default function Deletestudent(props)  {
  const navigate = useNavigate();
  const [id] = useState('');


 const handleDelete =() => {
      var id=props.id
      studentservices.deletestudent(id)
        .then(res => {
          navigate("/admindashboard")
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

