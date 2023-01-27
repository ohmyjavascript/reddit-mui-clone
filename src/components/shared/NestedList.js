import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import React from 'react';

const NestedList = ({ data = [], icon = <InboxIcon />, text = 'Default' }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {data.length &&
          data.map((item) => {
            return (
              <List key={item.id} component="div" disablePadding>
                <ListItemButton sx={{ pl: 9 }}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </List>
            );
          })}
      </Collapse>
    </React.Fragment>
  );
};

export default NestedList;
