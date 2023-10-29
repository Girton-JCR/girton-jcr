import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import SiteHeader from './SiteHeader/SiteHeader';
import SiteFooter from './SiteFooter/SiteFooter';
import ITResources from './CollegeLife/ITResources/ITResources';
import Accommodation from './CollegeLife/Accommodation/Accommodation';
import BookingFacilities from './CollegeLife/BookingFacilities/BookingFacilities';
import Catering from './CollegeLife/Catering/Catering';
import ClubsAndSocieties from './CollegeLife/ClubsAndSocieties/ClubsAndSocieties';
import Freshers from './CollegeLife/Freshers/Freshers';
import Transport from './CollegeLife/Transport/Transport';
import EventsCalendar from './CollegeLife/EventsCalendar/EventsCalendar';
import Welfare from './Welfare/Welfare';
import WhatIsJCR from './JCRCommittee/WhatIsJCR/WhatIsJCR';
import Home from './Home/Home';
import JCRNews from './JCRCommittee/JCRNews/JCRNews';
import Societies from './Societies/Societies';
import MeetCommittee from './JCRCommittee/MeetCommittee/MeetCommittee';

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader>
          <div />
        </SiteHeader>
        <main>
          <Routes>
            <Route path="/accommodation" Component={Accommodation} />
            <Route path="/booking-facilities" Component={BookingFacilities} />
            <Route path="/catering" Component={Catering} />
            <Route path="/clubs-and-societies" Component={ClubsAndSocieties} />
            <Route path="/events-calendar" Component={EventsCalendar} />
            <Route path="/freshers" Component={Freshers} />
            <Route path="/" Component={Home} />
            <Route
              path="/jcr-news"
              Component={() => {
                window.location.href = 'https://girtonjcr.blogspot.com';
                return null;
              }}
            />
            <Route path="/it-resources" Component={ITResources} />
            <Route path="/meet-the-committee" Component={MeetCommittee} />
            <Route path="/societies-list" Component={Societies} />
            <Route path="/transport" Component={Transport} />
            <Route path="/welfare" Component={Welfare} />
            <Route path="/what-is-the-jcr" Component={WhatIsJCR} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
