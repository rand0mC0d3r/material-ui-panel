# 📑 material-ui-panel

A zero-maintenance/batteries-included panel manager inspired by VSCode style/aspect that adds via Material-UI elements a self populating/managed and state keeping organization of it's children panels.


NOTE: comes bundled with ```prop-types```. No **Typescript** support. Help me by creating a *PR* 💌 .

---
## 🪄 Installation

**Minimal version** for mandatory dependencies. Up to the user to provide **React 16.0+** and **Material UI 4.0**

Install the latest version with your favorite package manager.


```
npm install @kadarka/material-ui-panel --save
```

```
yarn i @kadarka/material-ui-panel
```

## 🎛️ Architecture & Structure

#### DOM & CSS Grid wise

The base structure it's a grid with 5 columns, at most 5, at least 3 all the time visible, with 1 or 2 always potentially ```width: 0px```

Grid-columns are ```[ ( 'leftMenu' '{leftPanel?}' ) 'main' ( '{rightPanel?}' 'rightMenu' ) ]```.
Side note:  ```leftPanel``` and ```rightPanel``` are only visible if needed. Internally they are a ```grid-area``` sub-populated as a ```flex``` with direction ```column```

##### Visually

| leftMenu | leftPanel | main | rightPanel | rightMenu |
|----------|-----------|------|------------|-----------|
| announced panels for side: ```left``` | panels[ ] qualifying for side and visibility properties | *user main app* | panels[ ] qualifying for side and visibility properties | announced panels for side: ```right``` |

### 📑 - < MuiPanelProvider >

The ```<MuiPanelProvider>``` is a HOC Context driven manager suggested to be added close the the root of the document, preferably outside the ±```<Router>``` but inside the ```<MuiTheme>```

The **MuiPanelProvider** constitutes of a wrapper around the **Context API** that acts as a store, with a few methods exposed to the user for managing the states, along with some internal methods that allow the panels to announce themselves, broadcast state changes and react to events. Communication is duplex and the panels themselves are in a dual-binding open chat with the **Provider**.

```
import { createTheme, ThemeOptions, ThemeProvider } from '@material-ui/core/styles'
// import { useMemo } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import routes from './routes'

export default (): JSX.Element => {
  const theme = useMemo(() => createTheme({ palette: { type: 'dark' } } as ThemeOptions), [])

  return <ThemeProvider {...{ theme }}>
	{/* ... */}
	<MuiPanelProvider>
	{/* notification?... */}
	{/* login/modals/errors?... */}
	{/* ... */}
	<Router>
	   {/* ... */}
	   <Switch>
	     {routes.map(({ path, exact, component }) => <Route key={path} {...{ exact, path, component }} />)}
	   </Switch>
	</Router>
	{/* ... */}
  </ThemeProvider>
}
```

##### Available tweaks's

| Argument | Type |Default | Description |
|-----|----|----|--------|
| *allowRightClick* | boolean | ```false``` | Determines if the panel allows opening the default browser context menu on right click |
| *initialSide* | string | ```left``` | A side option to define for a new user the preference of the menu. Options ```left``` and ```right``` |
| *inverseMarkers* | boolean | ```false``` | Determines is the highlight markers are oriented towards the outer borders of the screen, or towards the main content of the screen |
| *markerColor* | string | ```textPrimary``` | Sets on of the material-UI ```Typography``` range of available colors. Options ```textPrimary```, ```textSecondary```, ```primary```, ```secondary``` |

---
## < MuiPanelManager >

Self organizing manager wrapper that renders all children given

##### Available API's

| Argument | Default | Description |
|-----|----|--------|
| allowRightClick | false | Determines if the panel allows opening the default browser context menu on right click |

##### Code sample

```
<MuiPanelManager>
	<MuiDivider tooltip="Default separator" />

	<NotificationPanel />

	<MuiPanel title="Lorem Ipsum Panel" icon={<FormatIndentIncreaseIcon />}>
		{`Lorem ipsum dolor sit amet, ...`}
	</MuiPanel>

	<MuiPanel title="Sample Panel" icon={<FormatAlignLeftIcon />}>
		<Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
	</MuiPanel>
</MuiPanelManager>
```
---
## Status Bar Component - ```<MupStatus>```

**NOTE:** Architecturally the wrapper ```<MupStatusBar>``` bound to the scene is not being rendered and started if there are no ```<MupStatus>``` announced across the application at any point in time. Later instantiation is fully encouraged

Add a section to either ```left``` or ```right``` side of the status bar.

Each ```MupStatus``` entity must contain an ```id``` in form of an uuid.

##### Available arguments


|  | Argument | Type | Default | Description |
|--|-----|--|--|---|
| ⭐ | id | ```string``` | ... |  Give a unique identifier to the status element |
| ⭐	| elements | ```array```  | ```[]``` | List of objects of type ```{icon: ReactNode, text: string}```  |
|	| side | ```string``` | ```left``` | Determines to which side the panel is bound |
| | requestAttention | ```bool``` | ```false``` | When truthy is swaps to the ```secondary``` color |
| | tooltip | ```string``` | ```''``` | Provides a tooltip acting as a guide |
| | focusOnClick | ```string``` | _null_ | Toggles visibility of panel known by ```material-ui-panel.<MuiPanelProvider>``` |
| | onClick | ```func``` | ```() => {}``` | Issues callback when status section is clicked  |

#### Code sample


##### Simple example - static

```
 <MupStatus
  id="sampleStatus"
  side="left"
  focusOnClick='anotherPanel'								// onClick will focus a panel known
  tooltip="Sample Status Tooltip"
  elements={[
   { icon: <CameraIcon />, text: 'I got a new camera' },				// Add an icon + text
 ]}/>
```

##### Dynamic example - updateable
```
  ...
  const [open, setOpen] = useState(false);
  const [elements, setElements] = useState();
  const [requestAttention, setRequestAttention] = useState(true);			// Request attention state

  const someFunction = () => {
   setElements([{ icon: <CloudDoneOutlinedIcon />, text: 'Document saved' }])		// Set an element
   setRequestAttention(true)								// Update attention state
  }

  return <>
    <MupStatus
      id='statusCustomElement'
      requestAttention={requestAttention}						// Reference attention state
      onClick={() => setOpen(true)}
      tooltip="Save Document?"
      elements={elements}								// Initialize empty (won't show)
    />

```

---
## (Your) Content Component - ```<MupContent>```

This is the observable wrapper of your entire application. This should be included as close to root as possible where content represents your view or a representation of your current application UI.

##### Available arguments


|  | Argument | Type | Default | Description |
|--|-----|--|--|---|
| ⭐ | children | ```ReactNode``` | ... |  Pass-thru for the current app UI |

#### Code sample


##### Simple example - static

```
 <MupContent>

  ... your app
  ... <ReactRouter>

 </MupContent>
```

---
---
---
### TODO

- todo: make callbacks clean right the GC