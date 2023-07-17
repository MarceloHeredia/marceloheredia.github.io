import * as React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';

import {
  Divider,
  List,
  Toolbar,
} from '@mui/material';

import { SidePanelItem } from './side-panel-item';

const SidePanel = () => {

  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <SidePanelItem icon={<HomeIcon/>} name='Home' link={'/'}/>
        <SidePanelItem icon={<PersonIcon/>} name='About' link={'/about'}/>
      </List>
    </div>
  );
};

export default SidePanel;
