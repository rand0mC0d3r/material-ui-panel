import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import CameraIcon from '@material-ui/icons/Camera';
import CastIcon from '@material-ui/icons/Cast';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import CropSquareIcon from '@material-ui/icons/CropSquare';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Skeleton from '@material-ui/lab/Skeleton';
import './App.css';
import MuiPanel from './components/MuiPanel';
import MuiPanelList from './components/MuiPanelList';
import MuiPanelManager from './components/MuiPanelManager';

function App() {
  return (
    <MuiPanelManager>
      <MuiPanel title="First Panel" icon={<CameraIcon />}>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget purus vitae ipsum tempus aliquam imperdiet quis erat. Pellentesque tellus massa, tincidunt sit amet rutrum eget, finibus sit amet mauris. Aliquam erat volutpat. Fusce placerat rutrum placerat. Curabitur aliquam bibendum tristique. In porta velit ac augue auctor tempus. Sed eget nunc a ligula ultrices euismod ut ac mi. Pellentesque pellentesque auctor diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.`}
      </MuiPanel>
      <MuiPanelList
        title="Shapes"
        subTitle="Forms and panels"
        icon={<CalendarViewDayIcon />}>
        <MuiPanel title="SubFunny Panel BlaBla" icon={<CastIcon />}>
          <Skeleton animation="wave" height={18} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={18} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={18} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={18} style={{ marginBottom: 6 }} />
          <Skeleton variant="circle" width={48} height={48} />
          <Skeleton animation="wave" height={24} width="60%" />
          <Skeleton animation="wave" height={48} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={18} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={18} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={24} width="40%" />
          <Skeleton animation="wave" height={18} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={24} width="80%" />
        </MuiPanel>
        <MuiPanel title="SubFunny Panel" icon={<FileCopyIcon />}>
          <Skeleton variant="rect" width={'100%'} height={600} />
        </MuiPanel>
        <MuiPanel title="SubFunny Panel" icon={<CastIcon />}>
          <Skeleton variant="rect" width={'100%'} height={600} />
        </MuiPanel>
        <MuiPanel title="SubFunny Panel" icon={<CastIcon />}>
          <Skeleton variant="circle" width={100} height={100} />
        </MuiPanel>
      </MuiPanelList>
      <MuiPanelList iconInPanel={false} title="Test Panel NoCion" noIconInPanel icon={<CameraIcon />}>
        <MuiPanel title="SubFunny Panel" icon={<CastIcon />}>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </MuiPanel>
        <MuiPanel title="SubFunny Panel" icon={<CastIcon />}>sub 2b</MuiPanel>
      </MuiPanelList>
      {/* <MuiPanel title="Funny Panel" icon={<CastIcon />}>
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" />
      </MuiPanel> */}
      {/* <MuiPanel title="Silly Panel" icon={<CastIcon />} initialSide="left">
        <Skeleton variant="rect" width={'100%'} height={600} />
      </MuiPanel>
      <MuiPanel title="Rainbow Panel" icon={<ChromeReaderModeIcon />} initialSide="left"> <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" /></MuiPanel> */}
      <MuiPanel title="Music Panel" icon={<FileCopyIcon />} initialSide="left">3</MuiPanel>
      {/* <MuiPanel title="Musk Panel" icon={<CastIcon />} initialSide="left"> <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" /></MuiPanel> */}
      <MuiPanel title="Rain Panel" icon={<ChromeReaderModeIcon />} initialSide="left">4</MuiPanel>
      <MuiPanel title="Earth Panel" icon={<InfoOutlinedIcon />}  initialSide="left"> <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" /></MuiPanel>




      <MuiPanel title="Square Iconless" initialSide="left" subTitle="No icon big guy...">
        <Skeleton variant="rect" width={'100%'} height={600} />
      </MuiPanel>
      <MuiPanel title="Square Icon Disabled" icon={<CropSquareIcon />} iconInHeader={false} initialSide="left" subTitle="No icon big guy...">
        <Skeleton variant="rect" width={'100%'} height={600} />
      </MuiPanel>
      <MuiPanel title="Square Sample" icon={<CropSquareIcon />} initialSide="left" subTitle="A big guy...">
        <Skeleton variant="rect" width={'100%'} height={600} />
      </MuiPanel>
        <div>
          <iframe
          title="sample"
          style={{ width: "100%", height: "100%", border: '0px none' }}
          src="https://material-ui.com"
        />
      </div>
    </MuiPanelManager>
  );
}

export default App;
