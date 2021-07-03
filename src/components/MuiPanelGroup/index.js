import { Box, Button, Paper, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import React, { cloneElement, Fragment, useEffect, useState } from 'react';

const fontSize = 18;
const getRtl = (rtl, theme, factor = 8) => rtl
  ? { right: theme.spacing(factor) }
  : { left: theme.spacing(factor) };
const getWidth = (width, minMaxWidth) => minMaxWidth && Object.keys(minMaxWidth).length === 3
  ? {
    minWidth: `${minMaxWidth.min}px`,
    width: `${minMaxWidth.default}px`,
    maxWidth: `${minMaxWidth.max}px`,
  }
  : { width: `${width}px` };

const useStyles = makeStyles(theme => ({
  root: {
    bottom: "0px",
    padding: theme.spacing(0),
    position: "absolute",
  },
  panelsContainer: {
    border: `2px solid ${theme.palette.augmentColor({ main: theme.palette.primary.main }).light}`,
    padding: theme.spacing(0),
  },
}));

const MuiPanel = withTheme(({
  uniqueId = "generic",
  panels,
  rtl = false,
  width = 450,
  minMaxWidth,
  theme
}) => {
  const [headerList, setHeaderList] = useState([]);
  const classes = useStyles(theme)

  useEffect(() => {
    setHeaderList(panels.map((panel, i) => ({ id: i, title: panel.props.title, icon: panel.props.icon })))
  }, [panels]);

  return <Box style={{...getRtl(rtl, theme)}} display="flex" className={classes.root} alignItems="flex-end">
    <Paper
      id={`mui-panel-group-controls-${uniqueId}`}
    >
        <Box display="flex">
          {headerList.map(hl => <Button variant="outlined" disableElevation key={hl.id}>
            {hl.title}
          </Button>)}
        </Box>
    </Paper>
    <Paper
      id={`mui-panel-group-${uniqueId}`}
      className={classes.panelsContainer}
      style={{
          ...getWidth(width, minMaxWidth)
      }}
    >
        <div>
          {panels.map((panel, i) => cloneElement(panel, { key: i, embedded: true }))}
          </div>
    </Paper>
  </Box>
})
export default MuiPanel;