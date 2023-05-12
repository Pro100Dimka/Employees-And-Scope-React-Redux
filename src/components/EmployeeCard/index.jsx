import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import { Avatar, CardContent, Typography } from '@mui/material';

const useStylesDiv = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  item: {
    padding: '10px',
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
    },
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis: '33.33%',
    },
  },
}));
const useStylesProfileCard = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '4px, 24px',
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
export default function EmployeesCard({ loading, data }) {
  const classes = useStylesDiv();
  const classesProfileCard = useStylesProfileCard();
  return (
    data && (
      <div className={classes.root}>
        {data.map((profile) => (
          <div key={profile.id} className={classes.item}>
            <div>
              <Card className={classesProfileCard.root}>
                <div className={classesProfileCard.avatar}>
                  <Avatar src={profile.avatar} alt={profile.title} />
                </div>
                <div>
                  <CardContent className={classesProfileCard.content}>
                    <Typography component="h5" variant="h5">
                      {profile.name}
                    </Typography>
                    <Typography variant="subtitle1">{profile.job}</Typography>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    )
  );
}
