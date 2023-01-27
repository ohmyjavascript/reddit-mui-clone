import React from 'react';
import { Container } from '@mui/system';
import TrendingImages from '@main/TrendingImages';
import PopularPosts from '@main/PopularPosts';

const AppContentArea = () => {
  return (
    <Container maxWidth="lg">
      <TrendingImages />
      <PopularPosts />
    </Container>
  );
};

export default AppContentArea;
