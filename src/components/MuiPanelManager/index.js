import { Button } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import React, { cloneElement, useEffect, useState } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    position: "absolute",
    width: "100%",
    display: "grid",
    "grid-template-columns": "50px 1fr 3fr 1fr 50px",
    "grid-template-rows": "50px 1fr 3fr 1.1fr 50px",
    "gap": "0px 0px",
    "grid-auto-flow": "row",
    "grid-template-areas":`
      "left-menu left-panel top-menu right-panel right-menu"
      "left-menu left-panel top-panel right-panel right-menu"
      "left-menu left-panel . right-panel right-menu"
      "left-menu left-panel bottom-panel right-panel right-menu"
      "left-menu left-panel bottom-menu right-panel right-menu";
      `
  },
  leftMenu: { "grid-area": "left-menu" },
  leftPanel: { "grid-area": "left-panel" },
  topMenu: { "grid-area": "top-menu" },
  topPanel: { "grid-area": "top-panel" },
  rightPanel: { "grid-area": "right-panel" },
  rightMenu: { "grid-area": "right-menu" },
  bottomPanel: { "grid-area": "bottom-panel" },
  bottomMenu: { "grid-area": "bottom-menu" },
}));

const MuiPanelManager = withTheme(({
  children,
  theme
}) => {
  const classes = useStyles(theme)
  const [layout, setLayout] = useState([])

  const handleAnnounceSelf = (index, side, title, icon) => {
    setLayout((layout) => ([ ...layout, { index, side, title, icon } ]));
  }

  useEffect(() => {
    console.log(layout)
  }, [layout]);

  return <div className={classes.root}>

    {layout.length > 0 && layout.map(layoutObject =>
      <Button className={classes[`${layoutObject.side}Menu`]}>
        {layoutObject.side}
      </Button>
    )}
    {children.map((child, i) => {
      return cloneElement(
        child,
        {
          key: i,
          handleOnAnnouncements: (side, title, icon) => handleAnnounceSelf(i, side, title, icon),
        })
    })}

  </div>
})
export default MuiPanelManager;
