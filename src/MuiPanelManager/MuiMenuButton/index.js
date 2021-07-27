import { Badge, Box, Button, Select, Tooltip } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import React, { cloneElement, Fragment, useContext, useEffect, useState } from 'react';
import MuiPanelSettings from '../../MuiPanelSettings';
import DataProvider from '../../MuiPanelStore';

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    position: "absolute",
    width: "100%",
    overflow: "hidden",
    display: "grid",
    "grid-template-rows": "1fr",
    "gap": "0px 0px",
    "grid-auto-flow": "row",
    backgroundColor: theme.palette.background.default,
  },
  toolboxButton: {
  },
  shortText: {
    fontSize: '10px',
    width: '40px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  badge: {
    "& .MuiBadge-badge": {
      border: `2px solid ${theme.palette.background.paper}`,
      width: '24px',
      fontSize: '11px',
      height: '16px',
      minWidth: '24px',
      right: '2px',
      top: '0%',
      bottom: 'unset',
    },
  },
  bothGrid: {
    "grid-template-columns": `54px auto 1fr auto 54px`,
    "grid-template-areas":`
      "leftMenu leftPanel main rightPanel rightMenu"
    `
  },
  leftGrid: {
    "grid-template-columns": `54px auto 1fr`,
    "grid-template-areas":`
      "leftMenu leftPanel main"
    `
  },
  rightRight: {
    "grid-template-columns": `1fr auto 54px`,
    "grid-template-areas":`
      "leftMenu leftPanel main rightPanel rightMenu"
    `
  },

  bothMenus: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  leftMenu: {
    "grid-area": "leftMenu",
    borderRight: `1px solid ${theme.palette.divider}`
  },
  rightMenu: {
    "grid-area": "rightMenu",
    borderLeft: `1px solid ${theme.palette.divider}`
  },

  panelContainer: {
    position: "relative",
    overflow: 'scroll',

    display: 'flex',
    flexDirection: 'column',
  },
  leftPanel: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  rightPanel: {
    borderLeft: `1px solid ${theme.palette.divider}`,
  },
  main: { "grid-area": "main" },
  iconButton: {
    fontSize: "26px",

    // "&:hover": {
    //   color: theme.palette.text.primary,
    //   opacity: "0.95",
    // }
  },
  buttonMenu: {
    border: "0px none",
    padding: theme.spacing(2, 0),
    borderRadius: "0px",
    opacity: "0.55",
    minWidth: "initial",

    "&:hover": {
      color: theme.palette.text.primary,
      opacity: "0.9",
    }
  },
  rightGroupButtonMenu: {
    position: 'relative',
    "&::after": {
      content: '"."',
      backgroundColor: theme.palette.divider,
      color: theme.palette.divider,
      position: 'absolute',
      fontSize: '4px',
      lineHeight: "12px",
      width: '4px',
      top: 24,
      borderRadius: "0px 4px 4px 0px",
      left: 0,
    },
  },
  leftGroupButtonMenu: {
    position: 'relative',
    "&::after": {
      content: '"."',
      backgroundColor: theme.palette.divider,
      color: theme.palette.divider,
      position: 'absolute',
      width: '4px',
      top: 24,
      borderRadius: "4px 0px 0px 4px",
      right: 0,
      lineHeight: '12px',
      fontSize: '4px'
    },
  },
  modalTitle: {
    width: '200px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: '8px',
    fontSize: '12px',
    backgroundColor: theme.palette.divider,
  },
  rightButtonMenu: {
    borderLeft: "3px solid transparent",
  },
  leftButtonMenu: {
    borderRight: "3px solid transparent"
  },
  rightActiveButtonMenu: {
    borderLeft: `3px solid ${theme.palette.text.primary}`,
    opacity: "1",
  },
  leftActiveButtonMenu: {
    borderRight: `3px solid ${theme.palette.text.primary}`,
    opacity: "1",
  },
  panelWrapper: {
    display: 'flex',
    // alignItems: 'stretch'
  },
  panelContent: {
    padding: "16px",
  },
  leftPanelWrapper: {
    borderRight: `3px solid ${theme.palette.primary.main}`,
  },
  rightPanelWrapper: {
    borderLeft: `3px solid ${theme.palette.primary.main}`,
  }
}));

