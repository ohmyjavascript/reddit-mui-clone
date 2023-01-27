import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { cardContentItems } from '@data/app.data';

import {
  postSectionWrapper,
  communitiesWrapper,
  postSortWrapper,
  popularPostHeader,
  postSortContainer,
} from '@styles/styles';
import PostSort from '@main/PostSort';
import PopularCommunities from '@main/PopularCommunities';
import Policy from '@main/Policy';
import InfoCard from '@main/InfoCard';

const PopularPosts = () => {
  return (
    <React.Fragment>
      <Typography sx={popularPostHeader} variant="h6">
        Popular Posts
      </Typography>
      <Box sx={postSortContainer}>
        <Box sx={postSectionWrapper}>
          <Box sx={postSortWrapper}>
            <PostSort />
          </Box>

          {cardContentItems.map((item) => {
            return <InfoCard key={item.id} item={item} />;
          })}
        </Box>
        <Box sx={communitiesWrapper}>
          <PopularCommunities />
          <Policy />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default PopularPosts;
