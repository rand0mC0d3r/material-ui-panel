import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import CloudDoneOutlinedIcon from '@material-ui/icons/CloudDoneOutlined';
import CloudOffOutlinedIcon from '@material-ui/icons/CloudOffOutlined';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import { useEffect, useState } from 'react';
import MupStatus from '../components/MupStatus';

const SaveStatus = () => {
  const [open, setOpen] = useState(false);
  const [elements, setElements] = useState();
  const [requestAttention, setRequestAttention] = useState(true);

  useEffect(() => {
    handleReady()
  }, []);

  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); handleReady()};

  const handleAgree = () => {
    setElements([{ icon: <CloudDoneOutlinedIcon />, text: 'Document saved' }])
    setRequestAttention(false)
  }
  const handleAgreeFail = () => {
    setElements([{ icon: <CloudOffOutlinedIcon />, text: 'Document failed' }])
    setRequestAttention(true)
  }

  const handleReady = () => {
    setElements([{ icon: <CloudOutlinedIcon />, text: 'Document ready' }])
    setRequestAttention(false)
  }

  return <>
    <MupStatus
      id='statusSaveDoc'
      requestAttention={requestAttention}
      onClick={handleClickOpen}
      tooltip="Save Document?"
      elements={elements}
    />
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle id="alert-dialog-title">{"Save changes made to document?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Your document is not yet synchronized with the server. Do you want to save your changes?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Don't Save
        </Button>
        <Button onClick={handleAgree} color="primary">
          Agree and Save
        </Button>
        <Button onClick={handleAgreeFail} color="secondary">
          Agree and Fail
        </Button>
      </DialogActions>
    </Dialog>
  </>
}

export default SaveStatus;
