import { Box, Button } from '@material-ui/core';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Skeleton from '@material-ui/lab/Skeleton';
import { useState } from 'react';
import MuiPanel from '../components/MuiPanel';

const alertBox = <Box display="flex" style={{ gap: '8px'}}>
    <AddAlertIcon />
    <div style={{ flex: '1 1 auto'}}>
      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
      <Skeleton animation="wave" height={10} width="80%" />
    </div>
  </Box>

const NotificationPanel = () => {
  const [alerts, setAlerts] = useState(0);
  return <MuiPanel title="Notifications Panel" notificationCount={alerts} icon={<NotificationsIcon />} initialSide="left">
    <Box display="flex" flexDirection="column" style={{ gap: '16px'}}>
      {alertBox}
      {alertBox}
      {alertBox}
      {alertBox}
      Alerts: {alerts}
      <Button variant="outlined" onClick={() => setAlerts(alerts+1) }>Add</Button>
      <Button variant="outlined" onClick={() => setAlerts(Math.max(0, alerts-1)) }>Remove</Button>
    </Box>
  </MuiPanel>
}

export default NotificationPanel;
