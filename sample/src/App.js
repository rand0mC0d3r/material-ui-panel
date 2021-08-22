import { Box } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { AmpStories, FormatIndentIncrease, GitHub } from '@material-ui/icons';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import BathtubIcon from '@material-ui/icons/Bathtub';
import CameraIcon from '@material-ui/icons/Camera';
import CastConnectedIcon from '@material-ui/icons/CastConnected';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Skeleton from '@material-ui/lab/Skeleton';
import { useMemo, useState } from 'react';
import './App.css';
import { MuiPanelProvider } from './components/MuiPanelStore';
import MupButton from './components/MupButton';
import MupContent from './components/MupContent';
import MupPanel from './components/MupPanel';
import MupStatus from './components/MupStatus';
import ActButton from './parts/ActButton';
import AnotherIframePanel from './parts/AnotherIframePanel';
import ComplexPanel from './parts/ComplexPanel';
import GalleryStatus from './parts/GalleryStatus';
import IframePanel from './parts/IframePanel';
import NotificationPanel from './parts/NotificationPanel';
import SaveStatus from './parts/SaveStatus';
import ToggleTheme from './parts/ToggleTheme';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [debugMode, setDebugMode] = useState(false);
  const [collapseMode, setCollapseMode] = useState(true);
  const [markerColor, setMarkerColor] = useState('primary');
  const [inverseMarkers, setInverseMarkers] = useState(false);
  const theme = useMemo(() => createTheme({ palette: { type: darkMode ? 'dark' : 'light' } }), [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleDebugMode = () => setDebugMode(!debugMode);
  const toggleCollapseMode = () => setCollapseMode(!collapseMode);
  const toggleInverseMarkers = () => setInverseMarkers(!inverseMarkers);

  return <>
    <ThemeProvider {...{ theme }}>
      <MuiPanelProvider initialSide='left' debugMode={debugMode} markerColor={markerColor} inverseMarkers={inverseMarkers} showCollapseButton={collapseMode}>

        <ToggleTheme {...{ toggleDebugMode, debugMode, toggleDarkMode, darkMode, toggleCollapseMode, collapseMode, toggleInverseMarkers, inverseMarkers, markerColor, setMarkerColor }} />
        {/* <MupButton id="logoAndCustomColorAndTooltip" tooltip="Custom Color" icon={<LinkedInIcon style={{ color: green[500] }} />} />
        <MupButton id="logoAndPaletteColorAndText" icon={<GitHub color="secondary" />} shortText="GIT" />
        <MupButton id="logoAndCssColorAndTooltipAndText" tooltip="Time for a bath..." icon={<BathtubIcon style={{ color: 'orange' }} />} shortText="WASH" />

        <ActButton />

        <NotificationPanel />
        <NotificationPanel icon={<AddToHomeScreenIcon />} identifier="notificationsPanel2" title="Other Panel Triggering notifications" /> */}

        <ComplexPanel />
        <IframePanel/>
        <AnotherIframePanel />
{/*
        <MupPanel placement="bottom" id="randomText44" title="Lorem Ipsum Panel" icon={<FormatIndentIncrease />}>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`}
        </MupPanel>

        <MupPanel id="chromecastPanel" title="Cast Icon" icon={<CastConnectedIcon />}>
          <Box display="flex" flexDirection="column" style={{ gap: '8px'}}>
            <Skeleton variant="rect" animation="wave" height={10} />
            <Skeleton variant="rect" animation="wave" height={20}  />
            <Skeleton variant="rect" animation="wave" height={10} width="80%" />
            <iframe
              title="Random Wiki article"
              style={{ width: "100%", height: "600px", border: '1px dotted #CCC', borderRadius: '8px' }}
              src={'https://en.wikipedia.org/wiki/Chromecast'}
            />
            <Skeleton variant="rect" animation="wave" height={25} />
            <Skeleton variant="rect" animation="wave" height={15}  />
          </Box>
        </MupPanel>

        <MupPanel id="tralalaPanel" title="Sub Demo Panel TextMock" iconInHeader={false} hint="No icon big guy..." icon={<AmpStories />}>
          <Skeleton variant="rect" width={'100%'} height={300} />
        </MupPanel> */}

        <MupStatus id="statusA" side="left" tooltip="Sub Demo Panel TextMock" elements={[
          { icon: <FormatIndentIncrease color="action" />, text: '2.44 GHz' },
          { icon: <CameraIcon />, text: '1.8 Aperture' },
        ]} />

        <MupStatus id="triggerChromeCastPanel" side="left" focusOnClick='chromecastPanel' tooltip="Toggle visibility for panel" elements={[
          { icon: <CastConnectedIcon />, text: 'Open Streaming Settings' }
        ]}>
          demo text
        </MupStatus>

        <GalleryStatus />
        <SaveStatus />

        <MupContent>
          <iframe
            title="Random Wiki article"
            style={{ width: "100%", height: "100%", border: '0px none' }}
            src="https://material-ui.com/components/text-fields/"
            />
        </MupContent>

      </MuiPanelProvider>
    </ThemeProvider>
  </>;
}

export default App;