import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Fragment, useContext } from 'react';
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

const MupDebug = () => {
	const { settings, status, sections, layout } = useContext(DataProvider);

	const theme = useTheme();
	const classes = useStyles(theme);

	const dumps = [{
		title: 'Sections',
		dataSource: sections.map(obj => <pre key={`section_${obj.uniqueId}`} className={classes.dumpText}>{JSON.stringify({ ...obj }, null, 4)}</pre>)
	}, {
		title: 'Layout',
		dataSource: layout.map(obj => <pre key={`layout_${obj.uniqueId}`} className={classes.dumpText}>{JSON.stringify({ ...obj, icon: null, ref: null, children: null }, null, 4)}</pre>)
	}, {
		title: 'Status',
		dataSource: status.map(obj => <pre key={`settings_${obj.uniqueId}`} className={classes.dumpText}>{JSON.stringify({ ...obj, elements: null }, null, 4)}</pre>)
	}, {
		title: 'Settings',
		dataSource: Object.entries(settings).map(([key, val]) => <pre key={`settings_${key}`} className={classes.dumpText}>{key}: {JSON.stringify(val)}</pre>)
	}];

	return settings.debugMode
		? <div key="MupDebug" className={classes.root}>
			{dumps.map(dump => <Fragment key={dump.title}>
				<div>{dump.title}</div>
				{dump.dataSource}
			</Fragment>)}
		</div>
	: null;
};

export default MupDebug;