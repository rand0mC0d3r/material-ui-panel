import { makeStyles, withTheme } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import DataProvider from '../../MuiPanelStore';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'absolute',
		backgroundColor: theme.palette.background.default,
		border: `3px dotted ${theme.palette.divider}`,
		borderRadius: '8px',
		padding: '8px',
    left: '35%',
    right: '35%',
    top: '32px',
		height: '850px',
		overflow: 'auto'
	},
	dumpText: {
		color: theme.palette.text.primary,
	}
}));

const MuiDebug = withTheme(({
  theme,
}) => {
  const classes = useStyles(theme);
  const { settings, sections, layout } = useContext(DataProvider);

  return <>
		{settings.debugMode && <div className={classes.root}>
			{sections.map(sectionObject => <pre key={sectionObject.uniqueId} className={classes.dumpText}>{JSON.stringify({ ...sectionObject }, null, 4)}</pre>)}
			<hr />
			{layout.map(layoutObject => <pre key={layoutObject.uniqueId} className={classes.dumpText}>{JSON.stringify({ ...layoutObject, icon: null, ref: null, children: null }, null, 4)}</pre>)}
		</div>}
    </>;
});
export default MuiDebug;
