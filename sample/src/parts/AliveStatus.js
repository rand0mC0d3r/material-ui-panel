/* eslint-disable import/no-anonymous-default-export */
import WifiIcon from '@material-ui/icons/Wifi';
import WifiOffIcon from '@material-ui/icons/WifiOff';
import { useEffect, useState } from 'react';
import MupStatus from '../components/MupStatus';
import MupStatusChild from '../components/MupStatusChild';

const breakpoint = 50;

export default () => {
  const [speed, setSpeed] = useState(123);
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const number = Math.ceil(Math.random() * 250);
      setHighlight(number < breakpoint)
      setSpeed(number);
  }, 500);
  return () => clearInterval(interval);
}, []);

  return <MupStatus {...{ highlight }}
    secondary
    style={{ minWidth: '100px' }}
    id='statusAlive'
    tooltip={`Server connection bandwidth ${speed} KB/s`}
  >
    <MupStatusChild icon={highlight ? <WifiOffIcon /> :  <WifiIcon />} text={`${speed} KB/s`} />
  </MupStatus>
}
