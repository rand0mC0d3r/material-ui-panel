import { withTheme } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useContext, useEffect, useState } from 'react';
import DataProvider from '../MuiContextStore';

const MuiDivider = withTheme(({
  initialSide = 'left',
  tooltip,
  shortText,
  icon,
  showIcon = true,
  theme,
}) => {
  const [side, setSide] = useState(initialSide);
  const { handlePanelAnnouncement } = useContext(DataProvider);
  useEffect(() => { handlePanelAnnouncement({ side, shortText, showIcon, tooltip, icon: icon ? icon: <RemoveIcon />, noPanel: true}) }, [side]);
  return null
})

export default MuiDivider;