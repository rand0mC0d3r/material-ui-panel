import CameraIcon from '@material-ui/icons/Camera';
import CastIcon from '@material-ui/icons/Cast';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import CropSquareIcon from '@material-ui/icons/CropSquare';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Skeleton from '@material-ui/lab/Skeleton';
import './App.css';
import { DataContextProvider } from './components/MuiContextStore';
import MuiDivider from './components/MuiDivider';
import MuiPanel from './components/MuiPanel';
import MuiPanelManager from './components/MuiPanelManager';
import NotificationPanel from './parts/NotificationPanel';



function App() {
  return <DataContextProvider>
    <MuiPanelManager>
      {/* <MuiDivider shortText="////" tooltip="No icon separator" showIcon={false} /> */}
      <MuiPanel title="First Panel" icon={<CameraIcon />}>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget purus vitae ipsum tempus aliquam imperdiet quis erat. Pellentesque tellus massa, tincidunt sit amet rutrum eget, finibus sit amet mauris. Aliquam erat volutpat. Fusce placerat rutrum placerat. Curabitur aliquam bibendum tristique. In porta velit ac augue auctor tempus. Sed eget nunc a ligula ultrices euismod ut ac mi. Pellentesque pellentesque auctor diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.`}
      </MuiPanel>

      <MuiDivider tooltip="Default separator" />
      <MuiPanel title="SubFunny Panel Skeletons" icon={<CastIcon />}>
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" />
      </MuiPanel>

      <MuiDivider icon={<NotificationsIcon />} tooltip="Only icon separator" />
      <MuiPanel title="SubFunny Panel Text" subTitle="No icon big guy..." icon={<CastIcon />}>sub 2b</MuiPanel>
      <MuiPanel title="Rain Panel" icon={<ChromeReaderModeIcon />} initialSide="left">4</MuiPanel>

      {/* <MuiDivider shortText="////" tooltip="No icon separator" showIcon={false} />

      <MuiDivider shortText="ABCD" tooltip="No icon separator" showIcon={false} />
      <MuiDivider shortText="ABCD" tooltip="Icon and text" icon={<NotificationsIcon />} />
      <MuiDivider shortText="ABCDEFGH" tooltip="Icon and long long text" icon={<NotificationsIcon />} /> */}



      {/* <MuiDivider title="Notifications" />
      <MuiPanel title="Notifications Panel" icon={<NotificationsIcon />} initialSide="left">
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" />
      </MuiPanel>
      <NotificationPanel />


      <MuiDivider title="Headers and Icons" />
      <MuiPanel title="Square Iconless" initialSide="left" subTitle="No icon big guy...">
        <Skeleton variant="rect" width={'100%'} height={600} />
      </MuiPanel>
      <MuiPanel title="Square Icon Disabled" icon={<CropSquareIcon />} iconInHeader={false} initialSide="left" subTitle="No icon big guy...">
        <Skeleton variant="rect" width={'100%'} height={600} />
      </MuiPanel>
      <MuiPanel title="Square Sample" icon={<CropSquareIcon />} initialSide="left" subTitle="A big guy...">
        <Skeleton variant="rect" width={'100%'} height={600} />
      </MuiPanel> */}

      <div>
        <iframe
        title="sample"
        style={{ width: "100%", height: "100%", border: '0px none' }}
        src="https://material-ui.com"
      />
      </div>
    </MuiPanelManager>
  </DataContextProvider>
}

export default App;
