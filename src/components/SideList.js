import { sideListItems } from '@data/app.data';
import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import NestedList from '@shared/NestedList';
import {
  sideListWrapper,
  sideListItemText,
  sideListSpacing,
  sideListResetPadding,
} from '@styles/styles';

const SideList = () => {
  return (
    <Box sx={sideListWrapper}>
      {sideListItems.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {item.subdivision ? (
              <>
                <Divider />
                <Box sx={sideListSpacing}>
                  <Typography
                    sx={sideListItemText}
                    variant="caption"
                    gutterBottom
                  >
                    {item.text}
                  </Typography>
                </Box>
              </>
            ) : item.divider ? (
              <Divider />
            ) : item.nested ? (
              <NestedList data={item.data} icon={item.icon} text={item.text} />
            ) : (
              <nav aria-label="Side list items">
                <List sx={sideListResetPadding}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            )}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default SideList;
