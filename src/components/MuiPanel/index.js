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
    position: "absolute",
  },
  rootEmbedded: {
    border: `1px solid ${theme.palette.augmentColor({ main: theme.palette.divider }).dark}`,
    borderRadius: '0px'
  },
  toolbox: {
    position: "absolute",
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
    backgroundColor: theme.palette.augmentColor({ main: theme.palette.divider }).light,
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
    padding: theme.spacing(2),
  }
}));

const MuiPanel = withTheme(({
  icon,
  uniqueId = "generic",
  color = 'textPrimary',
  width = 700,
  minMaxWidth,
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
          onDoubleClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}
          alignItems="center"
          display="flex"
          className={`${classes.header} ${embedded && classes.headerEmbedded}`}>
            {icon && <>{icon}</>}
            {subTitle
              ? <Box className={classes.headerContainer} display="flex" alignItems="center">
                <Typography {...{ color }} variant="subtitle1">{title}</Typography>
                <Typography {...{ color }} variant="caption">{subTitle}</Typography>
              </Box>
              : <Typography {...{ color }} variant="h6">{title}</Typography>}
          <Box
            display="flex"
            className={classes.toolbox}
            style={isExternal ? {
              top: theme.spacing(2),
              right: theme.spacing(2),
            } : {}}
          >
            {!embedded &&
              <Tooltip title={isCollapsed ? 'Expand' : 'Minimize'}>
                <Button disableElevation variant="outlined" className={classes.toolboxButton} size="small">
                  {isCollapsed
                    ? <ArrowDropUpIcon style={{ fontSize }} />
                    : <ArrowDropDownIcon style={{ fontSize }} />}
                </Button>
              </Tooltip>
            }
            <Button disableElevation variant="outlined" className={classes.toolboxButton} size="small">
              <SwapHorizIcon style={{ fontSize }} />
            </Button>
          </Box>
        </Box>
      </Tooltip>
      {(embedded || (!embedded && !isCollapsed)) && <Box className={classes.children}>
        {children}
      </Box>}
    </Paper>
  )
})
export default MuiPanel;