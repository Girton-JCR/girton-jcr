import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SiteHeader from './SiteHeader/SiteHeader';
import SiteFooter from './SiteFooter/SiteFooter';
import ITResources from './CollegeLife/ITResources/ITResources';
import Accommodation from './CollegeLife/Accommodation/Accommodation';
import BookingFacilities from './CollegeLife/BookingFacilities/BookingFacilities';
import Catering from './CollegeLife/Catering/Catering';

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <main>
          <Routes>
            <Route path="/accommodation" Component={Accommodation} />
            <Route path='/booking-facilities' Component={BookingFacilities} />
            <Route path='/catering' Component={Catering} />
            <Route path="/it-resources" Component={ITResources} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
