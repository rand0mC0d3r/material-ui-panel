import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
import CloudDoneOutlinedIcon from '@material-ui/icons/CloudDoneOutlined';
import CloudOffOutlinedIcon from '@material-ui/icons/CloudOffOutlined';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import { useEffect, useState } from 'react';
import MuiButton from '../components/MuiButton';

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
    <MuiButton onClick={() => setOpen(true)} icon={ <CachedIcon />} id="sample" shortText="LOAD" tooltip="Default separator with act clicker" />
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

export default SaveStatus;
