import { React, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import swal from 'sweetalert';
import studentassessmentservices from '../../../services/studentassessment'; 
import '../../../form.css';
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};
export default function Feedback() {
  const data = useSelector(state => state.UserData)
  const [currentValue, setCurrentValue] = useState(0);
  const [textarea, setTextarea] = useState('');
  const stars = Array(5).fill(0)
  const nam= data.data.user.name;
  const navigate = useNavigate();
  
  const handleClick = value => {
    setCurrentValue(value)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {Name:nam,comment:textarea,star:currentValue}
    studentassessmentservices.addfeedback(data);
    navigate('/studentdashboard')
        swal("submitted", "thank you for the feedback","success", {
            buttons: false,
            timer: 2000,
        });
    }
  return (
             <div className='container justify-content-center d-flex contain'>
                     <i className="fas fa-envelope-open-text fa-9x mb-4"></i>
                    <h1>Thank you,</h1>
                    <h2>Your result has been received</h2>
                    <h3 className='mt-4'>How was your experiance?</h3>
      <div className="stars">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={44}
              onClick={() => handleClick(index + 1)}
              color={currentValue > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <textarea onChange={(e) => setTextarea(e.target.value)} placeholder="What's your experience?" className="feedtextarea"/>
      <button onClick={submitHandler} className="btn feedbtn">Submit</button>
        </div>
  );
};
 
