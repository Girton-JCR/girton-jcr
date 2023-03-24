import React from 'react';
import '../index.css';
import usePageTitle from '../usePageTitle';
import InstaFeeds from './InstaFeed';

function Home() {
  usePageTitle('Home | Girton JCR');
  const key = process.env['REACT_APP_INSTAGRAM_KEY'];
  return (
    <div className="Home">
      <h1>Home</h1>
      <InstaFeeds
        token={key !== undefined ? key : 'none'}
        limit={12}
        id="aaa"
      />
    </div>
  );
}

export default Home;
