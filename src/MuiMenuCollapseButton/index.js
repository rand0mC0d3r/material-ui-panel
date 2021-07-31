import { IconButton, Tooltip } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import React, { useContext } from 'react';
import DataProvider from '../MuiPanelStore';

const StyledIconButton = styled(IconButton) (({ theme, side }) => ({
	position: 'absolute',
	bottom: '16px',
	boxShadow: `inset -1px 0px 1px 0px ${theme.palette.divider}`,
	border: `1px solid ${theme.palette.divider}`,
	backgroundColor: theme.palette.background.paper,
	right: side === 'left' && '-24px',
	left: side === 'right' && '-24px',
	borderRadius: side === 'right'
		? `${theme.shape.borderRadius}px 0px 0px ${theme.shape.borderRadius}px`
		: `0px ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0px`,
}));
const StyledArrowLeft = styled(ArrowLeft) ({
	fontSize: "16px",
});
const StyledArrowRight = styled(ArrowRight) ({
	fontSize: "16px",
});

const MuiMenuCollapseButton = ({ side = 'right' }) => {
	const { settings, toggleSettingIsCollapsed } = useContext(DataProvider);

  return <Tooltip placement={side} arrow title={settings.isCollapsed ? 'Expand Panel' : 'Minimize Panel'}>
		<StyledIconButton size="small" onClick={toggleSettingIsCollapsed} {...{ side }} >
				{side === 'right' && (settings.isCollapsed ? <StyledArrowLeft /> : <StyledArrowRight />)}
				{side === 'left' && (settings.isCollapsed ? <StyledArrowRight /> : <StyledArrowLeft />)}
			</StyledIconButton>
		</Tooltip>
}

export default MuiMenuCollapseButton;
