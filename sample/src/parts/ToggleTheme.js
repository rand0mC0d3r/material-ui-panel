import { Switch, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    left: '40%',
    right: '40%',
    top: '40%',
    bottom: '40%',
  },
  container: {
    border: '1px dotted #555',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
  },
  header: {
    marginBottom: theme.spacing(4),
  },
  switch: {
  }
}));

const ToggleTheme = withTheme(({
  toggleDarkMode, darkMode,
  toggleCollapseMode, collapseMode,
  toggleInverseMarkers, inverseMarkers,
  theme }) => {
  const classes = useStyles(theme)

  return <div className={classes.root}>
    <div className={classes.container}>
      <Typography className={classes.header} color="textPrimary" variant="h6">Toggles</Typography>
      <Typography color="textPrimary" variant="caption">Toggle Dark theme</Typography>
      <Switch
        className={classes.switch}
          color="primary"
          checked={darkMode}
          onChange={toggleDarkMode}
      />
      <Typography color="textPrimary" variant="caption">Toggle Collapse Mode</Typography>
      <Switch
        className={classes.switch}
          color="primary"
          checked={collapseMode}
          onChange={toggleCollapseMode}
        />
      <Typography color="textPrimary" variant="caption">Toggle Inverse Markers</Typography>
      <Switch
        className={classes.switch}
          color="primary"
          checked={inverseMarkers}
          onChange={toggleInverseMarkers}
        />
    </div>
  </div>
})

export default ToggleTheme;
