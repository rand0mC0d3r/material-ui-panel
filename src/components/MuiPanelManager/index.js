import { Badge, Button, Tooltip } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import SettingsIcon from '@material-ui/icons/Settings';
import React, { cloneElement, useEffect, useState } from 'react';
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
  const [layout, setLayout] = useState([])
  const [sides, setSides] = useState('both')

  const handleAnnounceSelf = (index, side, title, icon) => {
    setLayout(layout => [
      ...layout.filter(lo => lo.index !== index),
      { showBadge: false, variant: 'dot', isVisible: false, index, side, title, icon: icon ? icon : <NotInterestedIcon  /> }
    ]);
  }

  const activatePanelOnSide = (index) => {
    const foundObject = layout.find(lo => lo.index === index)
    if (foundObject) {
      setLayout((layout) => ([...layout.map(lo => {
        if (lo.side === foundObject.side) {
          return { ...lo, isVisible: lo.index === foundObject.index ? !lo.isVisible : false }
        }
        return lo
      })]));
    }
  }


  useEffect(() => {
    if (layout.length > 0) {
      const foundSides = [...new Set(layout.reduce((acc, val) => { acc.push(val.side); return acc }, []))]
      if (foundSides.length === 1) {
        setSides(foundSides)
      } else {
        setSides('both')
      }
    }

    localStorage.setItem(
      'layout',
      JSON.stringify(layout.map(({ index, side, title }) => { return { index, side, title }; })))
  }, [layout]);

  return <div
    onContextMenu={(e) => { !allowRightClick && e.preventDefault() }}
    className={`${classes.root} ${classes[`${sides}Grid`]}`}
  >
    {['left', 'right']
      .filter(side => layout.some(lo => lo.side === side))
      .map((side, index) => <>
      {layout.filter(lo => lo.side === side).length > 0 && <div className={`${classes[`${side}Menu`]} ${classes.bothMenus}`}>
        <div>
          {layout.filter(lo => lo.side === side).map(lo => <Tooltip
            arrow
            placement={lo.side}
            enterDelay={1000}
            exitDelay={0}
            title={lo.title}>
            <Button
              disableRipple
              disableElevation
              onClick={() => activatePanelOnSide(lo.index)}
              variant="outlined"
              fullWidth
              className={`
              ${classes.buttonMenu}
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
                {cloneElement(lo.icon, { className: classes.iconButton, color: lo.isVisible ? "primary" : "action" })}
                </Badge>
              </Button>
          </Tooltip>
          )}
        </div>
        {index === 0 && <div>
          <MuiPanelSettings />
        </div>}
      </div>}
    </>)}


    {children
      .filter(child => child.props.title)
      .map((child, i) => {
      return cloneElement(
        child, {
        key: i,
        width: 500,
        showBorders: true,
        isVisible: layout.length > 0 ? layout.find(lo => lo.index === i).isVisible : false,
        handleOnAnnouncements: (side, title, icon) => handleAnnounceSelf(i, side, title, icon),
      })
    })}

    {children.filter(child => !child.props.title).map((child, i) => {
        return cloneElement( child, { key: i, className: classes.main})
    })}
  </div>
})
export default MuiPanelManager;
