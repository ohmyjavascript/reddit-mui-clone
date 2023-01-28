import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { cardFooterWrapper, cardFooterText } from '@styles/styles';
import { cardFooterItems } from '@data/app.data';

const CardFooter = ({ comments = 0 }) => {
  return (
    <Box sx={cardFooterWrapper}>
      {cardFooterItems.map((item) => {
        return (
          <Button key={item.id}>
            <Typography sx={cardFooterText}>
              {item.icon}
              <Box as="span" sx={{ ml: 1 }}>
                {item.comments && comments} {item.text}
              </Box>
            </Typography>
          </Button>
        );
      })}
    </Box>
  );
};

export default CardFooter;
