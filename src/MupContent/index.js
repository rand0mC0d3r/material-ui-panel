import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import DataProvider from '../MuiPanelStore';

const MupContent = ({ children }) => {
  const { layout, sections,  handleContentAnnouncement } = useContext(DataProvider);
  const [layoutObject, setLayoutObject] = useState();
  const [elemRef, setElemRef] = useState();

  useEffect(() => { handleContentAnnouncement({ children }) }, []);

  useEffect(() => {
    const findObject = layout.find(lo => lo.asContent)
    if (findObject) { setLayoutObject(findObject);}
  }, [layout]);

  useEffect(() => {
    setElemRef(document.getElementById(`content-section`))
  }, [sections]);

  return (layoutObject && elemRef) ? createPortal(
    <div style={{
      order: layoutObject.parentId ? '' : '-1',
      flex: !layoutObject.parentId ? '1 1 auto' : '0 0 auto',
      display: 'flex',
      height:  layoutObject.parentId ? 'unset' :"100%",
      flexDirection: 'column'
    }}>
      {children}
    </div>,
    elemRef)
    : null
}

MupContent.propTypes = {
	children: PropTypes.element,
}

export default MupContent;