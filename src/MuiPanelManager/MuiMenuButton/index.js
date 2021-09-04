import { Badge, Box, Button, Tooltip } from '@material-ui/core';
import { makeStyles, styled, withTheme } from '@material-ui/core/styles';
import React, { cloneElement, useContext } from 'react';
import DataProvider from '../../MuiPanelStore';
import MupMenuOptions from '../../MupMenuOptions';
import { oppositeSide } from '../../utils';

const icons = theme => ({
  iconButton: {
    fontSize: '24px',
    opacity: '0.55',
    color: theme.palette.text.secondary,

    '&:hover': {
      color: theme.palette.augmentColor({ main: theme.palette.text.secondary }).dark,
      opacity: '0.9',
    }
  },

  activeButton: {
    opacity: '0.9',
    color: theme.palette.text.secondary,
  },

  iconExtraButton: {
    fontSize: '10px',
    opacity: '0.55',
    color: theme.palette.text.hint,
    backgroundColor: theme.palette.divider,
    padding: '1px 1px',
    position: 'absolute',
  },
  leftIconExtraButton: {
    left: '-12px',
    borderRadius: '0px 4px 4px 0px',
  },
  rightIconExtraButton: {
    right: '-12px',
    borderRadius: '4px 0px 0px 4px',
  },
  iconExtraButton0: {
    top: '-8px',
  },
  iconExtraButton1: {
    top: '7px',
  },
  iconExtraButton2: {
    top: '22px',
  },
  iconExtraButton3: {
    left: '-14px',
    top: '30px',
    position: 'absolute',
  },
  activeIconButton: {
    color: theme.palette.primary.main,
    opacity: '0.9',
  },
  rightIconButton: {
    marginLeft: '4px'
  },
  leftIconButton: {
    marginRight: '4px'
  },
});

const badge = theme => ({
  badge: {
    '& .MuiBadge-badge': {
      width: '22px',
      fontSize: '11px',
      height: '16px',
      minWidth: '22px',
      bottom: '12px',
      boxShadow: `0px 0px 0px 2px ${theme.palette.background.paper}`,
    },
  },
  groupBadge: {
    '& .MuiBadge-badge': {
      boxShadow: `0px 2px 0px -1px ${theme.palette.background.paper}, 0px 3px 0px 0px ${theme.palette.divider}, 0px 5px 0px -1px ${theme.palette.background.paper}, 0px 6px 0px 0px ${theme.palette.divider}`
    }
  },
  rightBadge: { '& .MuiBadge-badge': { left: '-10px', right: 'unset' } },
  leftBadge: { '& .MuiBadge-badge': { left: 'unset', right: '-10px' } },
  rightFixBadge: { '& .MuiBadge-badge': { left: '-14px', right: 'unset' } },
  leftFixBadge: { '& .MuiBadge-badge': { left: 'unset', right: '-14px' } },
});

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
});

const useStyles = makeStyles((theme) => ({
  ...styledText({ theme }),
  ...badge(theme),
  ...icons(theme),

  buttonMenu: {
    border: '0px none',
    padding: theme.spacing(2, 0),
    borderRadius: '0px',
    minWidth: 'initial',

  },
  rightGroupButtonMenu: {
    position: 'relative',
    '&::after': {
      content: '"."',
      backgroundColor: theme.palette.divider,
      color: theme.palette.divider,
      position: 'absolute',
      fontSize: '4px',
      lineHeight: '12px',
      width: '8px',
      top: 22,
      borderRadius: '0px 4px 4px 0px',
      left: -4,
    },
  },
  leftGroupButtonMenu: {
    position: 'relative',
    '&::after': {
      content: '"."',
      backgroundColor: theme.palette.divider,
      color: theme.palette.divider,
      position: 'absolute',
      width: '8px',
      top: 22,
      borderRadius: '4px 0px 0px 4px',
      right: -4,
      lineHeight: '12px',
      fontSize: '4px'
    },
  },
  rightButtonMenu: {
    borderRight: '4px solid transparent',
  },
  leftButtonMenu: {
    borderLeft: '4px solid transparent'
  },
  rightActiveButtonMenu: {
    borderRight: `4px solid ${theme.palette.text.primary}`,
    opacity: '1',
  },
  leftActiveButtonMenu: {
    borderLeft: `4px solid ${theme.palette.text.primary}`,
    opacity: '1',
  },
}));

