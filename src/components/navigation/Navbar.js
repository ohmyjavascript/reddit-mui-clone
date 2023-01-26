import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { appBar, toolbarWrapper } from '@styles/styles';

import {
  loginBtnWrapper,
  mobileNavWrapper,
  logoWrapper,
  appToolBarWrapper,
  flex,
} from '@styles/styles';
import Logo from '@navigation/Logo';

const Navbar = () => {
  return (
    <AppBar component="nav" sx={appBar}>
      <Toolbar sx={appToolBarWrapper}>
        <Box sx={toolbarWrapper}>
          <Box sx={logoWrapper}>
            <Logo />
            <Box sx={mobileNavWrapper}>
              {/* mobile nav - shown only in small viewports */}
            </Box>
          </Box>
          <Box>{/* search bar */}</Box>
          <Box sx={flex}>
            <Box sx={loginBtnWrapper}>{/* Login buttons */}</Box>
            {/* user profile section */}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
