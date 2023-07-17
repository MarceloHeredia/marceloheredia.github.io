import * as React from 'react';
import { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';

import sizeConfigs from '../../data/size-configs.json';

interface PageBaseProps {
  padding?: number,
}

const PageBase = ({ children, padding = 3 }: PropsWithChildren<PageBaseProps>) => {
  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        p: padding,
        width: { sm: `calc(100% - ${sizeConfigs.drawerWidth}px)` },
        marginTop: `${sizeConfigs.appHeaderHeight}px`,
        marginLeft: `${sizeConfigs.drawerWidth}px`,
      }}>
      {children}
    </Box>
  );
};

export default PageBase;