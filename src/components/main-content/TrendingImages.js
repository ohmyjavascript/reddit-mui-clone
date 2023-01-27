import { Box } from '@mui/system';
import React from 'react';
import { Typography } from '@mui/material';
import AvatarDetails from '@main/AvatarDetails';
import { imageCardsItems } from '@data/app.data';
import { CoverImage } from '@styled/CoverImage';
import { trendingImageHeader, trendimgImageContent } from '@styles/styles';

const TrendingImages = () => {
  return (
    <React.Fragment>
      <Typography sx={trendingImageHeader} variant="h6">
        Trending Today
      </Typography>
      <div className="imageBoxWrapper">
        {imageCardsItems.map((item) => {
          return (
            <Box key={item.id} className={`imageBox box${item.id}`}>
              <CoverImage imageUrl={item.imageUrl} imageHeight="200px" />
              <Box sx={trendimgImageContent}>
                <Typography variant="subtitle2"> {item.header}</Typography>
                <Typography variant="subtitle2">{item.subHeader}</Typography>
                <AvatarDetails icon={item.icon} user={item.user} />
              </Box>
            </Box>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default TrendingImages;
