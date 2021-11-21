import WifiIcon from '@material-ui/icons/Wifi';
import WifiOffIcon from '@material-ui/icons/WifiOff';
import { useEffect, useState } from 'react';
import MupStatus from '../components/MupStatus';

const AliveStatus = () => {
  const [elements, setElements] = useState();
  const [requestAttention, setRequestAttention] = useState(true);

  useEffect(() => {
    setElements([{ icon: <WifiIcon />, text: '123 KB/s' }])
    setRequestAttention(false)
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const number = Math.ceil(Math.random() * 100);
      if (number <= 80) {
        setElements([{ icon: <WifiIcon />, text: `12${number} KB/s` }])
        setRequestAttention(false)
      } else {
        setElements([{ icon: <WifiOffIcon />, text: '0 KB/s' }])
        setRequestAttention(true)
      }
  }, 500);
  return () => clearInterval(interval);
}, []);

  return <MupStatus
    side='left'
    minWidth={100}
    id='statusAlive'
    requestAttention={requestAttention}
    tooltip="Dynamic Online status"
    elements={elements}
  />
}

export default AliveStatus;
