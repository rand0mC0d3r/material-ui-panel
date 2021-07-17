import NotificationsIcon from '@material-ui/icons/Notifications';
import Skeleton from '@material-ui/lab/Skeleton';
import MuiPanel from '../components/MuiPanel';

function NotificationPanel() {
  return <MuiPanel title="Notifications Panel" icon={<NotificationsIcon />} initialSide="left">
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" />
    </MuiPanel>;
}

export default NotificationPanel;
