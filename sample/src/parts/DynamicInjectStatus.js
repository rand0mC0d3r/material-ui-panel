import { Box, Chip, Typography } from '@material-ui/core';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ToysIcon from '@material-ui/icons/Toys';
import { useEffect, useState } from 'react';
import MupStatus from '../components/MupStatus';
import MupStatusChild from '../components/MupStatusChild';

const AliveStatus = () => {
  const [injectElement, setInjectElement] = useState(false);
  const [elements, setElements] = useState();

  useEffect(() => {
    setElements([{ icon: <RadioButtonUncheckedIcon />, text: 'Toggle injection' }])
  }, []);

  useEffect(() => {
    if (injectElement) {
      setElements([{ icon: <RadioButtonCheckedIcon />, text: 'Toggle injection' }])
    } else {
      setElements([{ icon: <RadioButtonUncheckedIcon />, text: 'Toggle injection' }])
    }
  }, [injectElement]);

  return <>
    <MupStatus
      side='primary'
      minWidth={100}
      onClick={() => setInjectElement(!injectElement)}
      id='statusAlive'
      tooltip="Toggle injected status"
      // elements={elements}
    >
      <MupStatusChild icon={<RadioButtonUncheckedIcon />} text='Toggle injection' />
    </MupStatus>
    {injectElement && <MupStatus
      side='primary'
      id='dummyObject'
      tooltip="Dummy element"
    >
      <MupStatusChild icon={<ToysIcon />} text='Injected' />
    </MupStatus>}
    <MupStatus
      side='primary'
      id='dummyButton'
      tooltip="Dummy element"
    >
      <Chip size="small" variant="outlined" label="test..." />
    </MupStatus>
  </>
}

export default AliveStatus;