const ContentContainerBox = styled(Box) (({ theme }) => ({
	gap: theme.spacing(1),
}));

const MuiMenuButton = withTheme(({
  lo,
  extraIcons = [],
  side,
  theme,
}) => {
  const classes = useStyles(theme);// const classes = useStyles(theme)
  const { settings, handleSetVisible } = useContext(DataProvider);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const determineColor = () => {
    const colorMap = [
      { id: 'primary', value: theme.palette.primary.main },
      { id: 'secondary', value: theme.palette.secondary.main },
      { id: 'textPrimary', value: theme.palette.text.primary },
      { id: 'textSecondary', value: theme.palette.text.secondary }
    ];
    return colorMap.find(({ id }) => id === settings.markerColor).value;
  };

  // useEffect(() => {
  //   setAnchorEl(null);
  // }, [lo])

  return <>
    <Tooltip
      arrow
      key={lo.index}
      placement={lo.side}
      enterDelay={1000}
      title={(lo.title?.length > 0 || lo.shortText?.length > 0 || lo.hint?.length > 0 || lo.tooltip?.length > 0)  ? (lo.tooltip || lo.hint || lo.title || lo.shortText) : ''}
    >
      <span>
        <Button
          onContextMenu={(e) => handleClick(e)}
          disableRipple={lo.noPanel}
          disableElevation={lo.noPanel}
          onClick={() => !lo.noPanel ? handleSetVisible({ uniqueId: lo.uniqueId }) : lo.handleOnClick()}
          variant="text"
          fullWidth
          style={{
            borderColor: lo.isVisible && determineColor()
          }}
          className={`
            ${classes.buttonMenu}
            ${!lo.noPanel && classes[`${!settings.inverseMarkers ? oppositeSide(side) :side}ButtonMenu`]}
            ${lo.isVisible && classes[`${!settings.inverseMarkers ? oppositeSide(side) :side}ActiveButtonMenu`]}
        `}
        >
          <Badge
            className={`
              ${classes.badge}
              ${classes[`${side}Badge`]}
              ${!settings.inverseMarkers && classes[`${side}FixBadge`]}
              ${lo.notifications.summary > lo.notifications.count && classes.groupBadge}
              `}
            anchorOrigin={{ vertical: 'bottom', horizontal: oppositeSide(side, 'left')}}
            badgeContent={Math.max(0, Math.min(99, Math.max(lo.notifications.summary, lo.notifications.count) || 0))}
            color={lo.notifications.color}
            variant={lo.variant}
          >
            <ContentContainerBox display="flex" alignItems="center" flexDirection="column">
              {lo.showIcon && cloneElement(
                lo.icon, {
                  // style: {
                    // color: !lo.noPanel ? determineColor() : 'unset',
                  // },
                  className: `
                    ${!lo.noPanel && classes.iconButton}
                    ${!lo.noPanel && classes[`${!settings.inverseMarkers ? oppositeSide(side) :side}IconButton`]}
                    ${lo.isVisible && classes.activeIconButton}
                  `,
              })}
              {!lo.noPanel && extraIcons && extraIcons.map((extraIcon, i) => <>

              {i <= 2 && cloneElement(
                extraIcon, {
                style: {
                  color: lo.isVisible && !lo.noPanel && determineColor(),
                },
                className: `
                    ${classes.iconExtraButton}
                    ${!lo.noPanel && classes[`${!settings.inverseMarkers ? oppositeSide(side) :side}IconExtraButton`]}
                    ${classes[`iconExtraButton${i}`]}
                  `,
                })}

              </>)}
              {lo.shortText && <div className={classes.shortText}>{lo.shortText.substr(0,4)}</div>}
            </ContentContainerBox>
          </Badge>
        </Button>
      </span>
    </Tooltip>
    <MupMenuOptions {...{lo, side, anchorEl, setAnchorEl}} />
    </>;
});
export default MuiMenuButton;
