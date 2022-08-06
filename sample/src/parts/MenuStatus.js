/* eslint-disable no-unused-vars */
import { MenuItem, MenuList, Popover } from '@material-ui/core'
import ListAltIcon from '@material-ui/icons/ListAlt'
import { useState } from 'react'
import MupStatus from '../components/MupStatus'
import MupStatusChild from '../components/MupStatusChild'
import MupStatusPanel from '../components/MupStatusPanel'

export default () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [isToggled, setIsToggled] = useState(false)
  const open = Boolean(anchorEl)

  const onClose = () => setAnchorEl(null)

  return <>
    {/* <MupStatus
      hasToggled={() => { setIsToggled(!isToggled) }}
      id='statusSampleMenu'
      onClick={e => setAnchorEl(e.currentTarget)}
      tooltip="Open Sample menu..."
    >
      <MupStatusChild icon={<ListAltIcon />} text="Menu" />
    </MupStatus>

    <Popover {...{ open, anchorEl, onClose }}
      anchorOrigin={{ vertical: isToggled ? 'top' : 'bottom', horizontal: 'left' }}
      transformOrigin={{ vertical: isToggled ? 'bottom' : 'top', horizontal: 'left' }}
    >
      <MenuList id="menu-list-grow" onKeyDown={() => { }}>
        <MenuItem onClick={() => { }}>Profile</MenuItem>
        <MenuItem onClick={() => { }}>My account</MenuItem>
        <MenuItem onClick={() => { }}>Logout</MenuItem>
      </MenuList>
    </Popover> */}

    <MupStatusPanel


      id='statusSampleMenu'
      onClick={e => setAnchorEl(e.currentTarget)}
      tooltip="Open Sample menu..."
      popover={<MenuList id="menu-list-grow" onKeyDown={() => { }}>
        <MenuItem onClick={() => { }}>Profile</MenuItem>
        <MenuItem onClick={() => { }}>My account</MenuItem>
        <MenuItem onClick={() => { }}>Logout</MenuItem>
      </MenuList>}
    >
      <MupStatusChild icon={<ListAltIcon />} text="Menu" />
    </MupStatusPanel>
  </>
}
