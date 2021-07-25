# 📑 material-ui-panel

A zero-maintenance panel manager inspired by VSCode that adds in Material-UI elements a self populating and state keeping organization of it's children.

---
### 🪄 Installation

Install the latest version with your default package manager. The application expects given as peer **React 16.0+** and **Material UI 4.0**

```
npm install @kadarka/material-ui-panel --save
```

```
yarn i @kadarka/material-ui-panel
```

### 🎛️ Architecture & Structure

##### DOM wise
The base structure it's a grid with 5 columns, at most 5, at least 3 all the time visible.
Columns are ```[ ( 'leftMenu' 'leftPanel' ) 'main' ( 'rightPanel' 'rightMenu' ) ]```

##### Architecture wise

The ```<MuiPanelManager>``` is a HOC Context driven manager suggested to be added close the the root of the document, preferably outside the ±```<Router>``` but inside the ```<MuiTheme>```

```
import { createTheme, ThemeOptions, ThemeProvider } from '@material-ui/core/styles'
// import { useMemo } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import routes from './routes'

export default (): JSX.Element => {
  const theme = useMemo(() => createTheme({ palette: { type: 'dark' } } as ThemeOptions), [])

  return (
	<ThemeProvider {...{ theme }}>
		{/* ... */}
		<MuiPanelManager>
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
	)
}


```

### ⏰ Minimal versions

React 16.0+ (Sept 2017)

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
