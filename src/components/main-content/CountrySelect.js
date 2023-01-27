import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { selectCountryBtn } from '@styles/styles';
import useToggle from '@hooks/useToggle';

const CountrySelect = () => {
  const { el, open, handleClick, handleClose } = useToggle();

  return (
    <div>
      <Button id="country-select" sx={selectCountryBtn} onClick={handleClick}>
        Canada {open ? <BiChevronUp /> : <BiChevronDown />}
      </Button>
      <Menu
        id="country-select-menu"
        anchorEl={el}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'country-select',
        }}
      >
        <MenuItem onClick={handleClose}>Everywhere</MenuItem>
        <MenuItem onClick={handleClose}>United States</MenuItem>
        <MenuItem onClick={handleClose}>Argentina</MenuItem>
      </Menu>
    </div>
  );
};

export default CountrySelect;
