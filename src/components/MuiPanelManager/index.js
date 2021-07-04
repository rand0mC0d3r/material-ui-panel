import { Box, Button, Paper, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import React, { cloneElement, useState } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    "grid-template-columns": "1fr 1fr 1fr",
    "grid-template-rows": "1fr 1fr 1fr",
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
  top: { "grid-area": "top" },
  bottom: { "grid-area": "bottom" },

}));


const MuiPanelManager = withTheme(({
  icon,
  handleOnCollapse = () => { },
  uniqueId = "generic",
  color = 'textPrimary',
  width = 700,
  minMaxWidth,
  forceCollapse=false,
  rtl = false,
  embedded = false,
  isExternal = false,
  children,
  title,
  subTitle,
  theme
}) => {
  const classes = useStyles(theme)
  return (
    <div className={classes.root}>
      {children.map((child, i) => {
        console.log(child.props);
        if (child.props.initialSide) {
          return cloneElement(child, { key: i, embedded: "true", className: classes[child.props.initialSide] })
        }
        return cloneElement(child, { key: i })
      })}
    </div>
  )
})
export default MuiPanelManager;


// .container {
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-template-rows: 1fr 1fr 1fr;
//   gap: 0px 0px;
//   grid-auto-flow: row;
//   grid-template-areas:
//     "left top right"
//     "left main right"
//     "left bottom right";
// }

// .left { grid-area: left; }

// .right { grid-area: right; }

// .top { grid-area: top; }

// .bottom { grid-area: bottom; }

// .main { grid-area: main; }
