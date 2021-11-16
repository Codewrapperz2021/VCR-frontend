import { render } from '@testing-library/react';
import axios from 'axios';
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
            //  this.fnamehandler=this.fnamehandler.bind(this);
            //  this.lHandler=this.lHandler.bind(this);
            //  this.dobHandler=this.dobHandler.bind(this);
            //  this.phoneHandler=this.phoneHandler.bind(this);
            //  this.emailHandler=this.emailHandler.bind(this);
            //  this.formHandler = this.formHandler.bind(this);

  }


// submithandler(event)
// {this.setState({})}
// componentDidMount(){
//   axios.get("http://localhost:8000/api/faculty").then((res)=>{
//     const addfaculty = res.data;
//     this.setState({ addfaculty });
//   })
// }



// fnamehandler(event)
// {
// this.setState({first_name:event.target.value})

// }

// lHandler(event)
// {
// this.setState({last_name:event.target.value})

// }
// dobHandler(event)
// {
// this.setState({dob:event.target.value})
// }
// emailHandler(event)
// {
// this.setState({email:event.target.value})
// }
// phoneHandler(event)
// {
// this.setState({phone:event.target.value})
// }


// formHandler(event)
// {event.preventDefault();
// const data= {first_name:this.state.first_name,last_name:this.state.last_name,email:this.state.email,dob:this.state.dob,phone:this.state.phone}
//     axios.post("http://localhost:8000/api/faculty",data)
// }


render()
{
  return(
<html>
    <body>
    <form method="post" onSubmit={(event)=>{ event.preventDefault();
    const data={first_name:this.state.first_name,last_name:this.state.last_name,dob:this.state.dob,phone:this.state.phone,email:this.state.email}
    axios.post("http://localhost:8000/api/faculty",data)
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