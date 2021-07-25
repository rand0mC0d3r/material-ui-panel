import { Box, Button, MenuItem, Select, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import React, { cloneElement, useContext } from 'react';
import DataProvider from '../MuiContextStore';
const fontSize = 20;

const useStyles = makeStyles(theme => ({
  toolbox: {
    gap: theme.spacing(1),
    height: "32px"
  },
  toolboxButton: {
    padding: "0px",
    width: '28px',
    minWidth: '28px',
    lineHeight: '0px'
  },
  collapseButton: {
    padding: "0px",
    width: theme.spacing(2.5),
    minWidth: theme.spacing(2.5),
    lineHeight: '0px'
  },
  headerContainer: {
    gap: theme.spacing(1),
  },
  panelTitle: {
    maxWidth: '265px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  header: {
    cursor: "default",
    position: "relative",
    gap: theme.spacing(1),
    userSelect: "none",
    padding: theme.spacing(1.5, 2, 1.5, 1),
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
    backdropFilter: "blur(4px)",
  },
}));

const MuiPanel = withTheme(({
  layoutObject: { uniqueId, iconInHeader, icon, asEmbedded, isCollapsed, title, subTitle, asGroup },
  theme,
}) => {
  const classes = useStyles(theme)
  const { layout, handleSetAsEmbedded, handleToggleCollapse, handleUnSetAsEmbedded, handleSetAsGroup, handleSetSide } = useContext(DataProvider);

  return <Box
      justifyContent="space-between"
      onDoubleClick={() => handleToggleCollapse({ uniqueId })}
      alignItems="center"
      display="flex"
      className={`${classes.header}`}
    >
    <Box display="flex" alignItems="center" style={{ gap: theme.spacing(1) }}>

        <Tooltip arrow title="Click to toggle collapse">
          <Button disableRipple disableElevation onClick={() => handleToggleCollapse({ uniqueId })} className={classes.collapseButton}>
            {isCollapsed ? <ChevronRightIcon style={{ fontSize }} /> : <ExpandMoreIcon style={{ fontSize }} />}
          </Button>
        </Tooltip>

        {iconInHeader
          && icon !== undefined
          && cloneElement(icon, { color: 'disabled', style: { fontSize: 20 } })}

        <Box className={classes.headerContainer} flexWrap={true} display="flex" alignItems="center">
          <Typography
            color="textPrimary"
            className={classes.panelTitle}
            style={{ fontWeight: asEmbedded ? 'bold' : 'normal' }}
            variant={asEmbedded ? 'caption' : 'button'}
          >{title}</Typography>
          {subTitle && <Tooltip
            title={subTitle}
            placement='bottom'>
            <InfoOutlinedIcon style={{ fontSize: '16px', color: theme.palette.text.hint }} />
          </Tooltip>}
          {asGroup && <Tooltip
            title="As group..."
            placement='bottom'>
            <WebAssetIcon style={{ fontSize: '16px', color: theme.palette.text.hint }} />
          </Tooltip>}
        </Box>
      </Box>
      <Box display="flex" className={classes.toolbox}>

        {/* <Tooltip arrow title="Click to toggle collapse">
          <Button onClick={() => handleToggleCollapse({ uniqueId })} className={classes.toolboxButton}>
            {isCollapsed
              ? <ChevronRightIcon style={{ fontSize }} />
              : <ExpandMoreIcon style={{ fontSize }} />}
          </Button>
        </Tooltip> */}

        {/* {!asEmbedded && <Button onClick={() => handleSetSide({ uniqueId })} disableElevation variant="text" className={classes.toolboxButton}>
            <SwapHorizIcon style={{ fontSize }} />
        </Button>} */}

        {!asEmbedded && !asGroup && <Select
          disabled={asGroup || !layout.some(lo => lo.asGroup)}
          onChange={(event) => { handleSetAsEmbedded({ uniqueId: uniqueId, parentId: event.target.value }) }}>
            {layout.filter(lo => lo.asGroup).map(lo => <MenuItem value={lo.uniqueId}>
              <Box display="flex" style={{gap: "16px"}}>{lo.icon} {lo.title}</Box>
            </MenuItem>)}
        </Select>}

        {/* {!asEmbedded
          ? <Button onClick={() => handleSetAsGroup({ uniqueId })} disableElevation variant="text" className={classes.toolboxButton}>
              {asGroup ? <ViewStreamIcon /> : <WebAssetIcon />}
            </Button>
          : <Button onClick={() => handleUnSetAsEmbedded({ uniqueId })} disableElevation variant="text" className={classes.toolboxButton}>
              <AddToHomeScreenIcon />
            </Button>} */}
      </Box>
    </Box>
})

export default MuiPanel;