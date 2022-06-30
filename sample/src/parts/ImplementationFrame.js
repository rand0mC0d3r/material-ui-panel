/* eslint-disable no-unused-vars */
import { Box } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { AmpStories } from '@material-ui/icons';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import AppsIcon from '@material-ui/icons/Apps';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import CastConnectedIcon from '@material-ui/icons/CastConnected';
import HomeIcon from '@material-ui/icons/Home';
import Skeleton from '@material-ui/lab/Skeleton';
import { useState } from 'react';
import MuiStatusBar from '../components/MuiStatusBar';
import MupButton from '../components/MupButton';
import MupContent from '../components/MupContent';
import MupPanel from '../components/MupPanel';
import MupStatus from '../components/MupStatus';
import { MuiPanelProvider } from './../components/MuiPanelStore';
import ActButton from './ActButton';
import AliveStatus from './AliveStatus';
import AnotherIframePanel from './AnotherIframePanel';
import ComplexPanel from './ComplexPanel';
import ConfigStatus from './ConfigStatus';
import DynamicStatus from './DynamicStatus';
import GalleryStatus from './GalleryStatus';
import IframePanel from './IframePanel';
import MenuStatus from './MenuStatus';
import NotificationPanel from './NotificationPanel';
import SaveStatus from './SaveStatus';
import ToggleTheme from './ToggleTheme';

function ImplementationFrame({
	darkMode, toggleDarkMode,
	help, toggleHelp,
	debugMode, toggleDebugMode,
	upperBar, toggleUpperBar,
	collapseMode, toggleCollapseMode,
	inverseMarkers, toggleInverseMarkers,
	wikiUrl, setWikiUrl
}) {

  const [markerColor, setMarkerColor] = useState('primary');
	const refreshPage = () => window.location.reload(false);

	const toggleFullScreen = () => { }

  return <MuiPanelProvider
        showSplitterButton={false}
        initialSide='left'
        {...{debugMode, markerColor, inverseMarkers, upperBar}}
        showCollapseButton={collapseMode}>

        {/* status section */}
        <ToggleTheme {...{
          toggleUpperBar, upperBar,
			toggleDebugMode, debugMode,
					help, toggleHelp,
          toggleDarkMode, darkMode,
          toggleCollapseMode, collapseMode,
          toggleInverseMarkers, inverseMarkers,
          markerColor, setMarkerColor
        }} />

        {/* buttons section  */}
        {/* <MupButton
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
          onClick={() => setWikiUrl("https://www.wikidata.org/wiki/Wikidata:Main_Page")}
          tooltip="Custom Tooltip &amp; and default MUI Color"
          icon={<AppsIcon color="primary" />}
        />

        <ActButton /> */}

        {/* status section  */}
        <MupStatus tooltip="Image with no text" onClick={refreshPage} id='fooImageStatus' elements={[{ image: 'https://picsum.photos/32/32', mask: true }]}/>
        <MenuStatus />
        <ConfigStatus />
        <GalleryStatus />
        <SaveStatus />
        <DynamicStatus />

        {/* <MupStatus
          id="statusA"
          side="left"
          tooltip='33% frames left / Ready for photo'
          elements={[
            { icon: <FormatIndentIncrease color="action" />, text: 'Lorem' },
            { icon: <CameraIcon />, text: 'Ipsum' },
          ]}
        /> */}

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

        <AliveStatus />
        {/* <MupStatus tooltip="Image with no text" id='fooImageTexrStatus' elements={[{ image: 'https://picsum.photos/32/32', mask: true, text: "User" }]}/> */}

        {/* panel section  */}
        {/* <NotificationPanel />
        <NotificationPanel icon={<AddToHomeScreenIcon />} identifier="notificationsPanel2" title="Other Panel Triggering notifications" />
        <ComplexPanel />
        <IframePanel/>
        <AnotherIframePanel /> */}

        {/* <MupPanel placement="bottom" id="randomText44" title="Lorem Ipsum Panel" icon={<FormatIndentIncrease />}>
          <Typography color="textPrimary">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Typography>
        </MupPanel> */}

        {/* <MupPanel id="chromecastPanel" title="Cast Icon" icon={<CastConnectedIcon />}>
          <Box display="flex" flexDirection="column" style={{ gap: '8px'}}>
            <Skeleton variant="rect" animation="wave" height={10} />
            <Skeleton variant="rect" animation="wave" height={20}  />
            <Skeleton variant="rect" animation="wave" height={10} width="80%" />
            <iframe
              title="Random Wiki article"
              style={{
                filter: "opacity(0.5) grayscale(0.5)",
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
        </MupPanel> */}

        <MuiStatusBar/>

        <MupContent>
          <iframe
          title="Random Wiki article"
          style={{
            width: "100%",
            filter: "opacity(0.75) grayscale(0.5)",
            backgroundColor: '#FFF',
            height: "100%",
            border: '0px none'
          }}
          src={wikiUrl}
          />
        </MupContent>



      </MuiPanelProvider>
}

export default ImplementationFrame;
