import { Box, Button, Paper, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import React, { cloneElement, useState } from 'react';

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
    border: `2px solid ${theme.palette.augmentColor({ main: theme.palette.primary.main }).light}`,
    bottom: "0px",
    padding: theme.spacing(0),
    position: "absolute",
  },
}));

const MuiPanel = withTheme(({
  uniqueId = "generic",
  panels,
  width = 450,
  minMaxWidth,
  theme
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const classes = useStyles(theme)
  return (
    <Paper
      id={`mui-panel-group-${uniqueId}`}
      className={classes.root}
        style={{
          ...getWidth(width, minMaxWidth)
      }}
    >
      {panels.map((panel, i) => cloneElement(panel, { key: i, embedded: true }))}
    </Paper>
  )
})
export default MuiPanel;