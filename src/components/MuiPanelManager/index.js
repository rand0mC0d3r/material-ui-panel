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
}));

const MuiPanelManager = withTheme(({
  children,
  theme
}) => {
  const classes = useStyles(theme)
  const [layout, setLayout] = useState([])

  const handleAnnounceSelf = (index, side) => {
    // console.log("index", index, side, [...layout, { index, side } ])
    setLayout((layout) => ([ ...layout, { index, side } ]));

  }

  useEffect(() => {
    console.log(layout)
  }, [layout]);

  return <div className={classes.root}>
    {children.map((child, i) => {
      console.log(child.props);
      return cloneElement(
        child,
        {
          key: i,
          handleOnAnnouncements: (side) => handleAnnounceSelf(i, side),
        })
    })}
  </div>
})
export default MuiPanelManager;
