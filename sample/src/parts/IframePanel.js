import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import MupPanel from '../components/MupPanel';

const IframePanel = () => {
  return <MupPanel
    noPadding
    id="iframePanel"
    title="IframePanel"
    subTitle="Sample sub-title text"
    icon={<LanguageOutlinedIcon />}
  >
    <iframe
      title="Random Wiki article"
      style={{
        filter: "opacity(0.5) grayscale(0.5)",
        width: "100%",
        height: "100%",
        border: '0px none'
      }}
      src="https://meet.google.com/"
      allow="camera;microphone"
    />
  </MupPanel>
}

export default IframePanel;
