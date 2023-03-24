import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SiteHeader from './SiteHeader/SiteHeader';
import SiteFooter from './SiteFooter/SiteFooter';
import ITResources from './CollegeLife/ITResources/ITResources';
import Accommodation from './CollegeLife/Accommodation/Accommodation';
import BookingFacilities from './CollegeLife/BookingFacilities/BookingFacilities';
import Catering from './CollegeLife/Catering/Catering';
import ClubsAndSocieties from './CollegeLife/ClubsAndSocieties/ClubsAndSocieties';
import Freshers from './CollegeLife/Freshers/Freshers';
import Transport from './CollegeLife/Transport/Transport';

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <main>
          <Routes>
            <Route path="/accommodation" Component={Accommodation} />
            <Route path="/booking-facilities" Component={BookingFacilities} />
            <Route path="/catering" Component={Catering} />
            <Route path="/clubs-and-societies" Component={ClubsAndSocieties} />
            <Route path="/freshers" Component={Freshers} />
            <Route path="/it-resources" Component={ITResources} />
            <Route path="/transport" Component={Transport} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
