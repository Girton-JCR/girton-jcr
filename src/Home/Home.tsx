import React from 'react';
import '../index.css';
import './Home.css';
import usePageTitle from '../usePageTitle';
import InstaFeeds from './InstaFeed';
import CalendarSmall from '../CollegeLife/EventsCalendar/CalendarSmall';

function Home() {
  usePageTitle('Home | Girton JCR');
  const key = process.env['REACT_APP_INSTAGRAM_KEY'];
  return (
    <div className="Home">
      <div className="HomeGrid">
        <div className="HomeItem">
          <h2>Welcome to the Girton JCR Website!</h2>
          <p>
            We&apos;re the Girton College JCR Committee, and we represent the
            undergraduate body here at Girton. Here on our website, you can find
            out more about us and our work, with live updates on their way. We
            also have lots of information on college services that undergrad
            students can access, welfare resources curated by our welfare
            officers, and information for incoming freshers before they join us!
          </p>
        </div>
        <div className="HomeItem">
          <img
            className="CommitteePhoto"
            width="100%"
            src="./committee photo.png"
          />
          <div className="Mini" style={{ textAlign: 'center' }}>
            Girton JCR Committee 2023
          </div>
        </div>
        <div className="HomeItem">
          <h2>Recent Instagram Posts</h2>
          <InstaFeeds
            token={key !== undefined ? key : 'none'}
            limit={24}
            id="aaa"
          />
        </div>
        <div className="HomeItem">
          <CalendarSmall />
        </div>
      </div>
    </div>
  );
}

export default Home;
