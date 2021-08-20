import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { AmpStories, FormatAlignLeft, FormatIndentIncrease, GitHub } from '@material-ui/icons';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import Skeleton from '@material-ui/lab/Skeleton';
import { useMemo, useState } from 'react';
import './App.css';
import MuiContent from './components/MuiContent';
import MuiDivider from './components/MuiDivider';
import MuiPanel from './components/MuiPanel';
import { MuiPanelProvider } from './components/MuiPanelStore';
import AnotherIframePanel from './parts/AnotherIframePanel';
import ComplexPanel from './parts/ComplexPanel';
import IframePanel from './parts/IframePanel';
import NotificationPanel from './parts/NotificationPanel';
import ToggleTheme from './parts/ToggleTheme';

function App() {
  const [darkMode, setDarkMode] = useState(false);
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
      <ToggleTheme {...{ toggleDebugMode, debugMode, toggleDarkMode, darkMode, toggleCollapseMode, collapseMode, toggleInverseMarkers, inverseMarkers, markerColor, setMarkerColor }} />

      <MuiPanelProvider initialSide='right' debugMode={debugMode} markerColor={markerColor} inverseMarkers={inverseMarkers} showCollapseButton={collapseMode}>

        <MuiDivider id="logo" icon={<AddShoppingCartIcon color="primary" />} />
        <MuiDivider id="test" icon={<GitHub color="secondary" />} shortText="GIT" />
        <MuiDivider id="test33" tooltip="Default separator" />
        <MuiDivider id="sample" showIcon={false} shortText="MENU" tooltip="Default separator with text" />

        <NotificationPanel />
        <NotificationPanel icon={<AddToHomeScreenIcon />} identifier="notificationsPanel2" title="Other Panel Triggering notifications" />

        <ComplexPanel />
        <IframePanel/>
        <AnotherIframePanel />

        <MuiPanel placement="bottom" id="randomText44" title="Lorem Ipsum Panel" icon={<FormatIndentIncrease />}>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`}
        </MuiPanel>

        <MuiPanel id="randomText" title="Sub Forms Panel Skeletons" icon={<FormatAlignLeft />}>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </MuiPanel>

        <MuiPanel id="tralalaPanel" title="Sub Demo Panel TextMock" iconInHeader={false} hint="No icon big guy..." icon={<AmpStories />}>
          <Skeleton variant="rect" width={'100%'} height={300} />
        </MuiPanel>

        <MuiPanel id="tralalaPanel2" title="Sub Demo Panel TextMock" hint="Icon big guy..." icon={<AmpStories />}>
          <Skeleton variant="rect" width={'100%'} height={300} />
        </MuiPanel>

        <MuiPanel id="tralalaPanel33" title="Sub Demo Panel TextMock" iconInHeader={false} hint="No icon big guy..." icon={<AmpStories />}>
          <Skeleton variant="rect" width={'100%'} height={300} />
        </MuiPanel>

        <MuiPanel id="tralalaPanel2344" title="Sub Demo Panel TextMock" hint="Icon big guy..." icon={<AmpStories />}>
          <Skeleton variant="rect" width={'100%'} height={300} />
        </MuiPanel>

        <MuiContent>
          <iframe
            title="Random Wiki article"
            style={{ width: "100%", filter: 'saturate(10) blur(0px)', opacity: 0.45, pointerEvents: 'none', height: "100%", border: '0px none' }}
            src="https://en.wikipedia.org/wiki/Special:Random"
            />
        </MuiContent>
      </MuiPanelProvider>
    </ThemeProvider>
  </>;
}

export default App;