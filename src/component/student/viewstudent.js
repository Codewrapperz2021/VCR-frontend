import React from 'react'
import axios from 'axios';
import Deletestudent from './deletestudent';
import Updatestudent from './updatestudent';
import {withRouter} from 'react-router'
import studentservices from '../../services/studentservices';
export default class Viewstudent extends React.Component
{
    state = {
        persons: [],
        person:"",

      }
    constructor(){
        
        super();
       
        }
  

    componentDidMount() {
        studentservices.viewstudent()
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

               <th scope="col-2">First Name</th>
               <th scope="col-2">Last Name</th>
               <th scope="col-3">Email</th>
               <th scope="col-3">Contact</th>
               <th scope="col-3">Address</th>
               <th scope="col-2">Action</th>
               
               </tr>
             </thead>
             <tbody>
               {this.state.persons.map(person=> <tr>
                <td>{person.id}</td>

                <td>{person.first_name}</td>
                 <td>{person.last_name}</td>
                <td> {person.email}</td>
                <td>{person.phone}</td>
                <td>{person.address}</td>
                <div><td><Deletestudent id={person.id}/> &nbsp;
                <input className="btn btn-primary"type="button" id={person} value="Edit"onClick={(e)=>window.location.replace('/updatestudent/'+person.id)} /></td></div>
              </tr>)
               }
             </tbody>
        </table>
        
     
            
        
        
        

        )
    }
    
}
//export default withRouter(Viewfaculty);
