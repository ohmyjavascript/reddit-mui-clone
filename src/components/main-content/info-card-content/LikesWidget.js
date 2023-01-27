import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { CgChevronUpR, CgChevronDownR } from 'react-icons/cg';
import { likesWidget } from '@styles/styles';

const LikesWidget = ({ likes }) => {
  return (
    <Box sx={likesWidget}>
      <CgChevronUpR />
      <Box sx={{ my: 1 }}>
        <Typography>{likes}</Typography>
      </Box>
      <CgChevronDownR />
    </Box>
  );
};

export default LikesWidget;