const MuiMenuButton = withTheme(({
  lo,
  side,
  theme,
}) => {
  const classes = useStyles(theme)
  const { layout, handleSetAsEmbedded, handleSetVisible, handleSetAsGroup, handleUnSetAsEmbedded, handleSetSide } = useContext(DataProvider);

 const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setAnchorEl(null);
  }, [lo])

  const open = Boolean(anchorEl);
  const id = open ? `simple-popover-${lo.uniqueId}` : undefined;

  return <>
    <Tooltip
      arrow
      key={lo.index}
      placement={lo.side}
      enterDelay={1000}
      title={`${lo.tooltip} ${lo.notificationCount > 0 ? ` - Notifications: ${lo.notificationCount}` : ''}`}
    >
      <span>
        <Button
          aria-describedby={id}
          disableRipple
          onContextMenu={(e) => handleClick(e)}
          disableElevation
          disabled={lo.noPanel}
          onClick={() => !lo.noPanel && handleSetVisible({ uniqueId: lo.uniqueId })}
          variant="text"
          fullWidth
          className={`
          ${classes.buttonMenu}
          ${lo.asGroup && classes[`${side}GroupButtonMenu`]}
          ${classes[`${side}ButtonMenu`]}
          ${lo.isVisible && classes[`${side}ActiveButtonMenu`]}
        `}
        >
          <Badge
            max={9}
            className={classes.badge}
            anchorOrigin={{ vertical: 'bottom', horizontal: side !== 'right' ? 'right' : 'left' }}
            badgeContent={lo.notificationCount}
            color={lo.notificationColor}
            variant={lo.variant}
          >
            <Box display="flex" alignItems="center" flexDirection="column">
              {lo.showIcon && cloneElement(lo.icon, { className: classes.iconButton, color: lo.isVisible ? "action" : "initial" })}
              {lo.shortText && <div className={classes.shortText}>{lo.shortText}</div>}
            </Box>
          </Badge>
        </Button>
      </span>
    </Tooltip>
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'center',
        horizontal: side !== 'right' ? 'right' : 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: side !== 'right' ? 'left' : 'right',
      }}
    >
      <div className={ classes.modalTitle}>{lo.tooltip}</div>
      <Box
        style={{ gap: '8px', padding: '8px'}}
        display="flex"
        flexDirection="column"
        alignItems="center">

        {!lo.asEmbedded && <Button
          size="small"
          fullWidth
          onClick={() => handleSetSide({ uniqueId: lo.uniqueId })}
          variant="outlined"
          startIcon={<SwapHorizIcon style={{ fontSize: 20 }} />}
          className={classes.toolboxButton}>
            Switch sides
        </Button>}

        {!lo.asEmbedded
          ? <Button
            onClick={() => handleSetAsGroup({ uniqueId: lo.uniqueId })}
            variant="outlined"
            size="small"
            fullWidth
            startIcon={ lo.asGroup ? <ViewStreamIcon /> : <WebAssetIcon /> }
            className={classes.toolboxButton}>
              {lo.asGroup ? 'as Individual' : 'as Group' }
            </Button>
          : <Button
            onClick={() => handleUnSetAsEmbedded({ uniqueId: lo.uniqueId })}
            size="small"
            startIcon={<AddToHomeScreenIcon />}
            variant="outlined" className={classes.toolboxButton}>
              Promote
          </Button>}

        {!lo.asEmbedded && !lo.asGroup && <Select
          fullWidth
          disabled={lo.asGroup || !layout.some(lo => lo.asGroup)}
          onChange={(event) => { handleSetAsEmbedded({ uniqueId: lo.uniqueId, parentId: event.target.value }) }}>
            {layout.filter(lo => lo.asGroup).map(lo => <MenuItem value={lo.uniqueId}>
              <Box display="flex" style={{gap: "16px"}}>{lo.icon} {lo.title}</Box>
            </MenuItem>)}
        </Select>}

        </Box>
      </Popover>
    </>
})
export default MuiMenuButton;
