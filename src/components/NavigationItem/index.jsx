import React, { useCallback } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { filterEmployees } from 'modules/appRedux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectAppState } from 'modules/appRedux/selectors';

export default function NavigationItem({ job }) {
  const dispatch = useDispatch();
  const appState = useSelector(selectAppState);
  const action = useCallback(() => {
    dispatch(filterEmployees(job.jobId));
  }, [job.jobId]);
  return (
    <ListItem key={job.id} disablePadding>
      <ListItemButton
        onClick={action}
        selected={job.jobId === appState.selectedJob}
      >
        <ListItemText primary={job.title} />
      </ListItemButton>
    </ListItem>
  );
}
