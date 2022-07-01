import { MenuItem, MenuList } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MupStatus from '../components/MupStatus';

const ConfigStatus = () => <MupStatus
    asMenu={<MenuList id="menu-list-grow" onKeyDown={() => { }}>
      <MenuItem onClick={() => { }}>Profile</MenuItem>
      <MenuItem onClick={() => { }}>My account</MenuItem>
      <MenuItem onClick={() => { }}>Logout</MenuItem>
    </MenuList>}
    style={{ position: 'relative' }}
    id='statusSampleMenu'
    tooltip="Open Sample menu..."
    elements={[{ icon: <ListAltIcon />, text: 'Config Menu' }]}
  />

export default ConfigStatus;
