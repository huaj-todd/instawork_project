//import logo from './logo.svg';
import './App.css';
import './vendor/bootstrap/bootstrap.min.css'
import './vendor/fontawesome/css/all.min.css'
import './vendor/PageCSS.css'

import ListScreen from "./component/ListScreen/List";
import AddScreen from "./component/AddScreen/Add";

import React from 'react';
import {BrowserRouter, Route,Routes} from "react-router-dom";




function App() {
  return (
      <>
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
      </>

  );
}

export default App;
