import TextureIcon from '@material-ui/icons/Texture';
import React, { Fragment, useCallback, useContext, useEffect, useRef, useState } from 'react';
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

  const ref = useRef(null)

  useEffect(() => {
    if (!receivedUniqueId) {
      setReceivedUniqueId(handlePanelAnnouncement({ ref, children, iconInHeader, subTitle, side: initialSide, title, tooltip: title, icon: icon ? icon: <TextureIcon /> }))
    }
  }, [receivedUniqueId]);

  // const callbackHandleSetChildren = useCallback(({ uniqueId, children }) => {
  //   handleSetChildren({uniqueId, children})
  // }, [handleSetChildren]);

  // useEffect(() => {
  //   if (receivedUniqueId) {
  //     // callbackHandleSetChildren({ uniqueId: receivedUniqueId, children })
  //     console.log('children updated of uniqueId', receivedUniqueId, children.props)
  //   }
  // }, [children, receivedUniqueId]);

  useEffect(() => { if (receivedUniqueId) { handlePanelAlerts({ uniqueId: receivedUniqueId, notificationCount }); } }, [notificationCount, receivedUniqueId]);

  return <div style={{display: 'none'}} {...{ ref }}>{children}</div>;
}
export default MuiPanel;