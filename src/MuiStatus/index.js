import { Box, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import TextureIcon from '@material-ui/icons/Texture';
import React, { cloneElement, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import MuiPanelHeader from '../MuiPanelHeader';
import DataProvider from '../MuiPanelStore';

const MuiStatus = withTheme(({
  id,

  side = 'right',
  focusOnClick,
  onClick = () => { },

  theme,

  requestAttention = false,
  tooltip = 'Tooltip',
  elements = [],
}) => {
  const { status, handleSetVisible, handleStatusAnnouncement } = useContext(DataProvider);
  const [statusObject, setStatusObject] = useState();

  useEffect(() => {
    if (!id) {
      console.error(`MuiStatus: missing attr:id for status element`);
    } else {
      handleStatusAnnouncement({ id, elements, side, tooltip })
    }
  }, [id]);

  useEffect(() => {
    const findObject = status.find(lo => lo.uniqueId === id)
    if (findObject) { setStatusObject(findObject);}
  }, [status]);

  return statusObject && !!id ? createPortal(
    <Tooltip
      title={tooltip}
      placement="top"
      arrow
    >
      <Box
        onClick={() => focusOnClick ? handleSetVisible({ uniqueId: focusOnClick }) : onClick()}
        display="flex"
        alignItems="center"
        style={{
          gap: '16px',
          cursor: 'default',
          padding: '1px 6px',
          backgroundColor: requestAttention ? theme.palette.secondary.main : 'transparent',
        }}
      >
        {elements.map(element => <Box
          display="flex"
          alignItems="center"
          style={{ gap: '6px' }}
        >
          {element.icon && cloneElement( element.icon, { color: "action", style: { fontSize: 20}})}
          <Typography variant="subtitle2" color="textPrimary">{element.text}</Typography>
        </Box>)}
      </Box>
    </Tooltip>,
    document.getElementById(`material-ui-panel-statusBar-${side}`))
    : null
})

export default MuiStatus;