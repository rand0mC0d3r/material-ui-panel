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


### TODO

- Make panels support and document
	MuiPanel - config: {
		id,
		title,
		hint
		tooltip,
		icon,
		notification: { count, color },
		disabled,
		ignoreHierarchy,
		header: { noIcon },
		content: { noPadding },
	}