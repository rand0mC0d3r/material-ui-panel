import { Box, Button } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useEffect, useState } from 'react';
import MuiPanel from '../components/MuiPanel';

const NotificationPanel = () => {
  const [alerts, setAlerts] = useState(0);

  useEffect(() => { console.log(alerts) }, [alerts]);

  return <MuiPanel title="Notifications Panel"
    notificationCount={alerts}
    icon={<NotificationsIcon />}>
    <Box display="flex" flexDirection="column" style={{ gap: '16px' }}>
      Alerts: {alerts}
      <Button variant="outlined" onClick={() => { setAlerts(alerts => alerts + 1); }}>Add</Button>
      <Button variant="outlined" onClick={() => setAlerts(alerts => Math.max(0, alerts - 1)) }>Remove</Button>
    </Box>
  </MuiPanel>
}

export default NotificationPanel;
