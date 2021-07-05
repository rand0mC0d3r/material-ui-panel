import { Box, Button } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/Camera';
import CastIcon from '@material-ui/icons/Cast';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Skeleton from '@material-ui/lab/Skeleton';
import './App.css';
import MuiPanel from './components/MuiPanel';
import MuiPanelGroup from './components/MuiPanelGroup';
import MuiPanelList from './components/MuiPanelList';
import MuiPanelManager from './components/MuiPanelManager';


function App() {
  return (
    <>
    <MuiPanelManager>
        <MuiPanel title="First Panel" icon={<CameraIcon />}>{ `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget purus vitae ipsum tempus aliquam imperdiet quis erat. Pellentesque tellus massa, tincidunt sit amet rutrum eget, finibus sit amet mauris. Aliquam erat volutpat. Fusce placerat rutrum placerat. Curabitur aliquam bibendum tristique. In porta velit ac augue auctor tempus. Sed eget nunc a ligula ultrices euismod ut ac mi. Pellentesque pellentesque auctor diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.`}</MuiPanel>
        <MuiPanelList title="Second are Panel" subTitle="Lorem Ipsum sit dolor amet" icon={<CameraIcon />}>
          <MuiPanel title="SubFunny Panel" icon={<CastIcon />}> <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" /></MuiPanel>
          <MuiPanel title="SubFunny Panel" icon={<CastIcon />}>sub 2b</MuiPanel>
        </MuiPanelList>
      <MuiPanel title="Funny Panel" icon={<CastIcon />}> <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" /></MuiPanel>
      <MuiPanel title="Silly Panel" icon={<CastIcon />} initialSide="left">3</MuiPanel>
      <MuiPanel title="Rainbow Panel" icon={<ChromeReaderModeIcon />} initialSide="left"> <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" /></MuiPanel>
      <MuiPanel title="Music Panel" icon={<ChromeReaderModeIcon />} initialSide="left">3</MuiPanel>
      <MuiPanel title="Musk Panel" icon={<CastIcon />} initialSide="left"> <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" /></MuiPanel>
      <MuiPanel title="Rain Panel" icon={<ChromeReaderModeIcon />} initialSide="left">4</MuiPanel>
      <MuiPanel title="Earth Panel" icon={<InfoOutlinedIcon />}  initialSide="left"> <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" /></MuiPanel>
      <MuiPanel title="Blue Panel" icon={<InfoOutlinedIcon />}  initialSide="left">4d</MuiPanel>
        <div>
           <iframe
          title="sample"
          style={{ width: "100%", height: "100%", border: '0px none' }}
          src="https://material-ui.com"
        />

      </div>
    </MuiPanelManager>
    {/* <Box display="flex" style={{width: "100%", height: "100%", position: "absolute"}}> */}
      {/* <div style={{ flex: "1 1 auto", alignSelf: "stretch" }}>
        <iframe
          title="sample"
          style={{ width: "100%", height: "100%", border: '0px none' }}
          src="https://material-ui.com/components/material-icons/#material-icons"
        />
      </div> */}

      {/* <MuiPanelGroup panels={[
        <MuiPanel width={400} isExternal icon={<CameraIcon />} title="Text">
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </MuiPanel>,
        <MuiPanel width={400} isExternal icon={<CastIcon />} title="Random Longer text">
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
          <Skeleton animation="wave" height={10} width="80%" />
          <Skeleton animation="wave" height={10} width="80%" />
        </MuiPanel>,
        <MuiPanel width={400} isExternal icon={<ChromeReaderModeIcon />} title="Other Panel">
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
          <Skeleton animation="wave" height={10} width="80%" />
          <Skeleton animation="wave" height={10} width="80%" />
          <Skeleton animation="wave" height={10} width="80%" />
        </MuiPanel>,
        <MuiPanel
          minMaxWidth={{ min: 200, default: 500, max: 800 }}
          icon={<InfoOutlinedIcon />}
          isExternal
          rtl
          title="Lorem Ipsum"
          subTitle="sit amet, consectetur 43"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet rutrum massa id tincidunt. Pellentesque nunc ante, lacinia sit amet ex ullamcorper, accumsan vestibulum enim. Mauris ut mauris eu dolor commodo hendrerit. Vestibulum sed felis quis magna semper fringilla id ac sapien. Donec velit massa, blandit at luctus eget, elementum at enim. Aenean sed dignissim eros. Maecenas consequat gravida justo, sit amet venenatis lorem pellentesque vitae.
        </MuiPanel>
      ]} /> */}

      {/* <MuiPanel
        minMaxWidth={{ min: 200, default: 500, max: 800 }}
        icon={<InfoOutlinedIcon />}
        isExternal
        rtl
        title="Lorem Ipsum"
        subTitle="sit amet, consectetur 43"
      >
        <>
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Link
          </Button>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet rutrum massa id tincidunt. Pellentesque nunc ante, lacinia sit amet ex ullamcorper, accumsan vestibulum enim. Mauris ut mauris eu dolor commodo hendrerit. Vestibulum sed felis quis magna semper fringilla id ac sapien. Donec velit massa, blandit at luctus eget, elementum at enim. Aenean sed dignissim eros. Maecenas consequat gravida justo, sit amet venenatis lorem pellentesque vitae.
        </>
      </MuiPanel> */}
      {/* </Box> */}
      </>
  );
}

export default App;
