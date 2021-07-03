import React from 'react';

const MuiPanel = ({
  icon,
  isExternal = false,
  title
}) => (
  <div style={isExternal ? {
    position: "absolute",
    bottom: "0px"
  } : {}}>
    <div>{icon} {title}</div>
    test panel method
  </div>
)

export default MuiPanel;