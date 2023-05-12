import React, { useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import EmployeesCard from 'components/EmployeeCard';
import useFetch from 'modules/redux/hooks/useFetch';
import { EMPLOYEES } from 'modules/api/endpoints';
import { useSelector } from 'react-redux';
import { selectAppState } from 'modules/appRedux/selectors';

export default function Content({ drawerWidth }) {
  const { response, performFetch } = useFetch(EMPLOYEES);
  useEffect(() => {
    performFetch();
  }, [performFetch]);
  const { loading, data } = response;
  const appState = useSelector(selectAppState);
  const filteredData = useMemo(() => {
    if (!Array.isArray(data)) return [];
    if (!appState.selectedJob) return data;
    return data.filter((Employee) => Employee.job === appState.selectedJob);
  }, [data, appState.selectedJob]);
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
      <Toolbar />
      <EmployeesCard loading={loading} data={filteredData} />
    </Box>
  );
}
