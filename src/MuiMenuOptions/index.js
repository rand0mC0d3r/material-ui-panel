import { Box, Button, Select, Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import React, { useContext, useEffect } from 'react';
import DataProvider from '../MuiPanelStore';

const useStyles = makeStyles(( theme ) => ({
  box: { gap: `${theme.spacing(1)}px`, padding: '8px' },
  groupsBox: { gap: `${theme.spacing(2)}px`},
}));

const MuiMenuOptions = withTheme(({
  lo,
  anchorEl,
  setAnchorEl,
  side,
  theme,
}) => {
  const { layout, handleSetAsEmbedded, handleSetAsGroup, handleUnSetAsEmbedded, handleSetSide } = useContext(DataProvider);
  const open = Boolean(anchorEl);
  const classes = useStyles(theme)
  const onClose = () => { setAnchorEl(null); };

  useEffect(() => { setAnchorEl(null); }, [lo])

  return <Popover {...{open, anchorEl, onClose}}
    anchorOrigin={{ vertical: 'center', horizontal: side !== 'right' ? 'right' : 'left'}}
    transformOrigin={{ vertical: 'top', horizontal: side !== 'right' ? 'left' : 'right' }}>
      <Box className={classes.box} display="flex" flexDirection="column" alignItems="center">

        {!lo.asEmbedded && <Button size="small" fullWidth variant="outlined"
          onClick={() => handleSetSide({ uniqueId: lo.uniqueId })}
          startIcon={<SwapHorizIcon style={{ fontSize: 20 }} />}>Switch sides</Button>}

        {!lo.asEmbedded
          ? <Button variant="outlined" size="small" fullWidth
              onClick={() => handleSetAsGroup({ uniqueId: lo.uniqueId })}
              startIcon={ lo.asGroup ? <ViewStreamIcon /> : <WebAssetIcon /> }>{lo.asGroup ? 'as Individual' : 'as Group' }</Button>
          : <Button variant="outlined" size="small" fullWidth
              startIcon={<AddToHomeScreenIcon />}
              onClick={() => handleUnSetAsEmbedded({ uniqueId: lo.uniqueId })}>Promote</Button>}

        {!lo.asEmbedded && !lo.asGroup && <Select fullWidth
          disabled={lo.asGroup || !layout.some(lo => lo.asGroup)}
          onChange={(event) => { handleSetAsEmbedded({ uniqueId: lo.uniqueId, parentId: event.target.value }) }}>
            {layout.filter(lo => lo.asGroup).map(lo => <MenuItem value={lo.uniqueId}>
              <Box display="flex" className={classes.groupsBox}>
                {lo.icon}
                <Typography variant="caption" color="textSecondary">{lo.title}</Typography>
              </Box>
            </MenuItem>)}
        </Select>}

      </Box>
  </Popover>
})

export default MuiMenuOptions;
