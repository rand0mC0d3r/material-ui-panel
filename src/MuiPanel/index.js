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

  placement = 'top',

  notifications = {
    count: null,
    color: null,
  },

  disabled,
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
      // console.log(`MuiPanel: panel with id:${id} has been added`);
      handlePanelAnnouncement({ iconInHeader, placement, disabled, id, subTitle: hint, side, title, tooltip, icon: icon || <TextureIcon /> })
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
    if (notifications.count !== null && !!notifications.color) {
      console.log('[MuiPanel]:useEffect = panel Notification', notifications);
      handlePanelAlerts({ id, count: Math.min(99, Math.max(notifications.count, 0)), color: notifications.color });
    }
  }, [notifications.count, notifications.color, id]);

  return layoutObject && layoutObject.isVisible && !!id ? createPortal(
    <div style={{
      order: layoutObject.parentId ? '' : '-1',
      flex: !layoutObject.parentId ? '1 1 auto' : '0 0 auto',
      display: 'flex',
      height:  layoutObject.parentId ? 'unset' :"100%",
      flexDirection: 'column'
    }}>
      <MuiPanelHeader {...{ layoutObject }} />
      {!layoutObject.isCollapsed && <div
        style={{
          padding: noPadding ? null : '16px',
          alignSelf: 'stretch',
          overflow: 'scroll',
          flex: '1 1 auto'
        }}>
          {children}
        </div>}
    </div>,
    (() => {
      console.log(layoutObject)
      return layoutObject.asSection && layoutObject.uniqueId
      ? document.getElementById(`${layoutObject.uniqueId}-section`)
      : document.getElementById(`${side}-panel`)
    })())
    : null
}
export default MuiPanel;