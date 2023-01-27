import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { avatarWrapper, flex } from '@styles/styles';

const AvatarDetails = ({ icon, user }) => {
  return (
    <React.Fragment>
      <Box sx={avatarWrapper}>
        <Box as="span" sx={{ mr: 1, ...flex }}>
          {icon}
        </Box>
        <Typography variant="caption"> {user}</Typography>
      </Box>
    </React.Fragment>
  );
};

export default AvatarDetails;
