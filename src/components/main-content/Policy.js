import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {
  footerWrapper,
  grayText,
  policyLink,
  policyWrapper,
} from '@styles/styles';

const items = [
  { id: 1, text: 'User Agreement', link: '#' },
  { id: 2, text: 'Content Policy', link: '#' },
  { id: 3, text: 'Privacy Policy', link: '#' },
  { id: 4, text: 'Code of Conduct', link: '#' },
];

const Policy = () => {
  return (
    <React.Fragment>
      <Box sx={policyWrapper}>
        {items.map((item) => {
          return (
            <Link
              underline="none"
              variant="body2"
              sx={policyLink}
              key={item.id}
              href={item.link}
            >
              {item.text}
            </Link>
          );
        })}
      </Box>
      <Box sx={footerWrapper}>
        <Typography variant="caption" sx={grayText}>
          Reddit Clone Inc 2023 All rights reserved
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default Policy;
