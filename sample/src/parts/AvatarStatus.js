import { useTheme } from '@material-ui/core/styles'
import MupStatus from '../components/MupStatus'
import MupStatusChild from '../components/MupStatusChild'

export default () => {
  const theme = useTheme()

  return <MupStatus {...{ id: 'avatarStatus' }}
    style={{ borderRight: `1px solid ${theme.palette.divider}`, minWidth: '40px' }}
  >
    <MupStatusChild mask image='https://picsum.photos/32/32' />
  </MupStatus>
}
