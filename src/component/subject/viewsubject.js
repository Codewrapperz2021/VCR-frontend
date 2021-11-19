import React from 'react'
import axios from 'axios';
import Deletesubject from './deletesubject';
import Updatesubject from './updatesubject';
import {withRouter} from 'react-router'
import subjectservices from '../../services/subjectservices';
export default class Viewsubject extends React.Component
{
    state = {
        persons: [],
        person:"",

      }
    constructor(){
        
        super();
       
        }
  

    componentDidMount() {
        subjectservices.viewsubject()
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
     
   
    render()
    {
      
        return(
        
           
             <table class="table table-bordered">
             <thead>
               <tr class="table-info">
               <th scope="col-2">S.no.</th>

               <th scope="col-2">Student Name</th>
               <th scope="col-2">Subject Code</th>
               <th scope="col-2">Action</th>

               
               </tr>
             </thead>
             <tbody>
               {this.state.persons.map(person=> <tr>
                <td>{person.id}</td>

                <td>{person.sname}</td>
                <td>{person.subject_code}</td>
                
                <div><td><Deletesubject id={person.id}/> &nbsp;
                <input className="btn btn-primary"type="button" id={person} value="Edit"onClick={(e)=>window.location.replace('/updatesubject/'+person.id)} /></td></div>
              </tr>)
               }
             </tbody>
        </table>
        
     
            
        
        
        

        )
    }
    
}
//export default withRouter(Viewfaculty);
