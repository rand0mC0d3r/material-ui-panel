import { Box, Popover, Tooltip } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useCallback, useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import DataProvider from '../MuiPanelStore'

const useStyles = makeStyles(theme => ({
  default: {
    WebkitFontSmoothing: 'auto',
    height: '100%',
    padding: '0px 8px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    alignSelf: 'stretch'
  },
  interactive: {
    cursor: 'pointer',
  },
  actionNormal: {
    '&:hover': {
      backgroundColor: `${theme.palette.augmentColor({ main: theme.palette.divider }).light} !important`
    }
  },
  actionHighlight: {
    '&:hover': {
      backgroundColor: `${theme.palette.augmentColor({ main: theme.palette.secondary.main }).dark} !important`,
      color: `${theme.palette.background.default } !important`
    },
  },
  hightlight: {
    backgroundColor: theme.palette.secondary.main,
    '& > div > *': {
      color: `${theme.palette.background.default } !important`
    }
  },
}))

const MupStatus = ({
  id,
  asMenu,
  secondary,
  style,
  focusOnClick,
  onClick = false,
  onContextMenu,
  highlight,
  tooltip,
  elements,
  children
}) => {
  const { status, settings, handleSetVisible, handleStatusAnnouncement, handleStatusDestroy } = useContext(DataProvider)
  const [statusObject, setStatusObject] = useState(null)
  const [elementFound, setElementFound] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null)
  const theme = useTheme()
  const classes = useStyles(theme)
  const open = Boolean(anchorEl)

  const onClose = () => setAnchorEl(null)

  const callbackOnClick = useCallback((e) => {
    onClick(e)
  }, [onClick])

  useEffect(() => {
    const elementSearched = document.getElementById(`material-ui-panel-statusBar-${secondary ? 'secondary' : 'primary'}`)
    if (elementSearched !== null) {
      setElementFound(elementSearched)
    }
  }, [secondary, statusObject])

  const callbackHandleStatusAnnouncement = useCallback((id) => {
    handleStatusAnnouncement({ id, elements, secondary, tooltip })
  }, [secondary, tooltip, elements, handleStatusAnnouncement])

  const callbackHandleStatusDestroy = useCallback(() => {
    handleStatusDestroy({ id })
  }, [id])

  useEffect(() => {
    return () => {
      callbackHandleStatusDestroy()
    }
  }, [callbackHandleStatusDestroy])

  useEffect(() => {
    if (id && statusObject === null && !status.some(item => item.uniqueId === id)) {
      callbackHandleStatusAnnouncement(id)
    }
  }, [id, statusObject, status, callbackHandleStatusAnnouncement])

  useEffect(() => {
    if (statusObject === null && status.some(item => item.uniqueId === id)) {
      setStatusObject(status.find(item => item.uniqueId === id).uniqueId)
    }
  }, [status, id, statusObject])

  return (statusObject !== null && !!id && elementFound)
    ? createPortal(
      <>
        <Tooltip
          title={tooltip}
          disableFocusListener={tooltip === ''}
          disableHoverListener={tooltip === ''}
          disableTouchListener={tooltip === ''}
          arrow
        >
          <Box
            id={id}
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
            className={clsx([
              classes.default,
              highlight && classes.hightlight,
              onClick && highlight && classes.actionHighlight,
              onClick && classes.interactive,
              onClick && !highlight && classes.actionNormal,
            ])}
            style={{ ...style }}
          >
            {children}
          </Box>
        </Tooltip>
        {asMenu && <Popover {...{ open, anchorEl, onClose }}
          anchorOrigin={{ vertical: settings.upperBar ? 'bottom' : 'top', horizontal: 'left' }}
          transformOrigin={{ vertical: !settings.upperBar ? 'bottom' : 'top', horizontal: 'left' }}
        >
          {asMenu}
        </Popover>}
      </>,
      elementFound)
  : null
}

MupStatus.defaultProps = {
  secondary: false,
  requestAttention: false,
  tooltip: '',
  elements: [],
  asButton: false,
}

MupStatus.propTypes = {
  id: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  focusOnClick: PropTypes.string,
  asMenu: PropTypes.any,
  style: PropTypes.any,
  onClick: PropTypes.func,
  onContextMenu: PropTypes.func,
  requestAttention: PropTypes.bool,
  tooltip: PropTypes.string,
  children: PropTypes.any,
  elements: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.node,
    node: PropTypes.node,
    image: PropTypes.node,
    text: PropTypes.string,
  })).isRequired,
}

export default MupStatus
