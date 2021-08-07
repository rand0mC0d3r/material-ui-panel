import { withTheme } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useContext, useEffect } from 'react';
import DataProvider from '../MuiPanelStore';

const MuiDivider = ({
  id,
  tooltip,
  shortText,
  icon,
  showIcon = true,
}) => {
  const { handlePanelAnnouncement } = useContext(DataProvider);
  useEffect(() => {
    if (!id) {
      console.error(`MuiDivider: missing attr:id for divider with shortText+tooltip:`, shortText, tooltip);
    } else {
      // console.log(`MuiDivider: divider with id:${id} has been added`);
      handlePanelAnnouncement({ side: 'left', id, shortText, showIcon, tooltip, icon: icon ? icon : <RemoveIcon />, noPanel: true })
    }
  }, [id]);

  return null
}

export default MuiDivider;