import { render } from '@testing-library/react';

import React from 'react';
import subjectservices from '../../services/subjectservices';
export default class Addsubject extends React.Component
{
constructor()
{
    super();
  this.state = {
                sname:'',
                subject_code:'',
                
            }
        }
            


render()
{
  return(
<html>
    <body>
    <form method="post" onSubmit={(event)=>{ event.preventDefault();
    const data={sname:this.state.sname,subject_code:this.state.subject_code}
    subjectservices.addsubject(data)
}}>             
            <div className="container pt-5 d-flex justify-content-center" >
             <div className="col-md-6 shadow p-4">
             <h3 className="text-center">Add Subject</h3>
              
              <hr/>
              <label for=""><b>Subject Name</b></label>
              <input id="sname" type="text"  placeholder="Enter your subject name"   onChange={(event)=>{this.setState({sname:event.target.value})}}/>
              <label for=""><b>Subject Code</b></label>
              <input id="subject_code" type="text"  placeholder="Enter your subject code"    onChange={(event)=>{this.setState({subject_code:event.target.value})}}/>
              <input id="button"type="submit" class="registerbtn" value="submit"></input>
             </div>
            </div>
            {/* <input id="sname" type="text"  placeholder="Enter your first name"   onChange={(event)=>{this.setState({sname:event.target.value})}}/>
            <input id="subject_code" type="text"  placeholder="Enter your last name"    onChange={(event)=>{this.setState({subject_code:event.target.value})}}/>
            <input id="button"type="submit" value="button"></input> */}
        </form>
    </body>
</html> 
)
}
}