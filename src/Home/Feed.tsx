import { Grid } from '@mui/material';
import React from 'react';

export interface FeedProps {
  feed: {
    id: string;
    caption: string;
    media_type: string;
    media_url: string;
  };
  key: string;
}

const Feed = (props: FeedProps) => {
  const { id, caption, media_type, media_url } = props.feed;
  let post;
  switch (media_type) {
    case 'VIDEO':
      post = (
        <video width="100%" height="auto" controls playsInline>
          <source type="video/mp4" src={media_url} />
        </video>
      );
      break;
    case 'CAROUSEL_ALBUM':
      post = <img width="100%" id={id} src={media_url} alt={caption} />;
      break;
    default:
      post = <img width="100%" id={id} src={media_url} alt={caption} />;
  }

  return (
    <React.Fragment>
        <Grid item xs={4}>
            <a href={media_url}>{post}</a>
        </Grid>
    </React.Fragment>
  );
};

export default Feed;
