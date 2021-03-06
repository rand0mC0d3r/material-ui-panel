import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import CachedIcon from '@material-ui/icons/Cached'
import { useState } from 'react'
import MupButton from '../components/MupButton'

export default () => {
  const [open, setOpen] = useState(false)
  const onClose = () => { setOpen(false)}

  return <>
    <MupButton
      onClick={() => setOpen(true)}
      icon={<CachedIcon />}
      id="sample"
      shortText="LOAD"
      tooltip="Default separator with action clicker" />
    <MupButton
      onClick={() => setOpen(true)}
      icon={<CachedIcon />}
      disabled
      id="sampleDisabled"
      shortText="LOAD"
      tooltip="Default separator with action clicker" />
    <Dialog {...{ open, onClose }}>
      <DialogTitle id="alert-dialog-title">{'Dummy Modal?'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Lorem Ipsum
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  </>
}
