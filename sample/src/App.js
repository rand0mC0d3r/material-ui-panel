import { Box } from '@material-ui/core';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';
import GitHubIcon from '@material-ui/icons/GitHub';
import Skeleton from '@material-ui/lab/Skeleton';
import './App.css';
import { DataContextProvider } from './components/MuiContextStore';
import MuiDivider from './components/MuiDivider';
import MuiPanel from './components/MuiPanel';
import MuiPanelManager from './components/MuiPanelManager';
import NotificationPanel from './parts/NotificationPanel';

function App() {
  return (
    <DataContextProvider>
      <MuiPanelManager>
        <MuiDivider icon={<GitHubIcon />} />
        <MuiDivider tooltip="Default separator" />
        <MuiDivider showIcon={false} shortText={"MENU"} tooltip="Default separator" />

        <NotificationPanel />

        <MuiPanel title="Lorem Ipsum Panel" icon={<FormatIndentIncreaseIcon />}>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget purus vitae ipsum tempus aliquam imperdiet quis erat. Pellentesque tellus massa, tincidunt sit amet rutrum eget, finibus sit amet mauris. Aliquam erat volutpat. Fusce placerat rutrum placerat. Curabitur aliquam bibendum tristique. In porta velit ac augue auctor tempus. Sed eget nunc a ligula ultrices euismod ut ac mi. Pellentesque pellentesque auctor diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.`}
        </MuiPanel>

        <MuiPanel title="SubFunny Panel Skeletons" icon={<FormatAlignLeftIcon />}>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </MuiPanel>

        <MuiPanel title="SubFunny Panel Text" iconInHeader={false} subTitle="No icon big guy..." icon={<AmpStoriesIcon />}>
          <Skeleton variant="rect" width={'100%'} height={600} />
        </MuiPanel>
        <MuiPanel title="SubFunny Panel Text1" subTitle="No icon big guy..." icon={<AmpStoriesIcon />}>
          <Skeleton variant="rect" width={'100%'} height={150} />
        </MuiPanel>
        <MuiPanel title="SubFunny Panel Text2" subTitle="No icon big guy..." icon={<AmpStoriesIcon />}>
          <Skeleton variant="rect" width={'100%'} height={400} />
        </MuiPanel>
        <MuiPanel title="SubFunny Panel Text3" subTitle="No icon big guy..." icon={<AmpStoriesIcon />}>
          <Skeleton variant="rect" width={'100%'} height={300} />
        </MuiPanel>

        <MuiPanel title="Rain Panel" icon={<ChromeReaderModeIcon />} initialSide="left">
          <Box display="flex" flexDirection="column" style={{ gap: "16px" }}>
            <div>
              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} />
            </div>
            <div>
              <Skeleton variant="rect" width={'100%'} height={400} />
            </div>
            <div>
              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="80%" />
            </div>
          </Box>
        </MuiPanel>

        <div>
          <iframe
            title="sample"
            style={{ width: "100%", height: "100%", border: '0px none' }}
            src="https://en.wikipedia.org/wiki/Special:Random"
          />
          {/* content */}
        </div>
      </MuiPanelManager>
    </DataContextProvider>
  );
}

export default App;
