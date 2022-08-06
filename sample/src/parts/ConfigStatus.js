import SettingsIcon from '@material-ui/icons/Settings'
import { Skeleton } from '@material-ui/lab'
import MupStatusChild from '../components/MupStatusChild'
import MupStatusPanel from '../components/MupStatusPanel'

const popover = <div style={{ width: '350px', padding: '16px', margin: '16px' }}>
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

export default () => <MupStatusPanel
  id='statusPopoverMenu'
  tooltip="Popover Menu external ..."
  popover={popover}
>
  <MupStatusChild icon={<SettingsIcon />} />
</MupStatusPanel>
