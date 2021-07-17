import { Box, Button, Paper, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import React, { cloneElement, useContext, useEffect, useState } from 'react';
import DataProvider from '../MuiContextStore';
const fontSize = 20;

const useStyles = makeStyles(theme => ({

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

const MuiPanel = withTheme(({
  iconInHeader = true,
  icon,
  uniqueId,
  inList = false,
  handleOnCollapse = () => { },
  color = 'textPrimary',
  embedded = true,
  title,
  subTitle,
  isCollapsed,
  setIsCollapsed = () => { },
  theme,
}) => {
  const classes = useStyles(theme)
  const { handleSetAsGroup, handleSetSide } = useContext(DataProvider);

  return <Tooltip arrow placement="right" title={!embedded ? `Double-Click to ${isCollapsed ? 'expand' : 'minimize'}` : ''}>
    <Box
      justifyContent="space-between"
      onClick={() => { if (inList) { setIsCollapsed((isCollapsed) => !isCollapsed); handleOnCollapse(); } }}
      alignItems="center"
      display="flex"
      className={`${classes.header} ${inList && classes.headerInList}`}>

      <Box
        display="flex"
        alignItems="center"
        style={{gap: theme.spacing(inList ? 0.25 : 1)}}>

        {inList && <div className={classes.toolboxButton}>
          {isCollapsed
            ? <ChevronRightIcon style={{ fontSize }} />
            : <ExpandMoreIcon style={{ fontSize }} />}
        </div>}

        {iconInHeader && icon !== undefined && !inList && <>{cloneElement(icon, { color: 'disabled', style: { fontSize: 20 } })}</>}

        <Box className={classes.headerContainer} display="flex" alignItems="center">
            <Typography
              style={{
                fontWeight: inList ? 'bold' : 'normal'
              }} {...{ color }}
              variant={inList ? 'caption' : 'button'}
            >
              {title}
            </Typography>
          {subTitle && <Typography color="textSecondary" variant="caption">{subTitle}</Typography>}
        </Box>
      </Box>
      <Box display="flex" className={classes.toolbox}>
        {!inList &&
          <Button onClick={() => handleSetSide({ uniqueId })} disableElevation variant="text" className={classes.toolboxButton} size="small">
          <SwapHorizIcon style={{ fontSize }} />
        </Button>
        }
        <Button onClick={() => handleSetAsGroup({ uniqueId })} disableElevation variant="text" className={classes.toolboxButton} size="small">
          <ViewStreamIcon />
        </Button>
      </Box>
    </Box>
  </Tooltip>
})

export default MuiPanel;