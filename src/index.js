import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import loginReducer from "./reducers/auth_reducer/loginReducer";
import { createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig={
    key:'persist-store',
    storage
}
const persistedReducer = persistReducer(persistConfig, loginReducer)
const store = createStore(persistedReducer,composeWithDevTools())
const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
  <PersistGate persistor={persistor}>
    <App/>
    </PersistGate>
  </Provider>, 
  document.getElementById('root')
);

