//import logo from './logo.svg';
import './App.css';
import './vendor/bootstrap/bootstrap.min.css'
import './vendor/fontawesome/css/all.min.css'
import './vendor/PageCSS.css'

import ListScreen from "./component/ListScreen/List";
import AddScreen from "./component/AddScreen/Add";

import React from 'react';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import memberReducer from "./component/reducer/memberReducer";
import { combineReducers, legacy_createStore as createStore } from 'redux'
import { Provider } from "react-redux";
const reducer = combineReducers({members: memberReducer})
const newStore = createStore(reducer);

function App() {
  return (
      <>
          <Provider store={newStore}>
              <BrowserRouter>
                  <div className="container">
                      <Routes>
                          <Route path='/'>
                              <Route index element = {<ListScreen/>}/>
                              <Route path='/list' element = {<ListScreen/>}/>
                              <Route path='/add' element = {<AddScreen/>}/>
                          </Route>

                      </Routes>

                  </div>
              </BrowserRouter>
          </Provider>

      </>

  );
}

export default App;
