import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {
  infoCardWrapper,
  infoCardLayout,
  infoCardHeader,
} from '@styles/styles';

const InfoCard = ({ item }) => {
  return (
    <Box sx={infoCardWrapper}>
      {/* like widget */}
      <Box sx={infoCardLayout}>
        {/* post info content */}
        <Typography sx={infoCardHeader} variant="h6">
          {item.desc}
        </Typography>
        {/* video content */}
        {/* image */}
        {/* link content */}
        {/* card footer */}
      </Box>
    </Box>
  );
};

export default InfoCard;
