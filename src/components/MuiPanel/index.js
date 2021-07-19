import TextureIcon from '@material-ui/icons/Texture';
import React, { createRef, forwardRef, Fragment, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import DataProvider from '../MuiContextStore';

const MuiPanel = ({
  initialSide = 'left',
  icon, iconInHeader = true,
  title, subTitle,
  notificationCount = 0,

  children,
}) => {
  const [ receivedUniqueId, setReceivedUniqueId ] = useState();
  const { handleSetChildren, handlePanelAlerts, handlePanelAnnouncement } = useContext(DataProvider);
  const mount = document.getElementById("portal-root");
  const el = document.createElement("div");

  useEffect(() => {
    // if (!receivedUniqueId && reference && reference.current) {
    if (!receivedUniqueId) {
      setReceivedUniqueId(handlePanelAnnouncement({ children, iconInHeader, subTitle, side: initialSide, title, tooltip: title, icon: icon ? icon: <TextureIcon /> }))
    }
  // }, [receivedUniqueId, reference]);
  }, [receivedUniqueId]);

  // useEffect(() => {
  //   console.log('reference generated', ref.current)
  // }, [ref]);

  // const callbackHandleSetChildren = useCallback(({ uniqueId, children }) => {
  //   handleSetChildren({uniqueId, children})
  // }, [handleSetChildren]);

  // useEffect(() => {
  //   if (receivedUniqueId) {
  //     // callbackHandleSetChildren({ uniqueId: receivedUniqueId, children })
  //     console.log('children updated of uniqueId', receivedUniqueId, children.props)
  //   }
  // }, [children, receivedUniqueId]);

  // useEffect(() => {
    // mount.appendChild(el);
    // return () => mount.removeChild(el);
  // }, [el, mount]);

  useEffect(() => { if (receivedUniqueId) { handlePanelAlerts({ uniqueId: receivedUniqueId, notificationCount }); } }, [notificationCount, receivedUniqueId]);

  // return createPortal(children, domNode);
  return null;
}
export default MuiPanel;