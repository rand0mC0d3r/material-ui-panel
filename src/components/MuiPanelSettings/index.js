import { Button, Tooltip } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import React, { cloneElement, useEffect, useState } from 'react';

const useStyles = makeStyles(theme => ({
  buttonMenu: {
    border: "0px none",
    padding: theme.spacing(2, 0),
    borderRadius: "0px",
    minWidth: "initial",
  },
}));

const MuiPanelManager = withTheme(({theme}) => {
	const classes = useStyles(theme)
  return <div>
		<Tooltip arrow title={`Panel settings`}>
			<Button
				disableElevation
				variant="outlined"
				fullWidth
				className={`${classes.buttonMenu}`}
				>
				<SettingsIcon />
			</Button>
		</Tooltip>
  </div>
})
export default MuiPanelManager;
