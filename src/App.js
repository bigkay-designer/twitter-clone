import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Landing from './components/Landing'
import Signup from './components/authentication/Signup'
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/" exact component={Landing} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
