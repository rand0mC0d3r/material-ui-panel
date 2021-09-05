import { Box, Button, Switch, Typography } from '@material-ui/core';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { useEffect, useState } from 'react';
import MupPanel from '../components/MupPanel';
import MupStatus from '../components/MupStatus';

const NotificationPanel = ({ identifier = 'NotificationsPanel', title = "Notifications Panel", icon = <AddIcCallIcon /> }) => {
  const [alerts, setAlerts] = useState(0);
  const [color, setColor] = useState('primary');
  const [auto, setAuto] = useState(false);

  const handleChangeAuto = (event) => {
    setAuto(!auto);
  };

  const handleChange = (event) => {
    setColor(color === 'primary' ? 'secondary' : 'primary');
  };

  const handleDismissAlerts = () => {
    setAlerts(0);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (auto) {
        setAlerts(alerts => alerts + 1);
      }
    }, 1000);
    return () => timer && clearInterval(timer);
  }, [auto])

  return <>
    {alerts > 0 && <MupStatus
      id="notifStatus"
      focusOnClick={identifier}
      tooltip={`${alerts} ${title}`}
      requestAttention={color !== 'primary'}
      elements={[{ icon: <NotificationsActiveIcon />, text: `${alerts} ${title.substr(0,10)}...` }]} />}
    <MupPanel
    id={identifier}
      title={title}
      alertsAcknowledged={handleDismissAlerts}
    notifications={{color, count: alerts}}
    icon={icon}>
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
        <Box display="flex" flexDirection="row" justifyContent="space-between" style={{ gap: '16px' }}>
          <Typography variant="h6" color='textPrimary'>Automated?</Typography>
          <Box display="flex" flexDirection="row" style={{ gap: '16px' }} alignItems="center">
            <Typography variant="caption" color='textPrimary'>Not</Typography>
            <Switch
              checked={auto}
              color={ color !== 'primary' ? 'secondary' : 'primary'}
              onChange={handleChangeAuto}
            />
            <Typography variant="caption" color='textPrimary'>Every 1s</Typography>
            </Box>
        </Box>
        <Button color={color} variant="outlined" onClick={() => { setAlerts(alerts => alerts + 1); }}>Add</Button>
        <Button color={color} variant="outlined" onClick={() => setAlerts(alerts => Math.max(0, alerts - 1)) }>Subtract</Button>
        <Button color={color} variant="outlined" onClick={() => setAlerts(0) }>To 0</Button>
      </Box>
    </MupPanel>
    </>
}

export default NotificationPanel;
