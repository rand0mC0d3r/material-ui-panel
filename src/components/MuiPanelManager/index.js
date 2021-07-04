import { Button } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import React, { cloneElement, useEffect, useState } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    position: "absolute",
    width: "100%",
    display: "grid",
    "grid-template-columns": "1fr 3fr 1fr",
    "grid-template-rows": "1fr 3fr 1fr",
    "gap": "0px 0px",
    "grid-auto-flow": "row",
    "grid-template-areas":`
      "left top right"
      "left main right"
      "left bottom right"
      `
  },
  left: { "grid-area": "left" },
  right: { "grid-area": "right" },
  top: { "grid-area": "top", "display":"flex" },
  bottom: { "grid-area": "bottom" },
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
      <Button className={classes[layoutObject.side]}>
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
