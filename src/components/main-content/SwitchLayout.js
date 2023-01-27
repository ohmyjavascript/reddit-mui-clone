import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import { switchLayoutBtn } from '@styles/styles';
import useToggle from '@hooks/useToggle';

const SwitchLayout = () => {
  const { el, open, handleClick, handleClose } = useToggle();
  return (
    <div>
      <Button id="switch-layout" sx={switchLayoutBtn} onClick={handleClick}>
        <BsFillMenuButtonWideFill size={18} />
        {!open && <BiChevronDown />}
        {open && <BiChevronUp />}
      </Button>
      <Menu
        id="switch-layout-menu"
        anchorEl={el}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'switch-layout',
        }}
      >
        <MenuItem onClick={handleClose}>Card</MenuItem>
        <MenuItem onClick={handleClose}> Classic</MenuItem>
        <MenuItem onClick={handleClose}>Compact</MenuItem>
      </Menu>
    </div>
  );
};

export default SwitchLayout;
