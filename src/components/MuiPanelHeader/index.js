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
  layoutObject: { uniqueId, iconInHeader, icon, asEmbedded, isCollapsed, title, subTitle, asGroup },
  theme,
}) => {
  const classes = useStyles(theme)
  const { layout, handleSetAsEmbedded, handleToggleCollapse, handleUnSetAsEmbedded, handleSetAsGroup, handleSetSide } = useContext(DataProvider);

  return <Tooltip arrow enterDelay={2500} title="Double click to collapse" placement="right">
    <Box
      justifyContent="space-between"
      onDoubleClick={() => handleToggleCollapse({ uniqueId })}
      alignItems="center"
      display="flex"
      className={`${classes.header}`}
    >
      <Box display="flex" alignItems="center" style={{gap: theme.spacing(1)}}>
        {iconInHeader
          && icon !== undefined
          && cloneElement(icon, { color: 'disabled', style: { fontSize: 20 } })}

        <Box className={classes.headerContainer} flexWrap={true} display="flex" alignItems="center">
          <Typography
            style={{ fontWeight: asEmbedded ? 'bold' : 'normal' }}
            variant={asEmbedded ? 'caption' : 'button'}
          >{title}</Typography>
          {subTitle && <Tooltip title={subTitle} placement='bottom'><InfoOutlinedIcon style={{fontSize: '16px', color: theme.palette.text.hint }} /></Tooltip>}
          {asGroup && <Typography color="textSecondary" variant="caption">(group)</Typography>}
        </Box>
      </Box>
      <Box display="flex" className={classes.toolbox}>

        <Button onClick={() => handleToggleCollapse({ uniqueId })} className={classes.toolboxButton}>
          {isCollapsed
            ? <ChevronRightIcon style={{ fontSize }} />
            : <ExpandMoreIcon style={{ fontSize }} />}
        </Button>

        {!asEmbedded && <Button onClick={() => handleSetSide({ uniqueId })} disableElevation variant="text" className={classes.toolboxButton}>
            <SwapHorizIcon style={{ fontSize }} />
        </Button>}

        {!asEmbedded && !asGroup && <Select
          disabled={asGroup || !layout.some(lo => lo.asGroup)}
          onChange={(event) => { handleSetAsEmbedded({ uniqueId: uniqueId, parentId: event.target.value }) }}>
            {layout.filter(lo => lo.asGroup).map(lo => <MenuItem value={lo.uniqueId}>
              <Box display="flex" style={{gap: "16px"}}>{lo.icon} {lo.title}</Box>
            </MenuItem>)}
        </Select>}

        {!asEmbedded
          ? <Button onClick={() => handleSetAsGroup({ uniqueId })} disableElevation variant="text" className={classes.toolboxButton}>
              {asGroup ? <ViewStreamIcon /> : <WebAssetIcon />}
            </Button>
          : <Button onClick={() => handleUnSetAsEmbedded({ uniqueId })} disableElevation variant="text" className={classes.toolboxButton}>
              <AddToHomeScreenIcon />
            </Button>}
      </Box>
    </Box>
  </Tooltip>
})

export default MuiPanel;