import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from './ToolBar';
import Navigation from './Navigation';
import Content from './Content';

export default function Main(props) {
  const drawerWidth = 240;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Header
          drawerWidth={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Navigation
          drawerWidth={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
          container={container}
          mobileOpen={mobileOpen}
        />
        <Content drawerWidth={drawerWidth} />
      </Box>
    </>
  );
}
