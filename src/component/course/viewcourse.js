import React from 'react'
import axios from 'axios';
import Deletecourse from './deletecourse';
import Updatecourse from './updatecourse';
import {withRouter} from 'react-router'
import courseservices from '../../services/courseservices';
export default class Viewcourse extends React.Component
{
    state = {
        persons: [],
        person:"",

      }
    constructor(){
        
        super();
       
        }
  

    componentDidMount() {
        courseservices.viewcourse()
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

               <th scope="col-2">Course Name</th>
               
               <th scope="col-2">Action</th>
               
               </tr>
             </thead>
             <tbody>
               {this.state.persons.map(person=> <tr>
                <td>{person.id}</td>

                <td>{person.cname}</td>
                
                <div><td><Deletecourse id={person.id}/> &nbsp;
                <input className="btn btn-primary"type="button" id={person} value="Edit"onClick={(e)=>window.location.replace('/updatecourse/'+person.id)} /></td></div>
              </tr>)
               }
             </tbody>
        </table>
        
     
            
        
        
        

        )
    }
    
}
//export default withRouter(Viewfaculty);
