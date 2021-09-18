import { Menu, MenuItem } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { useState } from 'react';
import MupStatus from '../components/MupStatus';

const ConfigStatus = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return <>
    <MupStatus
      id='statusSampleMenu'
      onClick={handleClick}
      tooltip="Open Sample menu..."
      elements={[{ icon: <SettingsIcon />}]}
    />
    {open && <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>}
  </>
}

export default ConfigStatus;
