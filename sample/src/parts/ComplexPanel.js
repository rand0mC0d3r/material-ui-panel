import { Box, Button } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useEffect, useState } from 'react';
import MuiPanel from '../components/MuiPanel';

const NotificationPanel = () => {
  const [alerts, setAlerts] = useState(0);

  useEffect(() => { console.log(alerts) }, [alerts]);

  return <MuiPanel title="Complex panel long long text with many details" subTitle="Sample sub-title text" icon={<ChromeReaderModeIcon />} initialSide="left">
    <Box display="flex" flexDirection="column" style={{ gap: "16px" }}>
      <div>
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} />
      </div>
      <div>
        <Skeleton variant="rect" width={'100%'} height={400} />
      </div>
      <div>
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" />
      </div>
      <div>
        <textarea></textarea>
      </div>
    </Box>
  </MuiPanel>
}

export default NotificationPanel;
