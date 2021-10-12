import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Fragment, useContext, useEffect, useState } from 'react';
import DataProvider from '../../MuiPanelStore';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'absolute',
		backgroundColor: theme.palette.background.default,
		border: `3px dotted ${theme.palette.divider}`,
		borderRadius: '8px',
		padding: '8px',
    left: '30%',
    right: '30%',
    top: '32px',
		height: '850px',
		overflow: 'auto'
	},
	dumpText: {
		color: theme.palette.text.primary,
	},
	header: {
		backgroundColor: theme.palette.background.paper,
		padding: '8px',
		marginBottom: '8px',
		border: `1px solid ${theme.palette.divider}`,
		borderRadius: '4px',
		cursor: 'pointer',

	}
}));

const MupDebug = () => {
	const { settings, status, sections, layout } = useContext(DataProvider);
	const [dumps, setDumps] = useState([{
			title: 'Sections',
			collapsed: true,
		}, {
			title: 'Layout',
			collapsed: true,
			}, {
			title: 'Status',
			collapsed: false,
		}, {
			title: 'Settings',
			collapsed: true,
		}]);

	const theme = useTheme();
	const classes = useStyles(theme);

	useEffect(() => {
		setDumps(dumps => dumps.map(d => {
			if (d.title === 'Sections') {
				return { ...d, dataSource: sections.map(obj => <pre key={`section_${obj.uniqueId}`} className={classes.dumpText}>{JSON.stringify({ ...obj }, null, 4)}</pre>) };
			}
			return d;
		}));
	}, [sections]);

	useEffect(() => {
		setDumps(dumps => dumps.map(d => {
			if (d.title === 'Layout') {
				return { ...d, dataSource: layout.map(obj => <pre key={`layout_${obj.uniqueId}`} className={classes.dumpText}>{JSON.stringify({ ...obj, icon: null, ref: null, children: null }, null, 4)}</pre>) };
			}
			return d;
		}));
	}, [layout]);

	useEffect(() => {
		setDumps(dumps => dumps.map(d => {
			if (d.title === 'Settings') {
				return { ...d, dataSource: Object.entries(settings).map(([key, val]) => <pre key={`settings_${key}`} className={classes.dumpText}>{key}: {JSON.stringify(val)}</pre>) };
			}
			return d;
		}));
	}, [settings]);

	useEffect(() => {
		setDumps(dumps => dumps.map(d => {
			if (d.title === 'Status') {
				return { ...d, dataSource: status.map(obj => <pre key={`settings_${obj.uniqueId}`} className={classes.dumpText}>{JSON.stringify({ ...obj, elements: null }, null, 4)}</pre>) };
			}
			return d;
		}));
	}, [status]);

	const toggleDumpCollapse = (title) => {
		setDumps(dumps => dumps.map((dump) => { if (dump.title === title) dump.collapsed = !dump.collapsed; return dump; }));
	};

	return settings.debugMode
		? <div key="MupDebug" className={classes.root}>
			{dumps.map(dump => <Fragment key={dump.title}>
				<Typography className={classes.header} color="textPrimary" onClick={() => toggleDumpCollapse(dump.title)} variant="h6">{dump.title}</Typography>
				{!dump.collapsed && dump.dataSource}
			</Fragment>)}
		</div>
	: null;
};

export default MupDebug;