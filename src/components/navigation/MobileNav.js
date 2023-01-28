import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import {
  mobileBtnWrapper,
  positionRelative,
  positionAbsolute,
  flexGrow,
} from '@styles/styles';
import SideList from '@components/SideList';

const MobileNav = () => {
  const [open, setOpen] = useState();
  const toggle = () => {
    setOpen((v) => !v);
  };
  return (
    <React.Fragment>
      <Box sx={positionRelative}>
        <Button
          onClick={toggle}
          sx={mobileBtnWrapper}
          startIcon={<AiOutlineHome />}
        >
          <Typography sx={{ mr: 1 }}>Home</Typography>
          <Box sx={flexGrow}></Box>
          <BiChevronDown size={24} />
        </Button>
        <Box sx={positionAbsolute}>{open && <SideList />}</Box>
      </Box>
    </React.Fragment>
  );
};

export default MobileNav;
