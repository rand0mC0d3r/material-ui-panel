import { MenuItem, MenuList } from '@material-ui/core'
import ListAltIcon from '@material-ui/icons/ListAlt'
import MupStatusChild from '../components/MupStatusChild'
import MupStatusPanel from '../components/MupStatusPanel'

export default () => <MupStatusPanel
  id='statusSampleMenu'
  tooltip="Open Sample menu..."
  popover={<MenuList id="menu-list-grow" onKeyDown={() => { }}>
    <MenuItem onClick={() => { }}>Profile</MenuItem>
    <MenuItem onClick={() => { }}>My account</MenuItem>
    <MenuItem onClick={() => { }}>Logout</MenuItem>
  </MenuList>}
>
  <MupStatusChild icon={<ListAltIcon />} text="Menu" />
</MupStatusPanel>
