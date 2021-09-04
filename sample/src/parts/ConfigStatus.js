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
      id='statusPopoverMenu'
      onClick={handleClick}
      tooltip="Popover Menu ..."
      elements={[{ icon: <SettingsIcon />}]}
    />
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
      transformOrigin={{ vertical: 'bottom', horizontal: 'center'}}
    >
      <div style={{ width: '350px', padding: '16px'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed euismod nisi. Duis nec commodo augue. Curabitur fringilla efficitur lacus, scelerisque convallis ex consequat at. Maecenas gravida volutpat porta. Integer viverra et sapien eget dictum. Sed fringilla pharetra bibendum. Cras gravida diam in orci hendrerit commodo. Integer eget lobortis leo, a pellentesque tortor. Fusce vel libero pulvinar, pellentesque neque et, aliquam mauris. Suspendisse at vulputate sapien, eget sodales elit. Integer eleifend blandit dolor, ac ultricies nibh consectetur ut. Suspendisse non dolor non mi placerat hendrerit eu sit amet turpis. Nunc sit amet dolor faucibus augue commodo tempus sed non velit. Donec vehicula, dui vitae vehicula convallis, massa mi eleifend nisl, ut lobortis erat odio ut quam. Pellentesque sit amet augue nec urna ultrices pulvinar. Sed in quam at est euismod pharetra.
      </div>
    </Popover>
  </>
}

export default ConfigStatus;
