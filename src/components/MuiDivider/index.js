import { withTheme } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useContext, useEffect } from 'react';
import DataProvider from '../MuiContextStore';

const MuiDivider = withTheme(({
  defaultSide = 'left',
  tooltip,
  shortText,
  icon,
  showIcon = true,
  theme,
}) => {
  const { handlePanelAnnouncement } = useContext(DataProvider);
  useEffect(() => {
    handlePanelAnnouncement({ side: defaultSide, shortText, showIcon, tooltip, icon: icon ? icon : <RemoveIcon />, noPanel: true })
  }, []);

  return null
})

export default MuiDivider;