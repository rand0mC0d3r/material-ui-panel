import { Badge, Box, Button, Select, Tooltip } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import { makeStyles, styled, withTheme } from '@material-ui/core/styles';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import React, { cloneElement, useContext, useEffect } from 'react';
import DataProvider from '../../MuiPanelStore';


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

const styledBadge = ({ theme, side }) => ({
  badge: {
    "& .MuiBadge-badge": {
      width: '22px',
      fontSize: '11px',
      height: '16px',
      minWidth: '22px',
      bottom: '12px',
      ...side !== 'left' ? { left: '-10px' } : { right: '-10px' },
    },
  },
})

const styledModal = ({ theme }) => ({
  modalTitle: {
    width: '200px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: '8px',
    fontSize: '12px',
    backgroundColor: theme.palette.divider,
  },
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
  ...styledText({theme}),
  ...styledBadge({ theme, side }),
  ...styledModal({theme}),
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
          disableRipple
          disableFocusRipple
          disableTouchRipple
          onContextMenu={(e) => handleClick(e)}
          disableElevation
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
            max={99}
            className={classes.badge}
            anchorOrigin={{ vertical: 'bottom', horizontal: side !== 'right' ? 'right' : 'left' }}
            badgeContent={Math.max(0, Math.min(99, lo.notifications.count || 0))}
            // badgeContent={lo.notifications.count}
            color={lo.notifications.color}
            variant={lo.variant}
          >
            {/* {lo.notifications.count} */}
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
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'center',
        horizontal: side !== 'right' ? 'right' : 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: side !== 'right' ? 'left' : 'right',
      }}
    >
      <div className={ classes.modalTitle}>{lo.tooltip}</div>
      <Box
        style={{ gap: '8px', padding: '8px'}}
        display="flex"
        flexDirection="column"
        alignItems="center">

        {!lo.asEmbedded && <Button
          size="small"
          fullWidth
          onClick={() => handleSetSide({ uniqueId: lo.uniqueId })}
          variant="outlined"
          startIcon={<SwapHorizIcon style={{ fontSize: 20 }} />}>
            Switch sides
        </Button>}

        {!lo.asEmbedded
          ? <Button
            onClick={() => handleSetAsGroup({ uniqueId: lo.uniqueId })}
            variant="outlined"
            size="small"
            fullWidth
            startIcon={ lo.asGroup ? <ViewStreamIcon /> : <WebAssetIcon /> }>
              {lo.asGroup ? 'as Individual' : 'as Group' }
            </Button>
          : <Button
            onClick={() => handleUnSetAsEmbedded({ uniqueId: lo.uniqueId })}
            size="small"
            startIcon={<AddToHomeScreenIcon />}
            variant="outlined">
              Promote
          </Button>}

        {!lo.asEmbedded && !lo.asGroup && <Select
          fullWidth
          disabled={lo.asGroup || !layout.some(lo => lo.asGroup)}
          onChange={(event) => { handleSetAsEmbedded({ uniqueId: lo.uniqueId, parentId: event.target.value }) }}>
            {layout.filter(lo => lo.asGroup).map(lo => <MenuItem value={lo.uniqueId}>
              <Box display="flex" style={{gap: "16px"}}>{lo.icon} {lo.title}</Box>
            </MenuItem>)}
        </Select>}

        </Box>
      </Popover>
    </>
})
export default MuiMenuButton;
