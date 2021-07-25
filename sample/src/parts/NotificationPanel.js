import { Box, Button, Switch, Typography } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useEffect, useState } from 'react';
import MuiPanel from '../components/MuiPanel';

const NotificationPanel = () => {
  const [alerts, setAlerts] = useState(0);
  const [color, setColor] = useState('primary');

  useEffect(() => { console.log(alerts) }, [alerts]);

  const handleChange = (event) => {
    setColor(color === 'primary' ? 'secondary' : 'primary');
  };

  return <MuiPanel title="Notifications Panel"
    notificationCount={alerts} notificationColor={color}
    icon={<NotificationsIcon />}>
    <Box display="flex" flexDirection="column" style={{ gap: '16px' }}>
      <Box display="flex" flexDirection="row" justifyContent="space-between" style={{ gap: '16px' }}>
        <Typography variant="h6" color={color}>Alerts: {alerts}</Typography>
        <Box display="flex" flexDirection="row" style={{ gap: '16px' }} alignItems="center">
          <Typography variant="caption" color='primary'>Primary</Typography>
          <Switch
            checked={color !== 'primary'}
            onChange={handleChange}
            color={ color !== 'primary' ? 'secondary' : 'primary'}
          />
          <Typography variant="caption" color='secondary'>Secondary</Typography>
          </Box>
      </Box>
      <Button color={color} variant="outlined" onClick={() => { setAlerts(alerts => alerts + 1); }}>Add</Button>
      <Button color={color} variant="outlined" onClick={() => setAlerts(alerts => Math.max(0, alerts - 1)) }>Remove</Button>
    </Box>
  </MuiPanel>
}

export default NotificationPanel;
