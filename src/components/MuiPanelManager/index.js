import { Badge, Box, Button, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import SettingsIcon from '@material-ui/icons/Settings';
import TextureIcon from '@material-ui/icons/Texture';
import React, { cloneElement, useContext, useEffect, useState } from 'react';
import DataProvider from '../MuiContextStore';
import MuiPanelSettings from '../MuiPanelSettings';

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    position: "absolute",
    width: "100%",
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
    // right: -3,
    // top: 13,
    // border: `2px solid ${theme.palette.background.paper}`,
    // padding: '0 4px',
  },
  bothGrid: {
    "grid-template-columns": "54px auto 1fr auto 54px",
    "grid-template-areas":`
      "left-menu left-panel main right-panel right-menu"
    `
  },
  leftGrid: {
    "grid-template-columns": "54px auto 1fr",
    "grid-template-areas":`
      "left-menu left-panel main"
    `
  },
  rightRight: {
    "grid-template-columns": "1fr auto 54px",
    "grid-template-areas":`
      "left-menu left-panel main right-panel right-menu"
    `
  },

  bothMenus: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  leftMenu: {
    "grid-area": "left-menu",
    borderRight: `1px solid ${theme.palette.divider}`
  },
  rightMenu: {
    "grid-area": "right-menu",
    borderLeft: `1px solid ${theme.palette.divider}`
  },

  leftPanel: { "grid-area": "left-panel" },
  topMenu: { "grid-area": "top-menu" },
  topPanel: { "grid-area": "top-panel" },
  rightPanel: { "grid-area": "right-panel" },

  bottomPanel: { "grid-area": "bottom-panel" },
  bottomMenu: { "grid-area": "bottom-menu" },
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
  groupButtonMenu: {
    boxShadow: "inset 0px 0px 4px 0px #000"
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
    alignItems: 'stretch'
  },
  leftPanelWrapper: {
    borderLeft: `3px solid ${theme.palette.primary.main}`,
  },
  rightPanelWrapper: {
    borderRight: `3px solid ${theme.palette.primary.main}`,
  }
}));

const MuiPanelManager = withTheme(({
  children,
  theme,
  allowRightClick = false,
}) => {
  const classes = useStyles(theme)
  const [sides, setSides] = useState('both')
  const { layout, setRows, rows, setLayout, handleSetVisible, handlePanelAnnouncement } = useContext(DataProvider);

  // const handleAnnounceNotification = (index, notificationCount) => {
  //   setLayout(layout => layout.map(lo => { if (lo.index !== index) { return { ...lo, notificationCount } } return lo}));
  // }

  const activatePanelOnSide = (index) => {
    const foundObject = layout.find(lo => lo.index === index)
    if (foundObject) {
      setLayout(layout => ([...layout.map(lo => {
        if (lo.side === foundObject.side) {
          return { ...lo, isVisible: lo.index === foundObject.index ? !lo.isVisible : false }
        }
        return lo
      })]));
    }
  }


  useEffect(() => {
    const foundSides = [...new Set(layout.reduce((acc, val) => { acc.push(val.side); return acc }, []))]
    let count = 0;
    setSides(foundSides.length === 1 ? foundSides : 'both')

    layout.forEach(lo => {
      const tmpCount = layout.filter(layoutObject => layoutObject.parentId === lo.uniqueId).length;
      if (tmpCount > count) { count = tmpCount + 1; }
    })
    setRows(count)
    console.log('effect counting sides', count);
  }, [layout]);

  return <div
    onContextMenu={(e) => { !allowRightClick && e.preventDefault() }}
    className={`${classes.root} ${classes[`${sides}Grid`]}`}
    // style={{ gridTemplateRows: `repeat(${maxHeight})` }}
    style={{ 'grid-template-rows': `repeat(${rows}, 1fr)` }}
  >
    {['left', 'right']
      .filter(side => layout.some(lo => lo.side === side))
      .map((side, index) => <>
        {layout.filter(lo => lo.side === side).length > 0 && <div
          className={`${classes[`${side}Menu`]} ${classes.bothMenus}`}
          style={{ 'grid-area': `1 / ${side === 'left' ? 1 : 5} / ${rows + 1} / ${side === 'left' ? 1 : 5}` }}
        >
        <div>
            {layout
              .filter(lo => lo.side === side)
              .filter(lo => !lo.asEmbedded)
              .map(lo => <Tooltip
            arrow
            placement={lo.side}
            enterDelay={1000}
            title={lo.tooltip}>
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
              ${lo.asGroup && classes.groupButtonMenu}
              ${classes[`${side}ButtonMenu`]}
              ${lo.isVisible && classes[`${side}ActiveButtonMenu`]}
            `}
            >
              <Badge
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                badgeContent={4}
                invisible={!lo.showBadge}
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
          )}
        </div>
        {index === 0 && <div>
          <MuiPanelSettings />
        </div>}
      </div>}
    </>)}
    {children.map((child, i) => cloneElement(child, { key: i, style: { "grid-area": `1 / 3 / ${rows + 1} / 4`}}))}
  </div>
})
export default MuiPanelManager;