import { makeStyles, withTheme } from '@material-ui/core/styles';
import React, { cloneElement, Fragment, useContext, useEffect, useState } from 'react';
import DataProvider, { MuiPanelProvider } from '../MuiPanelStore';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.default,
    gridArea: "main",
  },
  initial: {
    backgroundColor: "blue",
    flex: '0 0 50%',
  },
  other: {
    backgroundColor: "red",
    flex: '0 0 50%',
  },

}));

const MuiSplitter = withTheme(({
  children,
  theme,
}) => {
  const classes = useStyles(theme)

  return <div className={`${classes.root}`}>
    <div className={classes.initial}>{children}</div>
    <div className={classes.other}>other half</div>
  </div>
})

export default MuiSplitter;