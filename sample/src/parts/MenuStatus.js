import { Popover } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { useState } from 'react';
import MupStatus from '../components/MupStatus';

const ConfigStatus = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return <>
    <MupStatus
      id='statusSaveDoc'
      onClick={handleClick}
      tooltip="Save Document?"
      elements={[{ icon: <SettingsIcon />}]}
    />
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      The content of the Popover.
    </Popover>
  </>
}

export default ConfigStatus;
