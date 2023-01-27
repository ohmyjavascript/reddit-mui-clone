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
import useToggle from '@hooks/useToggle';

const UserProfile = () => {
  const { el, open, handleClick, handleClose } = useToggle();
  const ctx = {
    mode: 'light',
    toggleColorMode: () => {},
  };
  return (
    <Box sx={{ px: 1 }}>
      <Button sx={grayText} id="basic-button" onClick={handleClick}>
        <FiUser size={24} />
        {open ? <BiChevronUp size={24} /> : <BiChevronDown size={24} />}
      </Button>
      <Menu
        sx={{ mt: 2 }}
        id="basic-menu"
        anchorEl={el}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Box sx={userProfileMinWidth}>
          {userProfileItems.map((item) => {
            return (
              <List sx={{ p: 0 }} key={item.id}>
                {item.divider ? (
                  <Divider />
                ) : item.nested ? (
                  <p> Nested list</p>
                ) : (
                  <ListItem disablePadding>
                    {item.isDarkMode ? (
                      <ListItemButton onClick={ctx.toggleColorMode}>
                        <ListItemIcon>
                          {ctx.mode === 'dark' ? item.icon2 : item.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={ctx.mode === 'dark' ? item.text2 : item.text}
                        />
                      </ListItemButton>
                    ) : (
                      <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    )}
                  </ListItem>
                )}
              </List>
            );
          })}
        </Box>
      </Menu>
    </Box>
  );
};

export default UserProfile;
