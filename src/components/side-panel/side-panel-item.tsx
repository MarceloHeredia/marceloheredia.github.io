import * as React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

interface SidePanelItemProps {
  icon: React.ReactNode;
  name: string,
  link: string,
}

export const SidePanelItem = ({ icon, name, link }: SidePanelItemProps) => {

  return (
    <ListItem key={name} disablePadding>
      <ListItemButton component={Link} to={link}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};
