//import logo from './logo.svg';
import './App.css';
import './vendor/bootstrap/bootstrap.min.css'
import './vendor/fontawesome/css/all.min.css'
import './vendor/PageCSS.css'

import ListScreen from "./component/ListScreen/List";
import AddScreen from "./component/AddScreen/Add";


import memberReducer from "./component/reducer/memberReducer";
import {combineReducers, createStore} from 'redux';
import { Provider } from "react-redux";
import React from 'react';
import {BrowserRouter, Route,Routes} from "react-router-dom";

const reducer = combineReducers({member:memberReducer});
const store = createStore(reducer);

function App() {
  return (
      <Provider store={store}>
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

  );
}

export default App;
