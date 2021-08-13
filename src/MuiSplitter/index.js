import { makeStyles, withTheme } from '@material-ui/core/styles';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import React, { cloneElement, Fragment, useContext, useEffect, useState } from 'react';
import DataProvider, { MuiPanelProvider } from '../MuiPanelStore';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100%",
    padding: "1px",
    border: '1px solid red',
    height: "100%",
    backgroundColor: theme.palette.background.default,
    gridArea: "main",
    position: 'relative',
  },
  horizontal: {
    flexDirection: "row",
  },
  vertical: {
    flexDirection: "column",
  },
  zone: {
    border: '1px solid blue',
    padding: "1px",
    flex: "1 1 auto",
    position: 'relative',
  },
  splitButton: {
    backgroundColor: "green",
    position: 'absolute',
    top: 0,
    right: 0,
    // left: 0,
    // bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: '0 0 50%',
  },

}));

const MuiSplitter = withTheme(({
  children,
  theme,
}) => {
  const classes = useStyles(theme)

  return <div className={`
    ${classes.root}
    ${children.direction === 'horizontal'
    ? classes.horizontal
    : classes.vertical}
  `}>
    {/* {children.direction} {children.order} */}

    {children.zones.map(zone => <div className={classes.zone}>
      {zone.type !== 'list' && <>

        <div className={classes.splitButton}><CallSplitIcon/></div>
        {zone.panelId}
      </>}
      {zone.type === 'list' && <>
        {zone.direction === 'vertical' ? <SwapHorizIcon/> : <ImportExportIcon/>}
        <MuiSplitter>{zone}</MuiSplitter>
        </>}
    </div>)}
  </div>
})

export default MuiSplitter;