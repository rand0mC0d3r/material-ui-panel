import { Box, Button, Paper, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RemoveIcon from '@material-ui/icons/Remove';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import React, { cloneElement, useEffect, useState } from 'react';


const fontSize = 20;

const useStyles = makeStyles(theme => ({
  left: { "grid-area": "left-panel" },
  right: { "grid-area": "right-panel" },
    toolbox: {
      gap: theme.spacing(0.5),
    },
      toolboxButton: {
        padding: "0px",
        width: '20px',
        minWidth: '20px',
        lineHeight: '0px'
      },
      headerContainer: {
        gap: theme.spacing(1),
      },
      header: {
        cursor: "default",
        position: "relative",
        gap: theme.spacing(1),
        userSelect: "none",
        padding: theme.spacing(1.5, 2.5),
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: 'rgba(255,255,255,0.9)',
        backdropFilter: "blur(4px)",
      },
      headerInList: {
        cursor: "pointer",
        position: "relative",
        gap: theme.spacing(1),
        userSelect: "none",
        padding: theme.spacing(0.5, 1, 0.5, 0),
        border: `0px none transparent`,
        backgroundColor: theme.palette.augmentColor({ main: theme.palette.divider }).light,
        boxShadow: theme.shadows[0]
      },
}));

const MuiDivider = withTheme(({
  initialSide = 'left',
  title,
  theme,
  handleOnAnnouncements = () => { },
}) => {
  const [side, setSide] = useState(initialSide);
  useEffect(() => {  handleOnAnnouncements(side, title, <RemoveIcon />, true) }, [side]);
  return null
})

export default MuiDivider;