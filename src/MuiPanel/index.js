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
    if (!id) {
      console.error(`MuiPanel: missing attr:id for panel with title+subTitle:`, title, subTitle);
    } else {
      console.log(`MuiPanel: panel with id:${id} has been added`);
      handlePanelAnnouncement({ iconInHeader, id, subTitle, side, title, tooltip: title, icon: icon || <TextureIcon /> })
    }
  }, [id]);

  useEffect(() => {
    const findObject = layout.find(lo => lo.uniqueId === id)
    if (findObject) {
      setLayoutObject(findObject);
    }
  }, [layout]);

  useEffect(() => {
    if (layoutObject) {
      setSide(layoutObject.side);
    }
  }, [layoutObject])

  useEffect(() => {
    if(notificationCount > 0) {
      handlePanelAlerts({ uniqueId: id, notificationCount, notificationColor });
    }
  }, [notificationCount, notificationColor, id]);

  return layoutObject && layoutObject.isVisible && !!id ? createPortal(<div style={{
    order: layoutObject.parentId ? '' : '-1',
    flex: !layoutObject.parentId  ? '1 1 auto' : '0 0 auto'
  }} >
    <MuiPanelHeader {...{ layoutObject }} />
    {!layoutObject.isCollapsed && <div style={{ padding: noPadding ? null : '16px' }}>{children}</div>}
  </div>, document.getElementById(`${side}-panel`)) : null
}
export default MuiPanel;