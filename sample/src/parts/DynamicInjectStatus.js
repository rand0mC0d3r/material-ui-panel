import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ToysIcon from '@material-ui/icons/Toys';
import { useEffect, useState } from 'react';
import MupStatus from '../components/MupStatus';

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
      elements={elements}
    />
    {injectElement && <MupStatus
      side='primary'
      minWidth={100}
      id='dummyObject'
      tooltip="Dummy element"
      elements={[{ icon: <ToysIcon />, text: 'Injected' }]}
    />}
  </>
}

export default AliveStatus;
