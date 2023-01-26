import { Button } from '@mui/material';
import React from 'react';

const CustomButton = ({ text, bgColor, color, space, ...props }) => {
  return (
    <Button
      sx={{
        borderRadius: 20,
        backgroundColor: bgColor,
        color,
        mx: space ? 1 : '',
        px: 2,
      }}
      disableElevation
      variant="contained"
      {...props}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
