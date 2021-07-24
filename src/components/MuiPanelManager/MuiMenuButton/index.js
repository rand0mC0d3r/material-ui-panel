import { Badge, Box, Button, Tooltip } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import React, { cloneElement, Fragment, useContext, useEffect, useState } from 'react';
import DataProvider from '../../MuiContextStore';
import MuiPanelSettings from '../../MuiPanelSettings';

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
  shortText: {
    fontSize: '10px',
    width: '40px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
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

    "&:hover": {
      color: theme.palette.primary.main,
    }
  },
  buttonMenu: {
    border: "0px none",
    padding: theme.spacing(2, 0),
    borderRadius: "0px",
    minWidth: "initial",
  },
  rightGroupButtonMenu: {
    position: 'relative',
    "&::after": {
      content: '"G"',
      backgroundColor: "#CCC",
      position: 'absolute',
      fontSize: "8px",
      lineHeight: "12px",
      width: '12px',
      top: 2,
      borderRadius: "4px",
      left: 2,
    },
  },
  leftGroupButtonMenu: {
    position: 'relative',
    "&::after": {
      content: '"G"',
      backgroundColor: "#CCC",
      position: 'absolute',
      fontSize: "8px",
      lineHeight: "12px",
      width: '10px',
      top: 2,
      borderRadius: "4px",
      right: 2,
    },
  },
  rightButtonMenu: {
    borderRight: "3px solid transparent",
  },
  leftButtonMenu: {
    borderLeft: "3px solid transparent"
  },
  rightActiveButtonMenu: {
    borderRight: `3px solid ${theme.palette.primary.main}`,
  },
  leftActiveButtonMenu: {
    borderLeft: `3px solid ${theme.palette.primary.main}`,
  },
  panelWrapper: {
    display: 'flex',
    // alignItems: 'stretch'
  },
  panelContent: {
    padding: "16px",
  },
  leftPanelWrapper: {
    borderLeft: `3px solid ${theme.palette.primary.main}`,
  },
  rightPanelWrapper: {
    borderRight: `3px solid ${theme.palette.primary.main}`,
  }
}));

const MuiMenuButton = withTheme(({
  lo,
  side,
  theme,
}) => {
  const classes = useStyles(theme)
  const { handleSetVisible } = useContext(DataProvider);

  return <Tooltip
      arrow
      key={lo.index}
      placement={lo.side}
      enterDelay={1000}
      title={lo.tooltip}
    >
      <span>
        <Button
          disableRipple
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
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={lo.notificationCount}
            color="primary"
            variant={lo.variant}
          >
            <Box display="flex" alignItems="center" flexDirection="column">
              {lo.showIcon && cloneElement(lo.icon, { className: classes.iconButton, color: lo.isVisible ? "primary" : "action" })}
              {lo.shortText && <div className={classes.shortText}>{lo.shortText}</div>}
            </Box>
          </Badge>
        </Button>
      </span>
    </Tooltip>
})
export default MuiMenuButton;