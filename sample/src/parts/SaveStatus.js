import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloudDoneOutlinedIcon from '@material-ui/icons/CloudDoneOutlined';
import CloudOffOutlinedIcon from '@material-ui/icons/CloudOffOutlined';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import { useEffect, useState } from 'react';
import MuiStatus from '../components/MuiStatus';

const SaveStatus = ({ }) => {
  const [open, setOpen] = useState(false);
  const [elements, setElements] = useState();

  useEffect(() => {
    handleReady()
  }, []);

  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); handleReady()};

  const handleAgree = () => {
    setElements([{icon: <CloudDoneOutlinedIcon />, text: 'Document saved'}])
  }
  const handleAgreeFail = () => {
    setElements([{icon: <CloudOffOutlinedIcon />, text: 'Document failed'}])
  }

  const handleReady = () => {
    setElements([{icon: <CloudOutlinedIcon />, text: 'Document ready'}])
  }

  return <>
    <MuiStatus
        id='statusSaveDoc'
        onClick={handleClickOpen}
      tooltip="Save Document?"
      elements={elements}>

      </MuiStatus>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
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
          <Button onClick={handleAgree} color="primary" autoFocus>
            Agree and Save
          </Button>
          <Button onClick={handleAgreeFail} color="secondary" autoFocus>
            Agree and Fail
          </Button>
        </DialogActions>
      </Dialog>
    </>
}

export default SaveStatus;
