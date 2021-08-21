import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Popover, Tooltip, Typography } from '@material-ui/core';
import TextureIcon from '@material-ui/icons/Texture';
import React, { cloneElement, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import MuiPanelHeader from '../MuiPanelHeader';
import DataProvider from '../MuiPanelStore';

const MuiStatus = ({
  id,

  side = 'right',
  focusOnClick,
  onClick = () => { },

  requestAttention = false,
  tooltip = 'Tooltip',
  elements = [],
}) => {
  const { status, handleStatusAnnouncement } = useContext(DataProvider);
  const [statusObject, setStatusObject] = useState();

  useEffect(() => {
    if (!id) {
      console.error(`MuiStatus: missing attr:id for status element`);
    } else {
      handleStatusAnnouncement({ id, side, tooltip })
    }
  }, [id]);

  useEffect(() => {
    const findObject = status.find(lo => lo.uniqueId === id)
    if (findObject) { setStatusObject(findObject);}
  }, [status]);

  return statusObject && !!id ? createPortal(
    <Tooltip title={tooltip} placement="top" arrow>
      <Box onClick={onClick} display="flex" alignItems="center" style={{ gap: '16px', cursor: 'default' }}>
        {elements.map(element => <Box display="flex" alignItems="center" style={{ gap: '6px' }}>
          {element.icon && cloneElement( element.icon, { style: { fontSize: 20}})}

          <Typography variant="subtitle2">{element.text}</Typography>
        </Box>)}
      </Box>
    </Tooltip>,
    document.getElementById(`material-ui-panel-statusBar-${side}`))
    : null
}
export default MuiStatus;