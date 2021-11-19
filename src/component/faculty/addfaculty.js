import { render } from '@testing-library/react';

import facultyservices from '../../services/facultyservices';
import React from 'react';
import '../../form.css'
export default class Addfaculty extends React.Component
{
constructor()
{
    super();
  this.state = {
                first_name:'',
                last_name:'',
                dob:'',
                phone:'',
                email:'',
             }
            }


render()
{
  return(
<html>
    <body>
      
    <form method="post" onSubmit={(event)=>{ event.preventDefault();
    const data={first_name:this.state.first_name,last_name:this.state.last_name,dob:this.state.dob,phone:this.state.phone,email:this.state.email}
    facultyservices.addfaculty(data)
}}>              
            <div className="container pt-5 d-flex justify-content-center" >
             <div className="col-md-6 shadow p-4">
             <h3 className="text-center">Add Faculty</h3>
              
              <hr/>
              <label for=""><b>First Name</b></label>
              <input id="fname" type="text"  placeholder="Enter your first name"   onChange={(event)=>{this.setState({first_name:event.target.value})}}/>
              <label for=""><b>Last Name</b></label>
              <input id="lname" type="text"  placeholder="Enter your last name"    onChange={(event)=>{this.setState({last_name:event.target.value})}}/>
              <label for=""><b>Date Of Birth</b></label>
              <input id="dob"   type="date"  placeholder="enter dob"               onChange={(event)=>{this.setState({dob:event.target.value})}}/>
              <label for=""><b>Email</b></label>
              <input id="email" type="email" placeholder="name@example.com"        onChange={(event)=>{this.setState({email:event.target.value})}}/>
              <label for=""><b>Phone</b></label>
              <input id="phone" type="text"  placeholder="Enter your phone number" onChange={(event)=>{this.setState({phone:event.target.value})}}/>
              <input id="button"type="submit" class="registerbtn" value="Submit"></input>
             </div>
            </div>
        </form>
        
    </body>
</html> 
)
}
}