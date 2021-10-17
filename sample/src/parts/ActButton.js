import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
import { useState } from 'react';
import MupButton from '../components/MupButton';

const ActButton = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => { setOpen(false);};

  return <>
    <MupButton
      onClick={() => setOpen(true)}
      icon={<CachedIcon />}
      id="sample"
      shortText="LOAD"
      tooltip="Default separator with action clicker" />
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle id="alert-dialog-title">{"Dummy Modal?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Lorem Ipsum
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  </>
}

export default ActButton;
