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
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
  },
  switch: {
  }
}));

const ToggleTheme = withTheme(({ toggleDarkMode, darkMode, theme }) => {
  const classes = useStyles(theme)

  return <div className={classes.root}>
    <div className={classes.container}>
      <Typography color="textPrimary" variant="caption">Toggle Dark theme</Typography>
      <Switch
        className={classes.switch}
          color="primary"
          checked={!darkMode}
          onChange={toggleDarkMode}
        />
    </div>
  </div>
})

export default ToggleTheme;
