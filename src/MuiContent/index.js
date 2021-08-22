import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import DataProvider from '../MuiPanelStore';

const MuiContent = ({ children }) => {
  const { layout, handleContentAnnouncement } = useContext(DataProvider);
  const [layoutObject, setLayoutObject] = useState();

  useEffect(() => { handleContentAnnouncement({ children }) }, []);

  useEffect(() => {
    const findObject = layout.find(lo => lo.asContent)
    if (findObject) { setLayoutObject(findObject);}
  }, [layout]);

  return (layoutObject && document.getElementById(`content-section`)) ? createPortal(
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

MuiContent.propTypes = {
	children: PropTypes.element,
}

export default MuiContent;