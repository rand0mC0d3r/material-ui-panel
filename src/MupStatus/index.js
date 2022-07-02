import { Box, Popover, SvgIcon, Tooltip, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { useCallback, useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import DataProvider from '../MuiPanelStore'

const useStyles = makeStyles(theme => ({
  default: {
    height: '100%',
    padding: '0px 4px',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch'
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
  secondary,
  style,
  focusOnClick,
  onClick,
  onContextMenu,
  requestAttention,
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
            className={`${classes.default} ${(focusOnClick || onClick || asMenu)
            ? classes.root
            : ''}`}
            style={{
              ...style,
              gap: '16px',
              cursor: (focusOnClick || !!onClick || asMenu) ? 'pointer' : 'initial',
              backgroundColor: requestAttention ? theme.palette.secondary.main : 'transparent',
            }}
          >
            {/* {elements.map(element => <Box display="flex" alignItems="center"
              key={`MupStatus_${element.text}_container`}
              style={{ gap: '6px' }}>
              {element.node && <>{element.node}</>}
              {element.icon && <SvgIcon style={{ fontSize: 20 }} color='action'>{element.icon}</SvgIcon>}
              {element.image && <img
                alt="injected element"
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: element.mask ? '50%' : '0px',
                }} src={element.image} />}
              {element.text && <Typography variant="subtitle2" color="textPrimary" style={{ lineHeight: '0px', whiteSpace: 'nowrap', userSelect: 'none' }}>
                {element.text}
              </Typography>}
            </Box>)} */}
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