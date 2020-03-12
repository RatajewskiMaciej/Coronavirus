import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import LandingPage from '../components/LandingPage';
import Calendar from '../components/Calendar'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const index = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div>
      <Navbar />
      <Calendar />
      <LandingPage />
    </div >
  )
}
export default index
