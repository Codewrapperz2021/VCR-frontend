import { render } from '@testing-library/react';

import facultyservices from '../../services/facultyservices';
import React from 'react';
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
            <input id="fname" type="text"  placeholder="Enter your first name"   onChange={(event)=>{this.setState({first_name:event.target.value})}}/>
            <input id="lname" type="text"  placeholder="Enter your last name"    onChange={(event)=>{this.setState({last_name:event.target.value})}}/>
            <input id="dob"   type="date"  placeholder="enter dob"               onChange={(event)=>{this.setState({dob:event.target.value})}}/>
            <input id="email" type="email" placeholder="name@example.com"        onChange={(event)=>{this.setState({email:event.target.value})}}/>
            <input id="phone" type="text"  placeholder="Enter your phone number" onChange={(event)=>{this.setState({phone:event.target.value})}}/>
            <input id="button"type="submit" value="button"></input>
        </form>
    </body>
</html> 
)
}
}