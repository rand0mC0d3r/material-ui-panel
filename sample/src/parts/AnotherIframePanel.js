import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import MuiPanel from '../components/MuiPanel';

const IframePanel = () => {
  return <MuiPanel
    id="anotherIframePanel"
    title="AnotherIframePanel"
    subTitle="Sample sub-title text"
    icon={<LanguageOutlinedIcon />}
  >
    <iframe
      title="Random Wiki article"
      style={{ width: "100%", height: "100%", border: '0px none' }}
      src="https://material-ui.com/components/material-icons/"
    />
  </MuiPanel>
}

export default IframePanel;
