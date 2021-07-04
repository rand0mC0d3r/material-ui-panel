import { Button, Tooltip } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import React, { cloneElement, useEffect, useState } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    position: "absolute",
    width: "100%",
    display: "grid",
    "grid-template-columns": "54px auto 1fr auto 54px",
    "grid-template-rows": "1fr",
    "gap": "0px 0px",
    "grid-auto-flow": "row",
    "grid-template-areas":`
      "left-menu left-panel main right-panel right-menu"
      `
  },
  leftMenu: {
    "grid-area": "left-menu",
    borderRight: `1px solid ${theme.palette.divider}`
  },
  leftPanel: { "grid-area": "left-panel" },
  topMenu: { "grid-area": "top-menu" },
  topPanel: { "grid-area": "top-panel" },
  rightPanel: { "grid-area": "right-panel" },
  rightMenu: {
    "grid-area": "right-menu",
    borderLeft: `1px solid ${theme.palette.divider}`
  },
  bottomPanel: { "grid-area": "bottom-panel" },
  bottomMenu: { "grid-area": "bottom-menu" },
  main: { "grid-area": "main" },

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
  }
}));

const MuiPanelManager = withTheme(({
  children,
  theme
}) => {
  const classes = useStyles(theme)
  const [layout, setLayout] = useState([])

  const handleAnnounceSelf = (index, side, title, icon) => {
    setLayout((layout) => ([ ...layout, { isVisible: false, index, side, title, icon } ]));
  }

  const activatePanelOnSide = (index) => {
    const foundObject = layout.find(lo => lo.index === index)
    if (foundObject) {
      setLayout((layout) => ([...layout.map(lo => {
            if (lo.side === foundObject.side) {
              return {...lo, isVisible: lo.index === foundObject.index}
            }
        return lo
      }) ]));
    }
  }

  useEffect(() => {
    console.log(layout)
  }, [layout]);

  return <div className={classes.root}>
    {['left', 'right'].map(side => <>
      {layout.filter(lo => lo.side === side).length > 0 && <div className={classes[`${side}Menu`]}>
        {layout.filter(lo => lo.side === side).map(lo => <Tooltip arrow placement={lo.side} title={`Switch to ${lo.title}`}>
          <Button
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
            {cloneElement(lo.icon, { color: lo.isVisible ? "primary" : "action"})}
          </Button>
          </Tooltip>
        )}
      </div>}
    </>)}

    {children.map((child, i) => {
      if (child.props.title) {
        return cloneElement( child, { key: i, isVisible: layout.length > 0 ? layout.find(lo => lo.index === i).isVisible : false, handleOnAnnouncements: (side, title, icon) => handleAnnounceSelf(i, side, title, icon),})
      } else {
        return cloneElement( child, { key: i, className: classes.main})
      }
    })}

  </div>
})
export default MuiPanelManager;
