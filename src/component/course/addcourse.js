import { render } from '@testing-library/react';

import courseservices from '../../services/courseservices';
import React from 'react';
export default class AddCourse extends React.Component
{
constructor()
{
    super();
  this.state = {
                cname:'',
                
             }
            }


render()
{
  return(
<html>
    <body>
    <form method="post" onSubmit={(event)=>{ event.preventDefault();
    const data={cname:this.state.cname}
    courseservices.addcourse(data)
}}>              
            <div className="container pt-5 d-flex justify-content-center" >
             <div className="col-md-6 shadow p-4">
             <h3 className="text-center">Add Course</h3>
              
              <hr/>
              <label for=""><b>Course Name</b></label>
              <input id="cname" type="text"  placeholder="Enter your course name"   onChange={(event)=>{this.setState({cname:event.target.value})}}/>
              
              <input id="button"type="submit" class="registerbtn" value="Submit"></input>
             </div>
            </div>
            {/* <input id="cname" type="text"  placeholder="Enter your first name"   onChange={(event)=>{this.setState({cname:event.target.value})}}/>
            
            <input id="button"type="submit" value="button"></input> */}
        </form>
    </body>
</html> 
)
}
}