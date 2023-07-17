import * as React from 'react';
import Box from '@mui/material/Box';
// eslint-disable-next-line import/named
import { Drawer, DrawerProps,  useMediaQuery, useTheme } from '@mui/material';

import { SidePanel } from '../side-panel';
import { AppHeader } from '../app-header';
import { useCallback } from 'react';
import sizeConfigs from '../../data/size-configs.json';

const NavigationDrawer = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevOpen) => !prevOpen);
  };

  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

  const responsiveDrawerProps = useCallback((): DrawerProps => {
    if (isMobile) {
      return {
        variant: 'temporary',
        open: mobileOpen,
        onClose: handleDrawerToggle,
        keepMounted: true,
      };
    } else {
      return {
        variant: 'permanent',
        open: true,
      };
    }
  }, [isMobile, mobileOpen]);


  return (
    <Box sx={{ display: 'flex' }}>
      <AppHeader
        onClick={handleDrawerToggle}
        title={'Welcome to my portfolio'}
      />
      <Box
        component='nav'
        sx={{ width: { sm: sizeConfigs.drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='navigation panel'>
        <Drawer
          {...responsiveDrawerProps()}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: sizeConfigs.drawerWidth,
            },
          }}>
          <SidePanel />
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavigationDrawer;
