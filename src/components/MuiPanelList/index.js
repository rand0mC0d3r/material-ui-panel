import { Box, Button, Paper, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import React, { cloneElement, useEffect, useState } from 'react';
import MuiPanelHeader from '../MuiPanelHeader';

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
    // border: `1px solid ${theme.palette.augmentColor({ main: theme.palette.divider }).dark}`,
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
    padding: theme.spacing(2, 2),
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  headerEmbedded: {
    cursor: "default",
    position: "relative",
    gap: theme.spacing(1),
    userSelect: "none",
    padding: theme.spacing(1.5, 2.5),
    border: `0px none transparent`,
    boxShadow: theme.shadows[0]
  },
  children: {
    backgroundColor: theme.palette.background.paper,
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  left: { "grid-area": "left-panel" },
  right: { "grid-area": "right-panel" },
  top: { "grid-area": "top-panel" },
  bottom: { "grid-area": "bottom-panel" },
}));

const MuiPanel = withTheme(({
  initialSide = 'left',
  iconInHeader = true,
  type = "panel",
  icon,
  isVisible = true,
  showBorders = false,
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
      className={`${classes[side]} ${embedded ? classes.rootEmbedded : classes.root}`}
      style={isExternal ? {
        borderBottom: '0px',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        ...!embedded && getRtl(rtl, theme),
        ...embedded ? { width: 'auto' } : getWidth(width, minMaxWidth)
      } : {
        ...getWidth(width, minMaxWidth),
          borderRadius: "0px",
          display: 'flex',
          flexDirection: 'column',
        ...showBorders && (side === 'left' ? { borderRight: `1px solid ${theme.palette.divider}`} : { borderLeft: `1px solid ${theme.palette.divider}`})
      }}>
      <MuiPanelHeader {...{ title, subTitle, icon, iconInHeader, side, setSide, setIsCollapsed, isCollapsed }} />
      {forceCollapse || (!forceCollapse && isCollapsed) ? <></> : <Box className={classes.children}>
        {children.map((child, i) => {
        return cloneElement( child, { key: i, inList: "true"})
        })}
      </Box>}
    </Paper>
  }
</> )
})
export default MuiPanel;