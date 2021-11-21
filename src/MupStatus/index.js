import { Box, Popover, SvgIcon, Tooltip, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { useCallback, useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import DataProvider from '../MuiPanelStore'

const useStyles = makeStyles(theme => ({
  default: {
    padding: '8px 4px',

    '@media (max-width: 780px)' : {
      padding: '3px 2px',
    }
  },
  root: {
    '&:hover': {
      backgroundColor: `${theme.palette.augmentColor({ main: theme.palette.divider }).light} !important`
    }
  },
}))

const MupStatus = ({
  id,
  asMenu,
  side,
  minWidth,
  focusOnClick,
  onClick,
  onContextMenu,
  requestAttention,
  tooltip,
  elements
}) => {
  const { status, settings, handleSetVisible, handleStatusAnnouncement, handleStatusDestroy } = useContext(DataProvider)
  const [statusObject, setStatusObject] = useState(null)
  const theme = useTheme()
  const classes = useStyles(theme)

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const callbackOnClick = useCallback((e) => {
    onClick(e)
  },
  [onClick])

  const callbackHandleStatusAnnouncement = useCallback((id) => {
    handleStatusAnnouncement({ id, elements, side, tooltip })
  }, [side, tooltip, elements, handleStatusAnnouncement])

  const callbackHandleStatusDestroy = useCallback((id) => {
    handleStatusDestroy({ id })
  },[])

  useEffect(() => {
    return () => {
      callbackHandleStatusDestroy(id)
    }
  }, [id, callbackHandleStatusDestroy])

  useEffect(() => {
    if (id && statusObject === null && !status.some(item => item.uniqueId === id)) {
      callbackHandleStatusAnnouncement(id)
    }
  }, [id, statusObject, status, callbackHandleStatusAnnouncement])

  useEffect(() => {
    if (statusObject === null) {
      const findObject = status.find(item => item.uniqueId === id)
      findObject && setStatusObject(findObject.uniqueId)
    }
  }, [status, id, statusObject])

  return (statusObject !== null && !!id) ? createPortal(
    <>
      <Tooltip title={tooltip} arrow>
        <Box
          key={`MupStatus_${id}_wrapper`}
          onClick={(e) => focusOnClick
            ? handleSetVisible({ uniqueId: focusOnClick })
            : asMenu
              ? setAnchorEl(e.currentTarget)
              : onClick
                ? callbackOnClick(e)
                : null
          }
          onContextMenu={(e) => settings.allowRightClick
            ? onContextMenu
              ? onContextMenu(e)
              : null
            : e.preventDefault()
          }
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={`${classes.default} ${(focusOnClick || onClick || asMenu)
            ? classes.root
            : ''}`}
          style={{
            minWidth: minWidth || 'auto',
            gap: '16px',
            cursor: (focusOnClick || !!onClick || asMenu) ? 'pointer' : 'initial',
            backgroundColor: requestAttention ? theme.palette.secondary.main : 'transparent',
          }}
        >
          {elements.map(element => <Box display="flex" alignItems="center"
            key={`MupStatus_${element.text}_container`}
            style={{ gap: '6px' }}>
            {element.icon && <SvgIcon style={{ fontSize: 20 }} color='action'>{element.icon}</SvgIcon>}
            {element.text && <Typography variant="subtitle2" color="textPrimary" style={{ lineHeight: '0px', whiteSpace: 'nowrap', userSelect: 'none' }}>
              {element.text}
            </Typography>}
          </Box>)}
        </Box>
      </Tooltip>
      {asMenu && <>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: settings.upperBar ? 'bottom' : 'top',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: !settings.upperBar ? 'bottom' : 'top',
            horizontal: 'left'
          }}
        >
          {asMenu}
        </Popover>
      </>}
    </>,
    document.getElementById(`material-ui-panel-statusBar-${side}`))
  : null
}

MupStatus.defaultProps = {
  side: 'left',
  requestAttention: false,
  tooltip: '',
  elements: [],
  asButton: false,
}

MupStatus.propTypes = {
  id: PropTypes.string.isRequired,
  side: PropTypes.oneOf(['left', 'right']),
  focusOnClick: PropTypes.string,
  asMenu: PropTypes.any,
  minWidth: PropTypes.number,
  onClick: PropTypes.func,
  onContextMenu: PropTypes.func,
  requestAttention: PropTypes.bool,
  tooltip: PropTypes.string,
  elements: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.node.isRequired,
    text: PropTypes.string,
  })).isRequired,
}

export default MupStatus