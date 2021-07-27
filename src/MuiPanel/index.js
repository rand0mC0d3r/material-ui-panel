import TextureIcon from '@material-ui/icons/Texture';
import React, { cloneElement, forwardRef, useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import MuiPanelHeader from '../MuiPanelHeader';
import DataProvider from '../MuiPanelStore';

const MuiPanel = ({
  id,
  initialSide = 'left',
  icon, iconInHeader = true,
  title, subTitle,
  notificationCount = 0,
  notificationColor = 'primary',
  noPadding = false,

  children,
}) => {
  const [ receivedUniqueId, setReceivedUniqueId ] = useState();
  const { layout, handlePanelAlerts, handlePanelAnnouncement } = useContext(DataProvider);
  const [side, setSide] = useState(initialSide);
  const [layoutObject, setLayoutObject] = useState();

  useEffect(() => {
    if (!receivedUniqueId) {
      if (!id) {
        console.error(`MuiPanel: missing attr:id for panel with title+subTitle:`, title, subTitle);
      } else {
        handlePanelAnnouncement({ iconInHeader, id, subTitle, side: initialSide, title, tooltip: title, icon: icon ? icon : <TextureIcon /> })
        setReceivedUniqueId(id);
      }
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
    if (receivedUniqueId) { handlePanelAlerts({ uniqueId: receivedUniqueId, notificationCount, notificationColor }); }
  }, [notificationCount, notificationColor, receivedUniqueId]);

  return layoutObject && layoutObject.isVisible && receivedUniqueId ? createPortal(<div style={{
    order: layoutObject.parentId ? '' : '-1',
    flex: !layoutObject.parentId  ? '1 1 auto' : '0 0 auto'
  }} >
    <MuiPanelHeader {...{ layoutObject }} />
    {!layoutObject.isCollapsed && <div style={{ padding: noPadding ? null : '16px' }}>{children}</div>}
  </div>, document.getElementById(`${side}-panel`)) : null
}
export default MuiPanel;