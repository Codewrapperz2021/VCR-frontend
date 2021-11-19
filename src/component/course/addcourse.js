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
            <input id="cname" type="text"  placeholder="Enter your first name"   onChange={(event)=>{this.setState({cname:event.target.value})}}/>
            
            <input id="button"type="submit" value="button"></input>
        </form>
    </body>
</html> 
)
}
}