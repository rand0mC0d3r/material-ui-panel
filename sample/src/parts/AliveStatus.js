/* eslint-disable import/no-anonymous-default-export */
import WifiIcon from '@material-ui/icons/Wifi';
import WifiOffIcon from '@material-ui/icons/WifiOff';
import { useEffect, useState } from 'react';
import MupStatus from '../components/MupStatus';
import MupStatusChild from '../components/MupStatusChild';

export default () => {
  const [speed, setSpeed] = useState(123);
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const number = Math.ceil(Math.random() * 100);
      setHighlight(number < 30)
      setSpeed(number);
  }, 500);
  return () => clearInterval(interval);
}, []);

  return <MupStatus
    style={{ minWidth: '100px' }}
    id='statusAlive'
    highlight={highlight}
    tooltip="Dynamic Online status"
  >
    <MupStatusChild icon={speed > 30 ? <WifiIcon /> : <WifiOffIcon />} text={`${speed} KB/s`} />
  </MupStatus>
}
