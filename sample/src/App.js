import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useMemo, useState } from 'react';
import './App.css';
import ImplementationFrame from './parts/ImplementationFrame';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [debugMode, setDebugMode] = useState(false);
  const [upperBar, setUpperBar] = useState(false);
  const [help, setHelp] = useState(false);
  const [collapseMode, setCollapseMode] = useState(true);
  const [inverseMarkers, setInverseMarkers] = useState(false);
  const [wikiUrl, setWikiUrl] = useState("https://en.wikipedia.org/wiki/Comparison_of_Material_Design_implementations");

  const theme = useMemo(() => createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: darkMode
        ? { main: "#0969da" }
        : { main: '#0969da' },
      background: darkMode
        ? { default: '#161b22', paper: '#0d1117' }
        : { default: '#FAFAFA', paper: '#FFF' },
    }
  }), [darkMode])

  const toggleDarkMode = () => setDarkMode(darkMode);
  const toggleDebugMode = () => setDebugMode(!debugMode);
  const toggleUpperBar = () => setUpperBar(!upperBar);
  const toggleHelp = () => setHelp(!help);
  const toggleCollapseMode = () => setCollapseMode(!collapseMode);
  const toggleInverseMarkers = () => setInverseMarkers(!inverseMarkers);

  const constructImplementation = <ImplementationFrame {...{
        darkMode, toggleDarkMode,
        help, toggleHelp,
        debugMode, toggleDebugMode,
        upperBar, toggleUpperBar,
        collapseMode, toggleCollapseMode,
        inverseMarkers, toggleInverseMarkers,
        wikiUrl, setWikiUrl
      }} />

  return <ThemeProvider {...{ theme }} >
    {help
      ? <div style={{
      display: 'flex',
      width: '100%',
      height: '100%',
      position: 'absolute',
      alignContent: 'center',
      justifyContent: "center",
      alignItems: 'center',
      }}>
        <div style={{
          position: 'relative',
          borderRadius: '30px',
          // minWidth: '1200px',
          maxWidth: '90%',
          width: '70%',
          border: '45px solid #333333',
          height: '70%'
        }}>
          {constructImplementation}
          <div style={{ position: 'absolute', left: '-200px', textAlign: 'right'}}>UpperBar section</div>
        </div>
      </div>
      : constructImplementation}
    </ThemeProvider>
}

export default App;
