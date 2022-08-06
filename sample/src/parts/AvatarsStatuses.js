import { Avatar } from '@material-ui/core'
import MupStatusPanel from '../components/MupStatusPanel'

const popover = <div style={{ width: '350px', display: 'flex', padding: '16px', margin: '16px', gap: '16px' }}>
  {['34', '55', '69'].map(image => <img
    src={`https://picsum.photos/id/${image}/80/80`}
    key={`${image}_thumbnail`}
    alt="Preview project avatar"
    style={{ borderRadius: '50%', height: '80px' }}
  />)}
</div>

export default () => <MupStatusPanel id='avatars' {...{ popover }}>
  <div style={{ display: 'flex', gap: '0px' }}>
    {['34', '55', '69'].map((image, i) => <img
      src={`https://picsum.photos/id/${image}/20/20`}
      key={`${image}_preview`}
      alt="Preview project avatar"
      style={{ borderRadius: '50%', marginLeft: i > 0 ? '-8px' : '0px' }}
    />)}
    <Avatar style={{ fontSize: '12px', width: '20px', height: '20px', marginLeft: '-8px' }}>5</Avatar>
  </div>
</MupStatusPanel>
