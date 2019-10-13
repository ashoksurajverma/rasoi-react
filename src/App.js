import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home';

function App() {
  return (
    <Router>
      <div>
        <div>Heeader</div>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
        <div>Footer</div>
      </div>
    </Router>
  );
}

export default App;
