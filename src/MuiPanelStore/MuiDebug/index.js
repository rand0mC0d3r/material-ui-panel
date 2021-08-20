import { Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import DataProvider from '../../MuiPanelStore';

const useStyles = makeStyles((theme) => ({
	root: {
		position: "absolute",
		backgroundColor: theme.palette.background.default,
		border: `1px solid ${theme.palette.divider}`,
		borderRadius: "8px",
		padding: '16px',
    left: '35%',
    right: '35%',
    top: '32px',
		height: '875px',
		overflow: "auto"
	},

}));

const MuiDebug = withTheme(({
  theme,
}) => {
  const classes = useStyles(theme)
  const { settings, layout } = useContext(DataProvider);

  return <>
		debug {settings.debugMode ? 'debug' : 'deactivated'}
		{settings.debugMode && <div className={classes.root}>
			{layout.map(layoutObject => <Typography color="textPrimary">
				<pre>{JSON.stringify({ ...layoutObject, icon: null, ref: null, children: null }, null, 4)}</pre>
			</Typography>)}
		</div>}
    </>
})
export default MuiDebug;
