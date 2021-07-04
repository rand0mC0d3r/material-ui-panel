import { Box, Button, Paper, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import React, { cloneElement, useState } from 'react';

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

  const handleAnnounceSelf = (side) => {
    console.log(side)
  }
  return (
    <div className={classes.root}>
      {children.map((child, i) => {
        console.log(child.props);
        return cloneElement(
          child,
          {
            key: i,
            embedded: "true",
            handleAnnouncements: (side) => handleAnnounceSelf(side),
            className: classes[child.props.initialSide]
          })
      })}
    </div>
  )
})
export default MuiPanelManager;
