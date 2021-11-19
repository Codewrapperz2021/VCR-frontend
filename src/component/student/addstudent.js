import { render } from '@testing-library/react';

import studentservices from '../../services/studentservices';
import React from 'react';
export default class Addstudent extends React.Component
{
constructor()
{
    super();
  this.state = {
                first_name:'',
                last_name:'',
                address:'',
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
    const data={first_name:this.state.first_name,last_name:this.state.last_name,address:this.state.address,phone:this.state.phone,email:this.state.email}
    studentservices.addstudent(data)
}}>              
            <input id="fname" type="text"  placeholder="Enter your first name"   onChange={(event)=>{this.setState({first_name:event.target.value})}}/>
            <input id="lname" type="text"  placeholder="Enter your last name"    onChange={(event)=>{this.setState({last_name:event.target.value})}}/>
            <input id="address"   type="text"  placeholder="enter address"       onChange={(event)=>{this.setState({address:event.target.value})}}/>
            <input id="email" type="email" placeholder="name@example.com"        onChange={(event)=>{this.setState({email:event.target.value})}}/>
            <input id="phone" type="text"  placeholder="Enter your phone number" onChange={(event)=>{this.setState({phone:event.target.value})}}/>
            <input id="button"type="submit" value="button"></input>
        </form>
    </body>
</html> 
)
}
}