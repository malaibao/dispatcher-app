import React, { useState } from 'react';
import AlertTag from '../layout/AlertTag';
import DeleteDialog from './DeleteDialog';
import styles from './styles';
import { dayObj, jobTypes } from '../../helpers/constantObj';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles(styles);

const UpdateForm = ({
  changeInput,
  changeTimeInput,
  handleSubmit,
  handleReplace,
  handleDelete,
  handleCancel,
  driver,
  state,
  error,
  timeError,
  onClose,
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDeleteDialog(false);
  };

  return (
    <div style={modalStyle} className={classes.formPaper}>
      <h2 className={classes.titleMargin} id='simple-modal-title'>
        Task Details
      </h2>
      <form onSubmit={handleSubmit}>
        {timeError && <AlertTag openAlert={timeError} onClose={onClose} />}

        <TextField
          className={classes.inputMargin}
          id='filled-read-only-input'
          label='Driver'
          defaultValue={driver}
          InputProps={{
            readOnly: true,
          }}
          variant='filled'
        />
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
          onChange={changeTimeInput}
        />
        <TextField
          required
          className={`${classes.inputMargin} ${classes.smallerWidth}`}
          id='end-time'
          name='endTime'
          label='End Time'
          type='number'
          InputProps={{ inputProps: { min: 1, max: 24 } }}
          InputLabelProps={{
            shrink: true,
          }}
          value={state.endTime}
          onChange={changeTimeInput}
        />
        <br />
        <TextField
          required
          id='job-type'
          select
          label='Job Type'
          name='type'
          value={state.type}
          onChange={changeInput}
          className={`${classes.inputMargin} ${classes.smallerWidth}`}
        >
          {jobTypes.map((option) => (
            <MenuItem
              key={option}
              value={option}
              selected={`${option === state.type ? 'selected' : null}`}
            >
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
          value={state.location}
        />
        <br />
        {!error && (
          <>
            <Button
              color='primary'
              variant='outlined'
              className={classes.inputMargin}
              type='submit'
              startIcon={<EditIcon />}
            >
              Update
            </Button>
            <Button
              color='secondary'
              variant='outlined'
              className={classes.inputMargin}
              onClick={() => setOpenDeleteDialog(true)}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <DeleteDialog
              open={openDeleteDialog}
              handleClose={handleCloseDialog}
              handleDelete={handleDelete}
            />
          </>
        )}

        {error && (
          <>
            <Typography className={classes.inputMargin}>
              Modified task has time conflict with existing task(s). Would you
              like to replace the existing conflicted task(s) and keep the
              modified task?{' '}
            </Typography>
            <Button
              color='primary'
              variant='outlined'
              className={classes.inputMargin}
              onClick={handleReplace}
              startIcon={<EditIcon />}
            >
              Replace
            </Button>
            <Button
              variant='outlined'
              className={classes.inputMargin}
              onClick={handleCancel}
              startIcon={<CloseIcon />}
            >
              Cancel
            </Button>
          </>
        )}
      </form>
    </div>
  );
};

export default UpdateForm;
