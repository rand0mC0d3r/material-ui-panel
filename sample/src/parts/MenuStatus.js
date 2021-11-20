import { MenuItem } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MupStatus from '../components/MupStatus';

const ConfigStatus = () => <MupStatus
    asButton
    asMenu={<>
      <MenuItem onClick={() => { }}>Profile</MenuItem>
      <MenuItem onClick={() => { }}>My account</MenuItem>
      <MenuItem onClick={() => { }}>Logout</MenuItem>
    </>}
    style={{ position: 'relative' }}
    id='statusSampleMenu'
    tooltip="Open Sample menu..."
    elements={[{ icon: <ListAltIcon />, text: 'Config Menu' }]}
  />

export default ConfigStatus;
