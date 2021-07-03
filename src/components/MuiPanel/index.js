import Paper from '@material-ui/core/Paper';
import React from 'react';

const MuiPanel = ({
  icon,
  isExternal = false,
  title
}) => (
  <Paper style={isExternal ? {
    position: "absolute",
    bottom: "0px"
  } : {}}>
    <div>{icon} {title}</div>
    test panel method
  </Paper>
)

export default MuiPanel;