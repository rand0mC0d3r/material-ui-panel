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
    border: `2px solid ${theme.palette.augmentColor({ main: theme.palette.primary.main }).light}`,
    borderRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
    borderBottom: '0px none',
    position: "absolute",
  },
  rootStacked: {
    borderTop: "0px",
    borderBottom: "0px",
    borderRadius: "0px",
    height: "100%",
    position: "initial",
  },
  panelsContainer: {
    alignSelf: "stretch",
    flex: '1 1 auto',
    boxShadow: 'initial',
    borderRadius: '0px',
    padding: theme.spacing(0),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolboxContainer: {
    backgroundColor: 'rgba(255,255,255,0.9)',
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
  const [isStackable, setIsStackable] = useState(false);
  const classes = useStyles(theme)

  useEffect(() => {
    setHeaderList(panels.map((panel, i) => ({ id: i, title: panel.props.title, icon: panel.props.icon })))
  }, [panels]);

  return <Box style={{ ...getRtl(rtl, theme) }}
    display="flex"
    flexDirection="column"
    className={`${classes.root} ${isStackable && classes.rootStacked}`}
    alignItems="stretch">
    <Paper
      disableElevation
      id={`mui-panel-group-${uniqueId}`}
      className={classes.panelsContainer}
      style={{
          ...getWidth(width, minMaxWidth)
      }}
    >
      {isStackable
        ? <>{panels.map((panel, i) => cloneElement(panel, { key: i, forceCollapse: i !== activeIndex, handleOnCollapse: () => setActiveIndex(i), embedded: true }))}</>
        : <>{panels.filter(( _ ,i) => i === activeIndex).map((panel, i) => cloneElement(panel, { key: i, embedded: true }))}</>}
    </Paper>
    <Box className={classes.toolboxContainer} display="flex" justifyContent="space-between" alignItems="center">
      <Box>
        <Button
          color={isStackable ? 'primary' : 'default'}
          className={classes.toolboxButton}
          size="small"
          onClick={() => setIsStackable((isStackable) => !isStackable)}
          variant="outlined"
        >
          <CalendarViewDayIcon style={{ fontSize }} />
        </Button>
      </Box>
      <Box display="flex" className={classes.actionsContainer}>
        {headerList.map((hl, i) =><Button
          disableElevation
          size="small"
          disabled={isStackable || i === activeIndex}
          onClick={() => setActiveIndex(i)}
          className={`${classes.panel} ${i === activeIndex && classes.activePanel}`}
          variant={i === activeIndex ? "contained" : "text" }
          color={i === activeIndex ? "primary" : "default" }
          disableElevation key={hl.id}>
            <Box display="flex" flexDirection="column" alignItems="center">
              {cloneElement(hl.icon, {color: isStackable ? 'disabled' : i === activeIndex ? "primary" : "action"})}
            </Box>
            </Button>)}
      </Box>
    </Box>
  </Box>
})
export default MuiPanel;