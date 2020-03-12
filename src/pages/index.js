import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Calendar from './components/Calendar'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const index = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <Calendar />
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  )
}
export default index
