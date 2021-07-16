import { Button, Tooltip } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import React, { cloneElement, useEffect, useState } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    position: "absolute",
    width: "100%",
    display: "grid",
    "grid-template-rows": "1fr",
    "gap": "0px 0px",
    "grid-auto-flow": "row",
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
  const [sides, setSides] = useState('both')

  const handleAnnounceSelf = (index, side, title, icon) => {
    setLayout((layout) => ([ ...layout.filter(lo => lo.index !== index), { isVisible: false, index, side, title, icon } ]));
  }

  const activatePanelOnSide = (index) => {
    const foundObject = layout.find(lo => lo.index === index)
    if (foundObject) {
      setLayout((layout) => ([...layout.map(lo => {
            if (lo.side === foundObject.side) {
              return {...lo, isVisible: lo.index === foundObject.index ? !lo.isVisible : false}
            }
        return lo
      }) ]));
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
  }, [layout]);

  return <div className={`${classes.root} ${classes[`${sides}Grid`]}`}>
    {['left', 'right'].filter(side => layout.some(lo => lo.side === side)).map(side => <>
      {layout.filter(lo => lo.side === side).length > 0 && <div className={classes[`${side}Menu`]}>
        {layout.filter(lo => lo.side === side).map(lo => <Tooltip
          arrow
          placement={lo.side}
          title={`${lo.title} ${lo.isVisible ? '(Activated)' : '- click to activate'}`}>
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
        return cloneElement( child, { key: i, width: 500, isVisible: layout.length > 0 ? layout.find(lo => lo.index === i).isVisible : false, handleOnAnnouncements: (side, title, icon) => handleAnnounceSelf(i, side, title, icon),})
      } else {
        return cloneElement( child, { key: i, className: classes.main})
      }
    })}

  </div>
})
export default MuiPanelManager;
