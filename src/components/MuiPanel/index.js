import TextureIcon from '@material-ui/icons/Texture';
import React, { cloneElement, forwardRef, useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import DataProvider from '../MuiContextStore';
import MuiPanelHeader from '../MuiPanelHeader';

const MuiPanel = ({
  initialSide = 'left',
  icon, iconInHeader = true,
  title, subTitle,
  notificationCount = 0,

  children,
}) => {
  const [ receivedUniqueId, setReceivedUniqueId ] = useState();
  const { layout, handlePanelAlerts, handlePanelAnnouncement } = useContext(DataProvider);
  const [side, setSide] = useState(initialSide);
  const [layoutObject, setLayoutObject] = useState();

  useEffect(() => {
    if (!receivedUniqueId) {
      setReceivedUniqueId(handlePanelAnnouncement({ iconInHeader, subTitle, side: initialSide, title, tooltip: title, icon: icon ? icon: <TextureIcon /> }))
    }
  }, [receivedUniqueId]);

  useEffect(() => {
    if (receivedUniqueId) {
      const findObject = layout.find(lo => lo.uniqueId === receivedUniqueId)
      if (findObject) {
        setLayoutObject(findObject);
      }
    }
  }, [receivedUniqueId, layout]);

  useEffect(() => {
    if (layoutObject) {
      setSide(layoutObject.side);
    }
  }, [layoutObject])

  useEffect(() => {
    if (receivedUniqueId) { handlePanelAlerts({ uniqueId: receivedUniqueId, notificationCount }); }
  }, [notificationCount, receivedUniqueId]);

  return layoutObject && receivedUniqueId ? createPortal(children, document.getElementById(`${side}-panel`)) : null
}
export default MuiPanel;