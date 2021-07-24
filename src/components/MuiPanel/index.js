import TextureIcon from '@material-ui/icons/Texture';
import React, { cloneElement, useContext, useEffect, useRef, useState } from 'react';
import DataProvider from '../MuiContextStore';

const MuiPanel = ({
  initialSide = 'left',
  icon, iconInHeader = true,
  title, subTitle,
  notificationCount = 0,

  children,
}) => {
  const [ receivedUniqueId, setReceivedUniqueId ] = useState();
  const { handlePanelAlerts, handlePanelAnnouncement } = useContext(DataProvider);
  const ref = useRef(children);

  useEffect(() => {
    if (!receivedUniqueId) {
      setReceivedUniqueId(handlePanelAnnouncement({ ref, children, iconInHeader, subTitle, side: initialSide, title, tooltip: title, icon: icon ? icon: <TextureIcon /> }))
    }
  }, [receivedUniqueId]);

  useEffect(() => {
    if (receivedUniqueId) { handlePanelAlerts({ uniqueId: receivedUniqueId, notificationCount }); }
  }, [notificationCount, receivedUniqueId]);

  return null;
}
export default MuiPanel;