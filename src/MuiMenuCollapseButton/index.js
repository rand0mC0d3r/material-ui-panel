import { IconButton, Tooltip } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import React, { useContext } from 'react';
import DataProvider from '../MuiPanelStore';

const useStyles = makeStyles(theme => ({
  buttonMenu: {
		position: 'absolute',
		bottom: '16px',
		border: `1px solid ${theme.palette.divider}`,
		backgroundColor: theme.palette.background.paper,
	},
	left: {
		borderRadius: `0px ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0px`,
    right: '-24px',
	},
	right: {
		borderRadius: `${theme.shape.borderRadius}px 0px 0px ${theme.shape.borderRadius}px`,
    left: '-24px',
	},
	icon: {
		fontSize: "16",
	}
}));

const MuiMenuCollapseButton = withTheme(({ side = 'right', theme }) => {
	const classes = useStyles(theme)
	const { settings, toggleIsCollapsed } = useContext(DataProvider);

  return <div>
		<Tooltip placement={side} arrow title={settings.isCollapsed ? 'Expand Panel' : 'Minimize Panel'}>
			<IconButton
				size="small"
				onClick={toggleIsCollapsed}
				className={`${classes.buttonMenu} ${classes[side]}`}
			>
				{side === 'right' && (settings.isCollapsed
					? <ArrowLeft className={classes.icon} />
					: <ArrowRight className={classes.icon} />)}
				{side === 'left' && (settings.isCollapsed
					? <ArrowRight className={classes.icon} />
					: <ArrowLeft className={classes.icon} />)}
			</IconButton>
		</Tooltip>
  </div>
})
export default MuiMenuCollapseButton;
