import { Avatar, Popover } from '@material-ui/core'
import { useState } from 'react'
import MupStatus from '../components/MupStatus'

export default () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [isToggled, setIsToggled] = useState(false)
  const open = Boolean(anchorEl)

  const onClose = () => setAnchorEl(null)

  return <>
    <MupStatus
      id='avatars'
      tooltip="Preview last loaded entries"
      hasToggled={() => { setIsToggled(!isToggled) }}
      onClick={e => setAnchorEl(e.currentTarget)}
      style={{ minWidth: '32px' }}
    >
      <div style={{ display: 'flex', gap: '0px' }}>
        {['34', '55', '69'].map((image, i) => <img
          src={`https://picsum.photos/id/${image}/20/20`}
          key={image}
          alt="Preview project avatar"
          style={{ borderRadius: '50%', marginLeft: i > 0 ? '-8px' : '0px' }}
        />)}
        <Avatar style={{ fontSize: '12px', width: '20px', height: '20px', marginLeft: '-8px' }}>5</Avatar>
      </div>
    </MupStatus>

    <Popover {...{ open, anchorEl, onClose }}
      anchorOrigin={{ vertical: isToggled ? 'top' : 'bottom', horizontal: 'left' }}
      transformOrigin={{ vertical: isToggled ? 'bottom' : 'top', horizontal: 'left' }}
    >
      <div style={{ width: '350px', display: 'flex', padding: '16px', margin: '16px', gap: '16px' }}>
        {['34', '55', '69'].map(image => <img
          src={`https://picsum.photos/id/${image}/80/80`}
          key={image}
          alt="Preview project avatar"
          style={{ borderRadius: '50%' }}
        />)}
      </div>
    </Popover>

  </>
}
