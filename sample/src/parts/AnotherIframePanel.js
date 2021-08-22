import FilledInput from '@material-ui/core/FilledInput';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import { useState } from 'react';
import MupPanel from '../components/MupPanel';

const IframePanel = () => {
  const [url, setUrl] = useState("https://material-ui.com/components/material-icons/");

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  return <MupPanel
    id="anotherIframePanel"
    title="AnotherIframePanel"
    subTitle="Sample sub-title text"
    icon={<LanguageOutlinedIcon />}
  >
    <FilledInput fullWidth id="component-filled" value={url} onChange={handleChange} />

    <iframe
      title="Random Wiki article"
      style={{ width: "100%", height: "95%", border: '0px none' }}
      src={url}
    />
  </MupPanel>
}

export default IframePanel;
