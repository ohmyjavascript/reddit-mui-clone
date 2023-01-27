import { Chip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {
  postInfoContentWrapper,
  postInfoLayoutWrapper,
  postInfoHeader,
  flexGrow,
  postInfoDesc,
  postInfoSubHeader,
} from '@styles/styles';

const PostInfoContent = ({ item }) => {
  return (
    <Box sx={postInfoContentWrapper}>
      <Box sx={postInfoLayoutWrapper}>
        <Typography sx={postInfoHeader}>
          {item.icon} {item.user}
        </Typography>
        <Typography sx={postInfoDesc}>Posted by {item.postedBy}</Typography>
        <Typography sx={postInfoSubHeader}>{item.timeAgo} hours ago</Typography>
      </Box>
      <Box sx={flexGrow}></Box>
      <Chip sx={{ px: 1 }} label="Join" color="primary" />
    </Box>
  );
};

export default PostInfoContent;
