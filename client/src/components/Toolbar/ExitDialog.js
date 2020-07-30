import React from 'react';
import styles from './styles';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const ExitDialog = ({ open, handleClose, handleContinue }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{'Exit?'}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Are you sure you to exit?
        </DialogContentText>

        <Button
          variant='outlined'
          color='primary'
          onClick={handleClose}
          startIcon={<DoneIcon />}
          autoFocus
        >
          Yes
        </Button>
        <Button
          className={classes.inputMargin}
          variant='outlined'
          onClick={() => handleContinue(false)}
          color='secondary'
          startIcon={<CloseIcon />}
        >
          No
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ExitDialog;
