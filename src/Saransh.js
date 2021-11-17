import React, { Component } from 'react'
import {BrowserRouter as Router,Routes,Switch,Route} from 'react-router-dom';
import Addfaculty from './component/faculty/addfaculty';
import Viewfaculty from './component/faculty/viewfaculty';
export default class Saransh extends Component {
    render() {
        return (
            <div>
                test
                <Router>
                     <Routes>
                        <Route path="/addfaculty" element={<Addfaculty/>}/>
                     </Routes>

                </Router>
                 {/* <BrowserRouter> */}
{/* 
<Route path='/' component={Viewfaculty}/>
<Route path='/saransh' component={Viewfaculty}/> */}
{/* </BrowserRouter> */}
            </div>
        )
    }
}
