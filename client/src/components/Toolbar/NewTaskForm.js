import React, { useState } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import { dayObj, jobTypes } from '../../helpers/constantObj';

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  smallerWidth: {
    width: '6rem',
  },
  largerWidth: {
    minWidth: '10rem',
  },
  inputMargin: {
    margin: theme.spacing(2),
  },
}));

const NewTaskForm = ({
  drivers,
  driver,
  selectedWeek,
  hasTaskConflict,
  updateTasksList,
}) => {
  const [state, setState] = useState({
    driver,
    week: selectedWeek,
    day: 1,
    startTime: 0,
    endTime: 1,
    location: '',
    jobType: '',
  });
  const [error, setError] = useState(false);

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeInput = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setState((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      hasTaskConflict(
        state.driver,
        state.week,
        state.day,
        state.startTime,
        state.endTime
      )
    ) {
      setError(true);
    } else {
      try {
        await submitPostRequest();
        setOpen(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleOverwrite = async () => {
    try {
      await submitPostRequest();
      setError(false);
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const submitPostRequest = async () => {
    const res = await axios.post('/tasks', state);

    if (res.status === 200) {
      updateTasksList(res.data);
      setState((prev) => ({
        ...prev,
        driver: '',
        week: 1,
        day: 1,
        startTime: 0,
        endTime: 1,
        location: '',
        jobType: '',
      }));
      return Promise.resolve();
    } else {
    }
    return Promise.reject(new Error('Problem submitting request'));
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id='simple-modal-title'>Task Form</h2>
      <form className={classes.container} onSubmit={handleSubmit}>
        <TextField
          required
          id='driver'
          select
          label='Driver'
          name='driver'
          value={state.driver}
          onChange={changeInput}
          className={`${classes.inputMargin} ${classes.largerWidth}`}
        >
          {drivers.map((driver) => (
            <MenuItem key={driver} value={driver}>
              {driver}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <TextField
          required
          className={`${classes.inputMargin} ${classes.smallerWidth}`}
          id='week'
          label='Week'
          name='week'
          type='number'
          InputProps={{ inputProps: { min: 1, max: 52 } }}
          InputLabelProps={{
            shrink: true,
          }}
          value={state.week}
          onChange={changeInput}
        />
        <TextField
          required
          id='day'
          select
          label='Day'
          name='day'
          value={state.day}
          onChange={changeInput}
          className={`${classes.inputMargin} ${classes.largerWidth}`}
        >
          {Object.keys(dayObj).map((day) => (
            <MenuItem key={day} value={dayObj[day]}>
              {day}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <TextField
          required
          className={`${classes.inputMargin} ${classes.smallerWidth}`}
          id='startTime'
          name='startTime'
          label='Start Time'
          type='number'
          InputProps={{ inputProps: { min: 0, max: 23 } }}
          InputLabelProps={{
            shrink: true,
          }}
          value={state.startTime}
          onChange={changeInput}
        />
        <TextField
          required
          className={`${classes.inputMargin} ${classes.smallerWidth}`}
          id='end-time'
          name='endTime'
          label='Start Time'
          type='number'
          InputProps={{ inputProps: { min: 1, max: 24 } }}
          InputLabelProps={{
            shrink: true,
          }}
          value={state.endTime}
          onChange={changeInput}
        />
        <br />
        <TextField
          required
          id='job-type'
          select
          label='Job Type'
          name='jobType'
          value={state.jobType}
          onChange={changeInput}
          className={`${classes.inputMargin} ${classes.smallerWidth}`}
        >
          {jobTypes.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <TextField
          required
          name='location'
          id='location'
          label='Location'
          onChange={changeInput}
          className={classes.inputMargin}
        />
        <br />
        {!error && (
          <Button
            color='primary'
            variant='outlined'
            className={classes.inputMargin}
            type='submit'
          >
            Submit
          </Button>
        )}
        {error && (
          <>
            <Typography className={classes.inputMargin}>
              New task has time conflicts with existing task(s). Would you like
              to overwrite?{' '}
            </Typography>
            <Button
              color='primary'
              variant='outlined'
              className={classes.inputMargin}
              onClick={handleOverwrite}
            >
              Overwrite
            </Button>
          </>
        )}
      </form>
    </div>
  );

  return (
    <div>
      {/* <button type='button' onClick={handleOpen}> */}
      <Button variant='contained' color='primary' onClick={handleOpen}>
        Create Task
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
};

export default NewTaskForm;