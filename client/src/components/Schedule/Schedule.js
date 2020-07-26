import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import TimeList from './TimeList';
import Week from './Week';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Schedule = ({ tasksOfWeek }) => {
  const classes = useStyles();
  console.log('schedule', tasksOfWeek);
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <TimeList />
        </Grid>
        <Grid item xs={11}>
          <Week tasksOfWeek={tasksOfWeek} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Schedule;
