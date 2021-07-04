import { Box, Button, Paper, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import React, { useState } from 'react';

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
    backgroundColor: 'initial',
    position: "absolute",
  },
  rootEmbedded: {
    border: `1px solid ${theme.palette.augmentColor({ main: theme.palette.divider }).dark}`,
    borderRadius: '0px'
  },
  toolbox: {
    gap: theme.spacing(0.5),
  },
  toolboxButton: {
    padding: "0px",
    minWidth: 'unset'
  },
  headerContainer: {
    gap: theme.spacing(1),
  },
  header: {
    cursor: "pointer",
    position: "relative",
    gap: theme.spacing(1),
    userSelect: "none",
    padding: theme.spacing(1.5, 2),
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'rgba(255,255,255,0.9)',
    backdropFilter: "blur(4px)",
  },
  headerEmbedded: {
    cursor: "default",
    position: "relative",
    gap: theme.spacing(1),
    userSelect: "none",
    padding: theme.spacing(1, 2),
    border: `0px none transparent`,
    backgroundColor: theme.palette.augmentColor({ main: theme.palette.divider }).light,
    boxShadow: theme.shadows[0]
  },
  children: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    filter: "grayscale(0.125)",
    "&:hover": {
      filter: "grayscale(0)",
    }
  }
}));

const MuiPanel = withTheme(({
  icon,
  handleOnCollapse = () => { },
  uniqueId = "generic",
  color = 'textPrimary',
  width = 700,
  minMaxWidth,
  forceCollapse=false,
  rtl = false,
  embedded = false,
  isExternal = false,
  children,
  title,
  subTitle,
  theme
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const classes = useStyles(theme)
  return (
    <Paper
      elevation={0}
      id={`mui-panel-${uniqueId}`}
      className={embedded ? classes.rootEmbedded : classes.root}
      style={isExternal ? {
      borderBottom: '0px',
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: '0px',
      ...!embedded && getRtl(rtl, theme),
      ...embedded ? { width: 'auto' } : getWidth(width, minMaxWidth)
    } : {
      height: "100%",
      borderRadius: "0px"
      }}>
      <Tooltip arrow placement="top" title={!embedded ? `Double-Click to ${isCollapsed ? 'expand' : 'minimize'}` : ''}>
        <Box
          justifyContent="space-between"
          onDoubleClick={() => { setIsCollapsed((isCollapsed) => !isCollapsed); handleOnCollapse(); }}
          alignItems="center"
          display="flex"
          style={isCollapsed ? {
            gap: theme.spacing(0.5),
            padding: theme.spacing(1),
          } : {
            gap: theme.spacing(1),
          }}
          className={`${classes.header} ${embedded && classes.headerEmbedded}`}>
          <Box
            display="flex"
            alignItems="center"
            style={isCollapsed ? {
              gap: theme.spacing(0.75),
          } : {
                gap: theme.spacing(1),
          }}>
            {icon && <>{icon}</>}
            {subTitle
              ? <Box className={classes.headerContainer} display="flex" alignItems="center">
                <Typography {...{ color }} variant="subtitle1">{title}</Typography>
                <Typography {...{ color }} variant="caption">{subTitle}</Typography>
              </Box>
              : <Typography {...{ color }} variant="h6">{title}</Typography>}
          </Box>
          <Box
            display="flex"
            className={classes.toolbox}
          >
            {/* {!embedded && */}
              <Tooltip title={isCollapsed ? 'Expand' : 'Minimize'}>
                <Button disableElevation variant="outlined" className={classes.toolboxButton} size="small">
                  {isCollapsed
                    ? <ArrowDropUpIcon style={{ fontSize }} />
                    : <ArrowDropDownIcon style={{ fontSize }} />}
                </Button>
              </Tooltip>
            {/* } */}
            <Button disableElevation variant="outlined" className={classes.toolboxButton} size="small">
              <SwapHorizIcon style={{ fontSize }} />
            </Button>
          </Box>
        </Box>
      </Tooltip>
      {forceCollapse || (!forceCollapse && isCollapsed) ? <></> : <Box className={classes.children}>
        {children}
      </Box>}
    </Paper>
  )
})
export default MuiPanel;