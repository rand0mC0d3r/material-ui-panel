import { Box, Switch, Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles, withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    display: 'flex',
    zIndex: 1,
    left: '40%',
    right: '40%',
    top: '40%',
    bottom: '40%',
  },
  container: {
    border: '2px dotted #555',
    boxShadow: `0px 0px 15px 15px ${theme.palette.background.default}, 0px 0px 50px 50px ${theme.palette.background.paper}`,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
  },
  header: {
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  box: {
    gap: theme.spacing(2),
  },
  switch: {
  }
}));

const ToggleTheme = withTheme(({
  toggleDarkMode, darkMode,
  toggleCollapseMode, collapseMode,
  toggleInverseMarkers, inverseMarkers,
  setMarkerColor, markerColor,
  theme }) => {
  const classes = useStyles(theme)

  const toggles = [
    {
      title: 'Dark Mode',
      component: <Switch
        className={classes.switch}
          color="primary"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
    },
    {
      title: 'Collapse Mode',
      component: <Switch
        className={classes.switch}
          color="primary"
          checked={collapseMode}
          onChange={toggleCollapseMode}
        />
    },
    {
      title: 'Inverse Markers',
      component: <Switch
        className={classes.switch}
          color="primary"
          checked={inverseMarkers}
          onChange={toggleInverseMarkers}
        />
    },
    {
      title: 'Markers Color',
      component: <Select
          value={markerColor}
          onChange={(e) => setMarkerColor(e.target.value)}
      >
        {['primary', 'secondary', 'textPrimary', 'textSecondary'].map(color => (
          <MenuItem key={color} value={color}>
            <Typography variant="caption">
              {color}
            </Typography>
          </MenuItem>
        ))}
        </Select>
    },

  ]


  return <div className={classes.root}>
    <div className={classes.container}>
      <Typography className={classes.header} color="textPrimary" variant="h6">Toggles</Typography>
      {toggles.map(toggle => <Box
        className={classes.box}
        key={toggle.title}
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Typography color="textPrimary" variant="caption">{toggle.title}</Typography>
        {toggle.component}
      </Box>)}
    </div>
  </div>
})

export default ToggleTheme;
