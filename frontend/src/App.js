// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CoordinatorView from './Components/Coordinator/CoordinatorView';
import ContributorView from './Components/Contributor/ContributorView';
import Login from './Components/Login';

const App = () => {
  return (
    <Router>
      {/* <Route path="/coordinator" component={CoordinatorView} />
      <Route path="/contributor" component={ContributorView} /> */}
      {/* <Login/> */}
      <CoordinatorView/>
    </Router>
  );
};

export default App;
