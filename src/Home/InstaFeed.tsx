import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Feed from './Feed';
import { Box, Grid, Typography } from '@mui/material';

interface Props {
  token: string;
  limit: number;
  id: string;
}

const InstaFeeds = (props: Props) => {
  const [feeds, setFeedsData] = useState([]);
  //use useRef to store the latest value of the prop without firing the effect
  const tokenProp = useRef(props.token);
  tokenProp.current = props.token;

  useEffect(() => {
    // this is to avoid memory leaks
    const abortController = new AbortController();

    async function fetchInstagramPost() {
      try {
        await axios
          .get( `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${props.token}`)
          .then((resp) => {
            if (resp.status === 400) {
              console.log('Failed to load instagram feed');
            } else {
              setFeedsData(resp.data.data);
            }
          })
          .catch((err) => {
            console.log('Failed to load instagram feed: ', err);
          });
      } catch (err) {
        console.log('Failed to load instagram feed: ', err);
      }
    }

    // manually call the fetch function
    fetchInstagramPost();

    return () => {
      // cancel pending fetch request on component unmount
      abortController.abort();
    };
  }, [props.limit]);

  return (
    <Grid container className="Feed" spacing={2}>
      {feeds.length > 0
        ? feeds.map(
        (feed: {
          id: string;
          caption: string;
          media_type: string;
          media_url: string;
        }) => (
          <Feed key={feed.id} feed={feed} />
        )
      ) : <p style={{ padding: 32 }}>No posts found, please check back later.</p>}
    </Grid>
  );
};

export default InstaFeeds;
