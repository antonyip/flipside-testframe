import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js'
import Aave from './components/Aave.js'
import Polygon from './components/Polygon.js'
import Polygon8 from './components/Polygon-8'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";


function LinkWrapper(props)
{
  return <div><Link to={props.to}>{props.text}</Link></div>
}

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/">
            <Redirect to="/home"></Redirect>
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/polygon" component={Polygon} />
          <Route path="/aave" component={Aave} />
          <Route path="/polygon-8" component={Polygon8} />
      </Router>
    </div>
  );
}

export default App;
