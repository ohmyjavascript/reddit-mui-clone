import { Box } from '@mui/system';
import React from 'react';
import './App.css';
import {
  appWrapper,
  contentWrapper,
  sideBarWrapper,
  contentAreaWrapper,
  scrollListWrapper,
  createAccountWrapper,
  joinRedditWrapper,
} from '@styles/styles';
import Navbar from '@navigation/Navbar';
import SideList from '@components/SideList';

function App() {
  return (
    <React.Fragment>
      <Box sx={appWrapper}>
        <Navbar />
        <Box sx={contentWrapper}>
          <Box sx={sideBarWrapper}>
            <Box sx={scrollListWrapper}>
              <SideList />
            </Box>
            <Box sx={createAccountWrapper}>
              <Box sx={joinRedditWrapper}>{/* join reddit section */}</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
