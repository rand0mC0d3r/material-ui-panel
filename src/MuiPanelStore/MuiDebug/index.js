import { Badge, Box, Button, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, styled, withTheme } from '@material-ui/core/styles';
import React, { cloneElement, useContext, useEffect } from 'react';
import MuiMenuOptions from '../../MuiMenuOptions';
import DataProvider from '../../MuiPanelStore';
import { oppositeSide } from '../../utils';

const useStyles = makeStyles((theme) => ({
	root: {
		position: "absolute",
		backgroundColor: theme.palette.background.default,
		border: `1px solid ${theme.palette.divider}`,
		borderRadius: "8px",
		padding: '16px',
    left: '30%',
    right: '30%',
    top: '32px',
		height: '900px',
		overflow: "auto"
	},

}));

const MuiDebug = withTheme(({
  lo,
  side,
  theme,
}) => {
  const classes = useStyles(theme)// const classes = useStyles(theme)
  const { settings, layout } = useContext(DataProvider);

  return <>
		debug {settings.debugMode ? 'debug' : 'deactivated'}
		{settings.debugMode && <div className={classes.root}>
			{layout.map(layoutObject => <pre>{JSON.stringify({ ...layoutObject, icon: null }, null, 4)}</pre>)}
		</div>}
    </>
})
export default MuiDebug;
