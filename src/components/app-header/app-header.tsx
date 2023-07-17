import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import sizeConfigs from '../../data/size-configs.json';

export interface AppHeaderProps {
  onClick: () => void,
  title: string
}
const AppHeader = ({ onClick, title }: AppHeaderProps) => {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${sizeConfigs.drawerWidth}px)` },
        ml: { sm: `${sizeConfigs.drawerWidth}px` },
      }}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open side panel'
          edge='start'
          onClick={onClick}
          sx={{ mr: 2, display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div'>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
