import React from 'react';
import '../index.css';
import './Home.css';
import usePageTitle from '../usePageTitle';
import InstaFeeds from './InstaFeed';

function Home() {
  usePageTitle('Home | Girton JCR');
  const key = process.env['REACT_APP_INSTAGRAM_KEY'];
  return (
    <div className="Home">
      <h1>Home</h1>
      <div className="HomeGrid">
        <div className="HomeItem">
          <img
            className="CommitteePhoto"
            width="100%"
            src="./committee photo.webp"
          />
        </div>
        <div className="HomeItem">
          <InstaFeeds
            token={key !== undefined ? key : 'none'}
            limit={24}
            id="aaa"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
