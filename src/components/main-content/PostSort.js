import { Button, Card, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { SiHotjar } from 'react-icons/si';
import { MdOutlineNewReleases } from 'react-icons/md';
import { BiChevronsUp } from 'react-icons/bi';
import SelectMore from '@main/SelectMore';
import SwitchLayout from '@main/SwitchLayout';
import {
  cardContentWrapper,
  postSortLayoutWrapper,
  postSortBtn1,
  postSortBtn2,
  flexGrow,
} from '@styles/styles';
import CountrySelect from '@main/CountrySelect';

const PostSort = () => {
  return (
    <Card>
      <CardContent sx={cardContentWrapper}>
        <Box sx={postSortLayoutWrapper}>
          <Button sx={postSortBtn1} variant="outlined" startIcon={<SiHotjar />}>
            Hot
          </Button>
          <CountrySelect />
          <Button
            sx={postSortBtn2}
            variant="outlined"
            startIcon={<MdOutlineNewReleases />}
          >
            New
          </Button>
          <Button
            sx={postSortBtn2}
            variant="outlined"
            startIcon={<BiChevronsUp />}
          >
            Top
          </Button>
          <SelectMore />
          <Box sx={flexGrow}></Box>
          <SwitchLayout />
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostSort;
