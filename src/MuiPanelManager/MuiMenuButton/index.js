import { Badge, Box, Button, Select, Tooltip, Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import { makeStyles, styled, withTheme } from '@material-ui/core/styles';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import React, { cloneElement, useContext, useEffect } from 'react';
import DataProvider from '../../MuiPanelStore';
import MuiMenuOptions from '../MuiMenuOptions';


const icons = theme => ({
  iconButton: {
    fontSize: "24px",
    color: theme.palette.text.primary
  },
  rightIconButton: {
    marginLeft: '4px'
  },
  leftIconButton: {
    marginRight: '4px'
  },
})

const badge = theme => ({
  badge: {
    "& .MuiBadge-badge": {
      width: '22px',
      fontSize: '11px',
      height: '16px',
      minWidth: '22px',
      bottom: '12px',
    },
  },
  rightBadge: { "& .MuiBadge-badge": { left: '-10px', right: 'unset' } },
  leftBadge: { "& .MuiBadge-badge": { left: 'unset', right: '-10px' } },
})

const styledText = ({ theme }) => ({
  shortText: {
    fontSize: '10px',
    width: '40px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: theme.palette.text.primary,
  },
})

const useStyles = makeStyles((theme, side) => ({
  ...styledText({ theme }),
  ...badge({ theme }),
  ...icons(theme),

  buttonMenu: {
    border: "0px none",
    padding: theme.spacing(2, 0),
    borderRadius: "0px",
    opacity: "0.55",
    minWidth: "initial",

    "&:hover": {
      color: theme.palette.text.primary,
      opacity: "0.9",
    }
  },
  rightGroupButtonMenu: {
    position: 'relative',
    "&::after": {
      content: '"."',
      backgroundColor: theme.palette.divider,
      color: theme.palette.divider,
      position: 'absolute',
      fontSize: '4px',
      lineHeight: "12px",
      width: '4px',
      top: 24,
      borderRadius: "0px 4px 4px 0px",
      left: 0,
    },
  },
  leftGroupButtonMenu: {
    position: 'relative',
    "&::after": {
      content: '"."',
      backgroundColor: theme.palette.divider,
      color: theme.palette.divider,
      position: 'absolute',
      width: '4px',
      top: 24,
      borderRadius: "4px 0px 0px 4px",
      right: 0,
      lineHeight: '12px',
      fontSize: '4px'
    },
  },
  rightButtonMenu: {
    borderRight: "4px solid transparent",
  },
  leftButtonMenu: {
    borderLeft: "4px solid transparent"
  },
  rightActiveButtonMenu: {
    borderRight: `4px solid ${theme.palette.text.primary}`,
    opacity: "1",
  },
  leftActiveButtonMenu: {
    borderLeft: `4px solid ${theme.palette.text.primary}`,
    opacity: "1",
  },
}));

const ContentContainerBox = styled(Box) (({ theme }) => ({
	gap: theme.spacing(1),
}));

const MuiMenuButton = withTheme(({
  lo,
  side,
  theme,
}) => {
  const classes = useStyles(theme, side)
  const { layout, handleSetAsEmbedded, handleSetVisible, handleSetAsGroup, handleUnSetAsEmbedded, handleSetSide } = useContext(DataProvider);

 const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setAnchorEl(null);
  }, [lo])

  const open = Boolean(anchorEl);
  const id = open ? `simple-popover-${lo.uniqueId}` : undefined;

  return <>
    <Tooltip
      arrow
      key={lo.index}
      placement={lo.side}
      enterDelay={1000}
      title={!lo.isVisible ? (lo.hint || lo.title) : ''}
    >
      <span>
        <Button
          onContextMenu={(e) => handleClick(e)}
          disabled={lo.noPanel}
          onClick={() => !lo.noPanel && handleSetVisible({ uniqueId: lo.uniqueId })}
          variant="text"
          fullWidth
          className={`
            ${classes.buttonMenu}
            ${lo.asGroup && classes[`${side}GroupButtonMenu`]}
            ${!lo.noPanel && classes[`${side}ButtonMenu`]}
            ${lo.isVisible && classes[`${side}ActiveButtonMenu`]}
        `}
        >
          <Badge
            className={`${classes.badge} ${classes[`${side}Badge`]}`}
            anchorOrigin={{ vertical: 'bottom', horizontal: side !== 'right' ? 'right' : 'left' }}
            badgeContent={Math.max(0, Math.min(99, lo.notifications.count || 0))}
            color={lo.notifications.color}
            variant={lo.variant}
          >
            <ContentContainerBox display="flex" alignItems="center" flexDirection="column">
              {lo.showIcon && cloneElement(
                lo.icon, {
                  className: `${classes.iconButton} ${!lo.noPanel && classes[`${side}IconButton`]}`,
                  color: lo.isVisible ? "action" : "action"
              })}
              {lo.shortText && <div className={classes.shortText}>{lo.shortText}</div>}
            </ContentContainerBox>
          </Badge>
        </Button>
      </span>
    </Tooltip>
    <MuiMenuOptions {...{lo, side, anchorEl, setAnchorEl}} />
    </>
})
export default MuiMenuButton;
