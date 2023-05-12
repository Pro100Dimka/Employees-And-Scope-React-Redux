import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import useFetch from 'modules/redux/hooks/useFetch';
import { JOBS } from 'modules/api/endpoints';
import DrawerNav from './Drawer';

export default function Navigation({
  drawerWidth,
  handleDrawerToggle,
  container,
  mobileOpen,
}) {
  const { response, performFetch } = useFetch(JOBS);
  useEffect(() => {
    performFetch();
  }, [performFetch]);
  const { loading, data } = response;
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <DrawerNav loading={loading} data={data} />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        <DrawerNav loading={loading} data={data} />
      </Drawer>
    </Box>
  );
}
