import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { AmpStories, FormatAlignLeft, FormatIndentIncrease, GitHub } from '@material-ui/icons';
import Skeleton from '@material-ui/lab/Skeleton';
import { useMemo } from 'react';
import './App.css';
import MuiDivider from './components/MuiDivider';
import MuiPanel from './components/MuiPanel';
import { MuiPanelProvider } from './components/MuiPanelStore';
import ComplexPanel from './parts/ComplexPanel';
import NotificationPanel from './parts/NotificationPanel';

function App() {
  const theme = useMemo(() => createTheme({ palette: { type: 'light' } }), [])

  return (
    <ThemeProvider {...{ theme }}>
      <MuiPanelProvider showCollapseButton={true}>
        <MuiDivider icon={<GitHub />} />
        <MuiDivider tooltip="Default separator" />
        <MuiDivider showIcon={false} shortText={"MENU"} tooltip="Default separator" />

        <NotificationPanel />

        <MuiPanel id="randomText" title="Lorem Ipsum Panel" icon={<FormatIndentIncrease />}>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`}
        </MuiPanel>

        <MuiPanel id="skeletonPanel" title="Sub Forms Panel Skeletons" icon={<FormatAlignLeft />}>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </MuiPanel>

        <MuiPanel id="tralalaPanel" title="Sub Demo Panel TextMock" iconInHeader={false} subTitle="No icon big guy..." icon={<AmpStories />}>
          <Skeleton variant="rect" width={'100%'} height={300} />
        </MuiPanel>

        <ComplexPanel />

        <div>
          <iframe
            title="sample"
            style={{ width: "100%", height: "100%", border: '0px none' }}
            src="https://en.wikipedia.org/wiki/Special:Random"
          />
        </div>
      </MuiPanelProvider>
    </ThemeProvider>
  );
}

export default App;