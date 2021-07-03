import { Box, Paper, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import React from 'react';

const getRtl = (rtl) => rtl ? { right: '64px' } : { left: '64px'};
const getWidth = (width, minMaxWidth) => minMaxWidth && Object.keys(minMaxWidth).length === 3
  ? {
    minWidth: `${minMaxWidth.min}px`,
    width: `${minMaxWidth.default}px`,
    maxWidth: `${minMaxWidth.max}px`,
  }
  : { width: `${width}px` };

const useStyles = makeStyles(theme => ({
  root: {
    border: `2px solid ${theme.palette.augmentColor({ main: theme.palette.primary.main }).light}`,
    bottom: "0px",
    position: "absolute",
  },
  header: {
    gap: theme.spacing(1),
    padding: theme.spacing(1, 2),
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.default,
  },
  children: {
    padding: theme.spacing(2),
  }
}));

const MuiPanel = withTheme(({
  icon,
  color = 'textPrimary',
  width = 700,
  minMaxWidth,
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
      ...getWidth(width, minMaxWidth)
    } : {}}>
      <Box
        alignItems="center"
        display="flex"
        className={classes.header}>
        {icon} <Typography {...{ color }} variant="h6">{title}</Typography>
      </Box>
      <Box className={classes.children}>
        {children}
      </Box>
    </Paper>
  )
})
export default MuiPanel;