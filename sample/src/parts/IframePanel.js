import { Box, TextField } from '@material-ui/core';
import { ChromeReaderMode } from '@material-ui/icons';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import { useState } from 'react';
import MuiPanel from '../components/MuiPanel';

const IframePanel = () => {
  const [value, setValue] = useState('Sample persisten text...');
  const handleChange = event => { setValue(event.target.value) };

  return <MuiPanel
    id="iframePanel"
    title="IframePanel"
    subTitle="Sample sub-title text"
    icon={<LanguageOutlinedIcon />}
  >
    <iframe
      title="Random Wiki article"
      style={{ width: "100%", pointerEvents: 'none', height: "100%", border: '0px none' }}
      src="https://en.wikipedia.org/wiki/Special:Random"
    />
  </MuiPanel>
}

export default IframePanel;
