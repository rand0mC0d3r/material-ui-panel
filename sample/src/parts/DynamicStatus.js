import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import CloudDoneOutlinedIcon from '@material-ui/icons/CloudDoneOutlined'
import CloudOffOutlinedIcon from '@material-ui/icons/CloudOffOutlined'
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined'
import { useEffect, useState } from 'react'
import MupStatus from '../components/MupStatus'

const SaveStatus = () => {
  const [open, setOpen] = useState(false)
  const [elements, setElements] = useState()
  const [requestAttention, setRequestAttention] = useState(false)

  useEffect(() => {
    handleReady()
  }, [])

  const handleClickOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false); handleReady()}

  const handleAgree = () => {
    setElements([{ icon: <CloudDoneOutlinedIcon />, text: 'Status ADD' }])
    setRequestAttention(true)
  }

  const handleAgreeTwo = () => {
    setElements([
      { icon: <CloudDoneOutlinedIcon />, text: `Status ADD ${Math.random().toString(36).substr(2, 5)}` },
      { icon: <CloudDoneOutlinedIcon />, text: `Status ADD 2 ${Math.random().toString(36).substr(2, 5)}` }
    ])
    setRequestAttention(true)
  }

  const handleAgreeFail = () => {
    setElements([{ icon: <CloudOffOutlinedIcon />, text: 'Status DEL' }])
    setRequestAttention(false)
  }

  const handleReady = () => {
    setElements([{ icon: <CloudOutlinedIcon />, text: 'Status DYN' }])
  }

  return <>
    <MupStatus
      id='statusSaveDoc'
      onClick={handleClickOpen}
      tooltip="Add dynamic status element?"
      elements={elements}
    />
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle id="alert-dialog-title">{'Add a dynamic status element?'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Want to add or remove a dynamic status?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Exit
        </Button>
        <Button onClick={handleAgree} color="primary">
          Add
        </Button>
        <Button onClick={handleAgreeTwo} color="primary">
          Add 2
        </Button>
        <Button onClick={handleAgreeFail} color="secondary">
          Remove all
        </Button>
      </DialogActions>
    </Dialog>

    {requestAttention && <MupStatus
      id='statusDynamic'
      onClick={() => { }}
      tooltip="Add dynamic status?"
      elements={[{ icon: <CloudDoneOutlinedIcon />, text: 'Demo' }]}
    />}
  </>
}

export default SaveStatus
