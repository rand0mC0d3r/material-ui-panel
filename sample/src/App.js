import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Skeleton from '@material-ui/lab/Skeleton';
import './App.css';
import MuiPanel from './components/MuiPanel';
import MuiPanelGroup from './components/MuiPanelGroup';
import logo from './logo.svg';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </div>

      <MuiPanelGroup panels={[
        <MuiPanel width={400} isExternal icon="" title="Text">
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
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
      ]} />
      {/* <MuiPanel width={400} isExternal icon="" title="Text">
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" />
      </MuiPanel> */}
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
      </>
  );
}

export default App;