import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import loginReducer from "./reducers/auth_reducer/loginReducer";
import {composeWithDevTools} from "redux-devtools-extension"
const store = createStore(loginReducer,composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);

