import React from 'react';
import { Container } from '@mui/system';
import TrendingImages from '@main/TrendingImages';

const AppContentArea = () => {
  return (
    <Container maxWidth="lg">
      <TrendingImages />
      {/* popular posts */}
    </Container>
  );
};

export default AppContentArea;
