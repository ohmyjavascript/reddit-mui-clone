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

function App() {
  return (
    <React.Fragment>
      <Box sx={appWrapper}>
        {/* nav bar */}
        <Box sx={contentWrapper}>
          <Box sx={sideBarWrapper}>
            <Box sx={scrollListWrapper}>{/* side bar list */}</Box>
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
