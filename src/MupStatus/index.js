import { Box, SvgIcon, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { useCallback, useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import DataProvider from '../MuiPanelStore'

const useStyles = makeStyles(theme => ({
  root: {
    '&:hover': {
      backgroundColor: `${theme.palette.augmentColor({main: theme.palette.divider}).light} !important`
    }
  },
}))

const MupStatus = ({
  id,
  side,
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

  const callbackOnClick = useCallback(
    (e) => { if (onClick) { onClick(e) } },
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

  return (statusObject !== null && !!id) ? createPortal(<Box
    key={`MupStatus_${id}_wrapper`}
    title={tooltip}
    onClick={(e) => focusOnClick
      ? handleSetVisible({ uniqueId: focusOnClick })
      : onClick ? callbackOnClick(e) : null
    }
    onContextMenu={(e) => settings.allowRightClick
      ? onContextMenu ? onContextMenu(e) : null
      : e.preventDefault()
    }
    display="flex"
    alignItems="center"
    className={(focusOnClick || onClick) ? classes.root : ''}
    style={{
      gap: '16px',
      padding: '3px 6px',
      cursor: (focusOnClick || !!onClick) ? 'pointer' : 'initial',
      backgroundColor: requestAttention ? theme.palette.secondary.main : 'transparent',
    }}
  >
    {elements.map(element => <Box display="flex" alignItems="center" key={`MupStatus_${element.text}_container`} style={{ gap: '6px' }}>
      {element.icon && <SvgIcon style={{ fontSize: 20}} color='action'>{element.icon}</SvgIcon>}
      {element.text && <Typography variant="subtitle2" color="textPrimary" style={{ lineHeight: '0px', whiteSpace: 'nowrap', userSelect: 'none' }}>
        {element.text}
      </Typography>}
    </Box>)}
  </Box>,
  document.getElementById(`material-ui-panel-statusBar-${side}`))
  : null
}

MupStatus.defaultProps = {
  side: 'left',
  requestAttention: false,
  tooltip: '',
  elements: [],
}

MupStatus.propTypes = {
  id: PropTypes.string,
  side: PropTypes.oneOf(['left', 'right']),
  focusOnClick: PropTypes.string,
  onClick: PropTypes.func,
  onContextMenu: PropTypes.func,
  requestAttention: PropTypes.bool,
  tooltip: PropTypes.string,
  elements: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.node,
    text: PropTypes.string,
  })),
}

export default MupStatus