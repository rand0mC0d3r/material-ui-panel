/* eslint-disable import/no-anonymous-default-export */
import { MenuItem, Popover,  MenuList } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MupStatus from '../components/MupStatus';
import MupStatusChild from '../components/MupStatusChild';
import { useState } from 'react';

export default () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const onClose = () => setAnchorEl(null)

  return <>
    <MupStatus
      style={{ position: 'relative' }}
      id='statusSampleMenu'
      tooltip="Open Sample menu..."
    >
      <MupStatusChild icon={<ListAltIcon />} text="Menu" />
    </MupStatus>

    <Popover {...{ open, anchorEl, onClose }}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <MenuList id="menu-list-grow" onKeyDown={() => { }}>
        <MenuItem onClick={() => { }}>Profile</MenuItem>
        <MenuItem onClick={() => { }}>My account</MenuItem>
        <MenuItem onClick={() => { }}>Logout</MenuItem>
      </MenuList>
    </Popover>
  </>
}