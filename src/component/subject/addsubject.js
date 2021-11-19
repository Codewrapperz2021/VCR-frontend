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
            <input id="sname" type="text"  placeholder="Enter your first name"   onChange={(event)=>{this.setState({sname:event.target.value})}}/>
            <input id="subject_code" type="text"  placeholder="Enter your last name"    onChange={(event)=>{this.setState({subject_code:event.target.value})}}/>
            <input id="button"type="submit" value="button"></input>
        </form>
    </body>
</html> 
)
}
}