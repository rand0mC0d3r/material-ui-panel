import { Box, Button, Paper, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import React, { cloneElement, useEffect, useState } from 'react';

const fontSize = 20;
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
    // border: `1px solid ${theme.palette.divider}`,
  },
  rootInList: {
    border: `0px none`,
  },
  toolbox: {
    gap: theme.spacing(0.5),
  },
  toolboxButton: {
    padding: "0px",
    width: '20px',
    minWidth: '20px',
    lineHeight: '0px'
  },
  headerContainer: {
    gap: theme.spacing(1),
  },
  header: {
    cursor: "default",
    position: "relative",
    gap: theme.spacing(1),
    userSelect: "none",
    padding: theme.spacing(1.5, 2.5),
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'rgba(255,255,255,0.9)',
    backdropFilter: "blur(4px)",
  },
  headerInList: {
    cursor: "pointer",
    position: "relative",
    gap: theme.spacing(1),
    userSelect: "none",
    padding: theme.spacing(0.5, 1, 0.5, 0),
    border: `0px none transparent`,
    backgroundColor: theme.palette.augmentColor({ main: theme.palette.divider }).light,
    boxShadow: theme.shadows[0]
  },
  children: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 1, 1, 2.5),
    filter: "grayscale(0.125)",
    "&:hover": {
      filter: "grayscale(0)",
    }
  },
  left: { "grid-area": "left-panel" },
  right: { "grid-area": "right-panel" },
  top: { "grid-area": "top-panel" },
  bottom: { "grid-area": "bottom-panel" },
}));

const MuiPanel = withTheme(({
  initialSide = 'left',
  type = "panel",
  showBorders = false,
  icon,
  inList = false,
  isVisible = true,
  handleOnCollapse = () => { },
  uniqueId = "generic",
  color = 'textPrimary',
  width = 700,
  minMaxWidth,
  forceCollapse = false,
  rtl = false,
  embedded = true,
  isExternal = false,
  children,
  title,
  subTitle,
  theme,
  handleOnAnnouncements = () => { },
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [side, setSide] = useState(initialSide);
  const classes = useStyles(theme)



  useEffect(() => {
    if (embedded) {
      handleOnAnnouncements(side, title, icon)
    }
  }, [embedded, side]);

  return (<>
    { isVisible && <Paper
      elevation={0}
      id={`mui-panel-${uniqueId}`}
      className={`${classes[side]} ${classes.root} ${inList && classes.rootInList }`}
      style={isExternal ? {
        borderBottom: '0px',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        ...!embedded && getRtl(rtl, theme),
        ...embedded ? { width: 'auto' } : getWidth(width, minMaxWidth)
      } : {
        ...inList ? { width: 'auto' } : getWidth(width, minMaxWidth),
          borderRadius: "0px",
          flex: isCollapsed ? "0 0 auto" : "1 1 auto",
        ...showBorders && (side === 'left' ? { borderRight: `1px solid ${theme.palette.divider}`} : { borderLeft: `1px solid ${theme.palette.divider}`})
      }}>
      <Tooltip arrow placement="right" title={!embedded ? `Double-Click to ${isCollapsed ? 'expand' : 'minimize'}` : ''}>
        <Box
          justifyContent="space-between"
          onClick={() => { if (inList) { setIsCollapsed((isCollapsed) => !isCollapsed); handleOnCollapse(); } }}
          alignItems="center"
          display="flex"
          className={`${classes.header} ${inList && classes.headerInList}`}>

          <Box
            display="flex"
            alignItems="center"
            style={isCollapsed ? {
              gap: theme.spacing(0.25),
              padding: theme.spacing(1),
            } : {
              gap: theme.spacing(inList ? 0.25 : 1),
            }}>

            {inList && <div className={classes.toolboxButton}>
              {isCollapsed
                ? <ChevronRightIcon style={{ fontSize }} />
                : <ExpandMoreIcon style={{ fontSize }} />}
            </div>}

            {icon && !inList && <>{cloneElement(icon, { color: 'disabled', style: { fontSize: 20 } })}</>}

            <Box className={classes.headerContainer} display="flex" alignItems="center">
                <Typography
                  style={{
                    lineHeight: '0px',
                    fontWeight: inList ? 'bold' : 'normal'
                  }} {...{ color }}
                  variant={inList ? 'caption' : 'button'}
                >
                  {title}
                </Typography>
              {subTitle && <Typography {...{ color }} variant="button">{subTitle}</Typography>}
            </Box>
          </Box>
          <Box display="flex" className={classes.toolbox}>
            {!inList &&
            <Button onClick={() => setSide(side === 'right' ? 'left' : 'right')} disableElevation variant="text" className={classes.toolboxButton} size="small">
              <SwapHorizIcon style={{ fontSize }} />
            </Button>
            }
          </Box>
        </Box>
      </Tooltip>
      {forceCollapse || (!forceCollapse && isCollapsed) ? <></> : <Box className={classes.children}>
        {children}
      </Box>}
    </Paper>
  }
</> )
})
export default MuiPanel;