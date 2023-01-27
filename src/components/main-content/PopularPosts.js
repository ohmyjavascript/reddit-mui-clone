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

const PopularPosts = () => {
  return (
    <React.Fragment>
      <Typography sx={popularPostHeader} variant="h6">
        Popular Posts
      </Typography>
      <Box sx={postSortContainer}>
        <Box sx={postSectionWrapper}>
          <Box sx={postSortWrapper}>{/* post sort */}</Box>

          {cardContentItems.map((item) => {
            return <h1 key={item.id}> Info card </h1>;
          })}
        </Box>
        <Box sx={communitiesWrapper}>
          {/* popular community */}
          {/* policy */}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default PopularPosts;
