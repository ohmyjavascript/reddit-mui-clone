import { FiUser } from 'react-icons/fi';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { userProfileItems } from '@data/app.data';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import React from 'react';
import { grayText, userProfileMinWidth } from '@styles/styles';

const UserProfile = () => {
  return (
    <Box sx={{ px: 1 }}>
      <Button sx={grayText} id="basic-button" onClick={}>
        <FiUser size={24} />
        {open ? <BiChevronUp size={24} /> : <BiChevronDown size={24} />}
      </Button>
      <Menu
        sx={{ mt: 2 }}
        id="basic-menu"
        anchorEl={}
        open={}
        onClose={}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Box sx={userProfileMinWidth}>
          {/* list */}
        </Box>
      </Menu>
    </Box>
  );
};

export default UserProfile;
