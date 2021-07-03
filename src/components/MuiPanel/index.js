import Paper from '@material-ui/core/Paper';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import React from 'react';

const getRtl = (rtl) => rtl ? { right: '64px' } : { left: '64px'};
const getWidth = (width) => width && { width: `${width}px` };

const useStyles = makeStyles(theme => ({
  root: {
    border: `2px solid ${theme.palette.augmentColor({ main: theme.palette.primary.main }).light}`,
    bottom: "0px",
    position: "absolute",
  },
  header: {
    backgroundColor: 'red'
  }
}));

const MuiPanel = withTheme(({
  icon,
  width = 700,
  minMaxWidth = [300, 500, 800],
  rtl = false,
  isExternal = false,
  children,
  title,
  theme
}) => {
  const classes = useStyles(theme)
  return (
    <Paper className={classes.root} style={isExternal ? {
      ...getRtl(rtl),
      ...getWidth(width)
    } : {}}>
      <div className={classes.header}>{icon} {title}</div>
      {children}
    </Paper>
  )
})
export default MuiPanel;