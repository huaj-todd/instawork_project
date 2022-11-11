//import logo from './logo.svg';
import './App.css';
import './vendor/bootstrap/bootstrap.min.css'
import './vendor/fontawesome/css/all.min.css'
import './vendor/PageCSS.css'
import HelloWorld from './component/helloWorld'
import ListScreen from "./component/ListScreen/List";
import {BrowserRouter, Route,Routes} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path='/'>
                    <Route index element = {<HelloWorld/>}/>
                    <Route path='/helloworld' element = {<HelloWorld/>}/>
                    <Route path='/list' element = {<ListScreen/>}/>
                </Route>

            </Routes>

        </div>
      </BrowserRouter>
  );
}

export default App;
