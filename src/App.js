import React, { Component } from 'react';
import { render } from "react-dom";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Addfaculty from './component/faculty/addfaculty';
import Viewfaculty from './component/faculty/viewfaculty';
import Updatefaculty from './component/faculty/updatefaculty';
export default class App extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <div>
                <Router>
                     <Routes>
                     <Route path="/" element={<Viewfaculty/>}/>
                        <Route path="/addfaculty" element={<Addfaculty/>}/>
                        <Route exact path={"updatefaculty/:id"} element={ <Updatefaculty />} />
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
// export default withRouter(App);