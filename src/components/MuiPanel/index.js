import { Box, Paper } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import TextureIcon from '@material-ui/icons/Texture';
import React, { useContext, useEffect, useState } from 'react';
import DataProvider from '../MuiContextStore';
import MuiPanelHeader from '../MuiPanelHeader';

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
  root: {},
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
    borderTop: `1px solid ${theme.palette.divider}`,
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
    },

  },
  left: { "grid-area": "left-panel" },
  right: { "grid-area": "right-panel" },
  top: { "grid-area": "top-panel" },
  bottom: { "grid-area": "bottom-panel" },
}));

const MuiPanel = withTheme(({
  initialSide = 'left',
  iconInHeader = true,
  icon,
  inList = false,
  width = 550,
  minMaxWidth,
  forceCollapse = false,
  rtl = false,
  embedded = true,
  isExternal = false,
  children,
  title,
  subTitle,
  notificationCount = 0,
  theme,
}) => {
  const [receivedUniqueId, setReceivedUniqueId] = useState();
  const [currentSettings, setCurrentSettings] = useState();
  const [currentPosition, setCurrentPosition] = useState(0);
  const classes = useStyles(theme)

  const { layout, rows, handlePanelAlerts, handlePanelAnnouncement } = useContext(DataProvider);

  useEffect(() => {
    setReceivedUniqueId(handlePanelAnnouncement({ children, iconInHeader, subTitle, side: initialSide, title, tooltip: title, icon: icon ? icon: <TextureIcon /> }))
  }, []);

  useEffect(() => {
    if (receivedUniqueId) {
      handlePanelAlerts({ uniqueId: receivedUniqueId, notificationCount });
    }
  }, [notificationCount, receivedUniqueId]);

  useEffect(() => {
    if (receivedUniqueId) {
      setCurrentSettings(layout.find(layoutObject => layoutObject.uniqueId === receivedUniqueId));
    }
  }, [layout, receivedUniqueId]);

  useEffect(() => {
    if (receivedUniqueId && currentSettings) {
      const keysRelevant = layout
        .filter(lo => lo.parentId === currentSettings.parentId || lo.uniqueId === currentSettings.parentId)
        .map(lo => lo.uniqueId);
      setCurrentPosition(keysRelevant.indexOf(receivedUniqueId))
    }
  }, [layout, receivedUniqueId, currentSettings]);

  return null;

  // <>
  //   {currentSettings && currentSettings.isVisible &&
  //   <Paper
  //     elevation={0}
  //     className={`${classes.root} ${inList && classes.rootInList }`}
  //     style={isExternal ? {
  //       borderBottom: '0px',
  //       borderBottomLeftRadius: '0px',
  //       borderBottomRightRadius: '0px',
  //       ...!embedded && getRtl(rtl, theme),
  //       ...embedded ? { width: 'auto' } : getWidth(width, minMaxWidth)
  //     } : {
  //         alignSelf:  currentSettings.isCollapsed ? 'flex-start' : 'stretch',
  //         gridArea: currentSettings.asGroup
  //           ? `1 / ${currentSettings.side === 'left' ? 2 : 4} / 1 / ${currentSettings.side === 'left' ? 2 : 4}`
  //           : currentSettings.asEmbedded
  //             ? `${currentPosition+1} / ${currentSettings.side === 'left' ? 2 : 4} / ${currentPosition+1} / ${currentSettings.side === 'left' ? 2 : 4}`
  //             : `1 / ${currentSettings.side === 'left' ? 2 : 4} / ${rows+1} / ${currentSettings.side === 'left' ? 2 : 4}`,
  //       ...inList ? { width: 'auto' } : getWidth(width, minMaxWidth),
  //         borderRadius: "0px",
  //         // flex: currentSettings.isCollapsed ? "0 0 auto" : "1 1 auto",
  //       ...currentSettings.side === 'left' ? { borderRight: `1px solid ${theme.palette.divider}`} : { borderLeft: `1px solid ${theme.palette.divider}`}
  //   }}
  // >
  //   <MuiPanelHeader {...{ uniqueId: receivedUniqueId, title, subTitle, icon, iconInHeader, currentSettings, inList, setIsCollapsed: () => { }, isCollapsed: currentSettings.isCollapsed }} />
  //     {!(forceCollapse || (!forceCollapse && currentSettings.isCollapsed)) && <Box className={classes.children}>{children}</Box>}
  //   </Paper>
  //   }
  // </>
})
export default MuiPanel;