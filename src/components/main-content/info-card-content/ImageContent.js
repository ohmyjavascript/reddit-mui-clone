import Box from '@mui/material/Box';
import React from 'react';
import { CoverImage } from '@styled/CoverImage';
import { imageContentBox } from '@styles/styles';

const ImageContent = ({ image }) => {
  return (
    <Box sx={imageContentBox}>
      <CoverImage imageUrl={image} imageHeight="300px" />
    </Box>
  );
};

export default ImageContent;
