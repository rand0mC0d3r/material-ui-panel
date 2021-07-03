import Skeleton from '@material-ui/lab/Skeleton';
import './App.css';
import MuiPanel from './components/MuiPanel';
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
      <MuiPanel icon="" isExternal title="Text">
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
      </MuiPanel>
      <MuiPanel icon="" isExternal rtl title="Text">
        sample content
      </MuiPanel>
      </>
  );
}

export default App;
