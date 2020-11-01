import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import './App.css';

import Create from './create'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route path="/test" component={Create} /> */}
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
