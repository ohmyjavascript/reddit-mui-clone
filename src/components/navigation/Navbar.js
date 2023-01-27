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
import SearchBar from '@navigation/SearchBar';
import CustomButton from '@shared/CustomButton';
import UserProfile from '@navigation/UserProfile';

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
          <Box>
            <SearchBar />
          </Box>
          <Box sx={flex}>
            <Box sx={loginBtnWrapper}>
              <CustomButton
                text="Get App"
                bgColor="background.customBtn"
                color="text.btnText"
                space
              />
              <CustomButton
                text="Login"
                bgColor="background.customBtn2"
                color="text.btnText"
                space
              />
            </Box>
            <UserProfile />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
