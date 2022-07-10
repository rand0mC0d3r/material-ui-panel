import { Popover } from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'
import { Skeleton } from '@material-ui/lab'
import { useState } from 'react'
import MupStatus from '../components/MupStatus'
import MupStatusChild from '../components/MupStatusChild'

export default () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [isToggled, setIsToggled] = useState(false)
  const open = Boolean(anchorEl)

  const onClose = () => setAnchorEl(null)

  return <>
    <MupStatus
      hasToggled={() => { setIsToggled(!isToggled) }}
      onClick={e => setAnchorEl(e.currentTarget)}
      id='statusPopoverMenu'
      tooltip="Popover Menu external ..."
    >
      <MupStatusChild icon={<SettingsIcon />} />
    </MupStatus>

    <Popover {...{ open, anchorEl, onClose }}
      anchorOrigin={{ vertical: isToggled ? 'top' : 'bottom', horizontal: 'left' }}
      transformOrigin={{ vertical: isToggled ? 'bottom' : 'top', horizontal: 'left' }}
    >
      <div style={{ width: '350px', padding: '16px', margin: '16px' }}>
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        In sed euismod nisi.
        Duis nec commodo augue.
        Curabitur fringilla
        <div style={{ marginTop: '16px', display: 'flex', gap: '8px', flexDirection: 'column' }}>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} />
          <Skeleton variant="rect" width={'100%'} height={200} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </div>
      </div>
    </Popover>
  </>
}
