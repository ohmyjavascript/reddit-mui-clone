import React from 'react';
import Box from '@mui/material/Box';

const VideoContent = ({ id }) => {
  return (
    <Box>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export default VideoContent;
