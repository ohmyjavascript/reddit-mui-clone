import React from 'react';
import Link from '@mui/material/Link';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { AiOutlineLink } from 'react-icons/ai';
import { linkContentWrapper, linkContentBtn } from '@styles/styles';

const LinkContent = ({ text }) => {
  return (
    <Box sx={linkContentWrapper}>
      <Link href={text}> {text}</Link>
      <Box>
        <Button sx={linkContentBtn}>
          <AiOutlineLink />
        </Button>
      </Box>
    </Box>
  );
};

export default LinkContent;
