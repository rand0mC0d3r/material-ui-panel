/* eslint-disable no-unused-vars */
import { Box } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { AmpStories, FormatIndentIncrease, GitHub } from '@material-ui/icons';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import AppsIcon from '@material-ui/icons/Apps';
import BathtubIcon from '@material-ui/icons/Bathtub';
import CameraIcon from '@material-ui/icons/Camera';
import CastConnectedIcon from '@material-ui/icons/CastConnected';
import HomeIcon from '@material-ui/icons/Home';
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
import ConfigStatus from './parts/ConfigStatus';
import DynamicStatus from './parts/DynamicStatus';
import GalleryStatus from './parts/GalleryStatus';
import IframePanel from './parts/IframePanel';
import MenuStatus from './parts/MenuStatus';
import NotificationPanel from './parts/NotificationPanel';
import SaveStatus from './parts/SaveStatus';
import ToggleTheme from './parts/ToggleTheme';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [debugMode, setDebugMode] = useState(false);
  const [upperBar, setUpperBar] = useState(false);
  const [collapseMode, setCollapseMode] = useState(true);
  const [inverseMarkers, setInverseMarkers] = useState(false);

  const [markerColor, setMarkerColor] = useState('primary');

  const theme = useMemo(() => createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      background: darkMode
        ? { default: '#000', paper: '#000' }
        : { default: '#FAFAFA', paper: '#FFF' },
    }
  }), [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleDebugMode = () => setDebugMode(!debugMode);
  const toggleUpperBar = () => setUpperBar(!upperBar);
  const toggleCollapseMode = () => setCollapseMode(!collapseMode);
  const toggleInverseMarkers = () => setInverseMarkers(!inverseMarkers);

  return <>
    <ThemeProvider {...{ theme }}>
      <MuiPanelProvider
        showSplitterButton={true}
        initialSide='left'
        {...{debugMode, markerColor, inverseMarkers, upperBar}}
        showCollapseButton={collapseMode}>

        {/* status section */}
        <ToggleTheme {...{
          toggleUpperBar, upperBar,
          toggleDebugMode, debugMode,
          toggleDarkMode, darkMode,
          toggleCollapseMode, collapseMode,
          toggleInverseMarkers, inverseMarkers,
          markerColor, setMarkerColor
        }} />

        {/* buttons section  */}
        <MupButton
          id="logoAndText"
          tooltip="Custom Tooltip &amp; Color"
          shortText="HOME"
          icon={<HomeIcon style={{ color: green[500] }} />}
        />

        <MupButton
          id="logoDisabled"
          disabled
          icon={<AppsIcon style={{ color: green[500] }} />}
        />

        <MupButton
          id="logoColored"
          tooltip="Custom Tooltip &amp; and default MUI Color"
          icon={<AppsIcon color="primary" />}
        />

        <ActButton />

        {/* status section  */}
        <MenuStatus />
        <ConfigStatus />
        <GalleryStatus />
        <SaveStatus />
        <DynamicStatus />

        <MupStatus
          id="statusA"
          side="left"
          tooltip='33% frames left / Ready for photo'
          elements={[
            { icon: <FormatIndentIncrease color="action" />, text: 'Lorem' },
            { icon: <CameraIcon />, text: 'Ipsum' },
          ]}
        />

        <MupStatus
          id="triggerChromeCastPanel"
          side="left"
          focusOnClick='chromecastPanel'
          tooltip="Toggle visibility for panel"
          elements={[
          { icon: <CastConnectedIcon />, text: 'Toggle Panel' }
        ]}>
          demo text
        </MupStatus>

        {/* panel section  */}
        <NotificationPanel />
        <NotificationPanel icon={<AddToHomeScreenIcon />} identifier="notificationsPanel2" title="Other Panel Triggering notifications" />
        <ComplexPanel />
        <IframePanel/>
        <AnotherIframePanel />

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
              style={{
                filter: "opacity(0.25) grayscale(1)",
                width: "100%",
                height: "600px",
                border: '1px dotted #CCC',
                borderRadius: '8px'
              }}
              src={'https://en.wikipedia.org/wiki/Chromecast'}
            />
            <Skeleton variant="rect" animation="wave" height={25} />
            <Skeleton variant="rect" animation="wave" height={15}  />
          </Box>
        </MupPanel>

        <MupPanel id="tralalaPanel" title="Sub Demo Panel TextMock" iconInHeader={false} hint="No icon big guy..." icon={<AmpStories />}>
          <Skeleton variant="rect" width={'100%'} height={300} />
        </MupPanel>


        <MupContent>
          <iframe
            title="Random Wiki article"
            style={{
              width: "100%",
              filter: "opacity(0.25) grayscale(1)",
              backgroundColor: '#FFF',
              height: "100%",
              border: '0px none'
            }}
            src="https://en.wikipedia.org/wiki/Special:Random"
          />
        </MupContent>

      </MuiPanelProvider>
    </ThemeProvider>
  </>;
}

export default App;