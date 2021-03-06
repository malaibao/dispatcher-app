import React from 'react';
import Card from './Card';
import styles from './styles';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const Day = ({
  day,
  dayNum,
  dayTasks,
  driver,
  week,
  updateTasksList,
  hasTaskConflict,
}) => {
  const classes = useStyles();

  const getTaskSlots = () => {
    let taskSlotGrids = [];

    for (let i = 0; i < dayTasks.tasks.length; i++) {
      let task = dayTasks.tasks[i];

      taskSlotGrids.push(
        <Card
          key={task.id}
          {...{
            task,
            updateTasksList,
            hasTaskConflict,
            week,
            day,
            dayNum,
            driver,
            i,
          }}
        />
      );
    }
    return taskSlotGrids;
  };

  return (
    <>
      <Paper
        className={classes.paper}
        style={{
          gridRow: '1',
          gridColumn: `${dayNum + 1}`,
          fontWeight: 'bold',
          paddingBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <span>{day}</span>
      </Paper>
      {dayTasks ? getTaskSlots() : null}
    </>
  );
};

export default Day;
