import { Box, Button, Paper, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
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
    boxShadow: 'initial',
    border: `2px solid ${theme.palette.augmentColor({ main: theme.palette.primary.main }).light}`,
    borderBottom: `1px solid ${theme.palette.augmentColor({ main: theme.palette.primary.main }).light}`,
    borderBottomRightRadius: '0px',
    padding: theme.spacing(0),
  },
  toolboxContainer: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    backdropFilter: "blur(4px)",
    padding: theme.spacing(0, 0, 0, 1),
  },
  panel: {
    borderRadius: '0px',
    padding: theme.spacing(1),
  },
  toolboxButton: {
    padding: theme.spacing(0.5),
    minWidth: 'unset'
  },
  activePanel: {
    borderRadius: '0px'
  },
  actionsContainer: {
    width: "100%"
  }
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
  const [activeIndex, setActiveIndex] = useState(0);
  const classes = useStyles(theme)

  useEffect(() => {
    setHeaderList(panels.map((panel, i) => ({ id: i, title: panel.props.title, icon: panel.props.icon })))
  }, [panels]);

  return <Box style={{ ...getRtl(rtl, theme) }}
    display="flex"
    flexDirection="column"
    className={classes.root}
    alignItems="stretch">
    <Paper
      disableElevation
      id={`mui-panel-group-${uniqueId}`}
      className={classes.panelsContainer}
      style={{
          ...getWidth(width, minMaxWidth)
      }}
    >
      {panels.filter(( _ ,i) => i === activeIndex).map((panel, i) => cloneElement(panel, { key: i, embedded: true }))}
    </Paper>
    <Box className={classes.toolboxContainer} display="flex" justifyContent="space-between" alignItems="center">
      <Box>
        <Button className={classes.toolboxButton} size="small" variant="outlined">
          <CalendarViewDayIcon style={{ fontSize }} />
        </Button>
      </Box>
      <Box display="flex">
      {headerList.map((hl, i) => <Tooltip arrow title={`Switch to ${hl.title}`}>
        <Button
        disableElevation
        size="small"
        onClick={() => setActiveIndex(i)}
        className={`${classes.panel} ${i === activeIndex && classes.activePanel}`}
        variant={i === activeIndex ? "contained" : "outlined" }
        color={i === activeIndex ? "primary" : "default" }
        disableElevation key={hl.id}>
          <Box display="flex" flexDirection="column" alignItems="center">
            {hl.icon}
            {/* <Typography variant="caption">{hl.title}</Typography> */}
          </Box>
      </Button>
      </Tooltip>)}
      </Box>
    </Box>
  </Box>
})
export default MuiPanel;