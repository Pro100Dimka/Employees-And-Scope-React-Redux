import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { CircularProgress, Grid } from '@mui/material';
import NavigationItem from 'components/NavigationItem';

export default function DrawerNav({ data, loading }) {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {!data || loading ? (
          <Grid container>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <CircularProgress />
            </Grid>
          </Grid>
        ) : (
          data.map((job, index) => <NavigationItem job={job} />)
        )}
      </List>
      <Divider />
    </div>
  );
}
