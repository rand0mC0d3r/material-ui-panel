import CastConnectedIcon from '@material-ui/icons/CastConnected'
import MupStatus from '../components/MupStatus'
import MupStatusChild from '../components/MupStatusChild'


export default () => <MupStatus
  id="triggerChromeCastPanel"
  focusOnClick='chromecastPanel'
  tooltip="Toggle visibility for panel"
>
  <MupStatusChild icon={<CastConnectedIcon />} text={'Toggle Panel'} />
</MupStatus>
