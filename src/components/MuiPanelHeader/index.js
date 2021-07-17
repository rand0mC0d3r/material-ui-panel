import { Box, Button, MenuItem, Paper, Select, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import React, { cloneElement, useContext, useEffect, useState } from 'react';
import DataProvider from '../MuiContextStore';
const fontSize = 20;

const useStyles = makeStyles(theme => ({

    toolbox: {
      gap: theme.spacing(1),
    },
      toolboxButton: {
        padding: "0px",
        width: '28px',
        minWidth: '28px',
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
        borderTop: `1px solid ${theme.palette.divider}`,
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
  inList = false,
  handleOnCollapse = () => { },
  color = 'textPrimary',
  embedded = true,
  title,
  subTitle,
  asGroup,
  currentSettings,
  isCollapsed,
  setIsCollapsed = () => { },
  theme,
}) => {
  const classes = useStyles(theme)
  const { layout, handleSetAsEmbedded, handleSetAsGroup, handleSetSide } = useContext(DataProvider);

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
        {!currentSettings.asEmbedded
          ? <>
              <Button onClick={() => handleSetSide({ uniqueId: currentSettings.uniqueId})} disableElevation variant="text" className={classes.toolboxButton}>
                <SwapHorizIcon style={{ fontSize }} />
              </Button>
              <Button onClick={() => handleSetAsGroup({ uniqueId: currentSettings.uniqueId })} disableElevation variant="text" className={classes.toolboxButton}>
                {!currentSettings.asGroup ? <ViewStreamIcon /> : <WebAssetIcon /> }
              </Button>
            </>
          : <>
              <Button onClick={() => handleSetAsGroup({ uniqueId: currentSettings.uniqueId })} disableElevation variant="text" className={classes.toolboxButton}>
                <AddToHomeScreenIcon />
              </Button>
            </>}

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={'none'}
          // value={layout ? layout.find(lo => lo.uniqueId === currentSettings.parentId).title : 'none'}
          disabled={currentSettings.asGroup || !layout.some(lo => lo.asGroup)}
          onChange={(event) => { handleSetAsEmbedded({ uniqueId: currentSettings.uniqueId, parentId: event.target.value }) }}
        >
          {layout.filter(lo => lo.asGroup).map(lo => <MenuItem value={lo.uniqueId}>{lo.title}</MenuItem>)}
        </Select>
      </Box>
    </Box>
  </Tooltip>
})

export default MuiPanel;