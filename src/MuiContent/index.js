import TextureIcon from '@material-ui/icons/Texture';
import React, { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import MuiPanelHeader from '../MuiPanelHeader';
import DataProvider from '../MuiPanelStore';

const MuiContent = ({
  children,
}) => {
  const { layout, handlePanelAlerts, handleContentAnnouncement } = useContext(DataProvider);
  const [layoutObject, setLayoutObject] = useState();

  useEffect(() => {
      handleContentAnnouncement({ children })
  }, []);

  useEffect(() => {
    const findObject = layout.find(lo => lo.asContent)
    if (findObject) { setLayoutObject(findObject);}
  }, [layout]);

  return layoutObject ? createPortal(
    <div style={{
      order: layoutObject.parentId ? '' : '-1',
      flex: !layoutObject.parentId ? '1 1 auto' : '0 0 auto',
      display: 'flex',
      height:  layoutObject.parentId ? 'unset' :"100%",
      flexDirection: 'column'
    }}>
        {children}
    </div>,
    document.getElementById(`content-section`))
    : null
}
export default MuiContent;