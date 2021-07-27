import TextureIcon from '@material-ui/icons/Texture';
import React, { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import MuiPanelHeader from '../MuiPanelHeader';
import DataProvider from '../MuiPanelStore';

const MuiPanel = ({
  id,

  title,
  hint,
  tooltip,
  icon,

  notifications = {
    count: 0,
    color: 'primary',
  },

  disabled,


  //ignoreHierarchy
  // header = {
  //   noIcon: false,
  // },
  // content: {
  //   noPadding: false,
  // },

  iconInHeader = true,


  noPadding = false,
  children,
}) => {
  const { layout, handlePanelAlerts, handlePanelAnnouncement } = useContext(DataProvider);
  const [side, setSide] = useState('left');
  const [layoutObject, setLayoutObject] = useState();

  useEffect(() => {
    if (!id) {
      console.error(`MuiPanel: missing attr:id for panel with title+hint:`, title, hint);
    } else {
      console.log(`MuiPanel: panel with id:${id} has been added`);
      handlePanelAnnouncement({ iconInHeader, disabled, id, subTitle: hint, side, title, tooltip, icon: icon || <TextureIcon /> })
    }
  }, [id]);

  useEffect(() => {
    const findObject = layout.find(lo => lo.uniqueId === id)
    if (findObject) { setLayoutObject(findObject);}
  }, [layout]);

  useEffect(() => {
    if (layoutObject) { setSide(layoutObject.side); }
  }, [layoutObject])

  useEffect(() => {
    if(notifications.count > 0) { handlePanelAlerts({ id, count: notifications.count, color: notifications.color });}
  }, [notifications.count, notifications.color, id]);

  return layoutObject && layoutObject.isVisible && !!id ? createPortal(
    <div style={{
      order: layoutObject.parentId ? '' : '-1',
      flex: !layoutObject.parentId  ? '1 1 auto' : '0 0 auto'
    }}>
      <MuiPanelHeader {...{ layoutObject }} />
      {!layoutObject.isCollapsed && <div style={{ padding: noPadding ? null : '16px' }}>
          {children}
        </div>}
    </div>,
    document.getElementById(`${side}-panel`)) : null
}
export default MuiPanel;