import { Box, Tooltip } from '@material-ui/core'
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
  actionHighlightSecondary: {
    '&:hover': {
      backgroundColor: `${theme.palette.augmentColor({ main: theme.palette.secondary.main }).dark} !important`,
      color: `${theme.palette.background.default } !important`
    },
  },
  actionHighlightPrimary: {
    '&:hover': {
      backgroundColor: `${theme.palette.augmentColor({ main: theme.palette.primary.main }).dark} !important`,
      color: `${theme.palette.background.default } !important`
    },
  },
  hightlight: {
    backgroundColor: theme.palette.secondary.main,
    '& > div > *': {
      color: `${theme.palette.background.default } !important`
    }
  },
  hightlightPrimary: {
    backgroundColor: theme.palette.primary.main,
    '& > div > *': {
      color: `${theme.palette.background.default } !important`
    }
  },
}))

const MupStatus = ({
  id,
  secondary,
  style,
  hasToggled,
  focusOnClick,
  onClick = false,
  onContextMenu,
  highlight = 'default',
  tooltip,
  children
}) => {
  const { status, settings, handleSetVisible, handleStatusAnnouncement, handleStatusDestroy } = useContext(DataProvider)
  const [statusObject, setStatusObject] = useState(null)
  const [elementFound, setElementFound] = useState(null)
  const theme = useTheme()
  const classes = useStyles(theme)

  const callbackOnClick = useCallback((e) => {
    onClick(e)
  }, [onClick])

  useEffect(() => {
    if (hasToggled) {
      hasToggled(settings.upperBar)
    }
  }, [settings.upperBar])

  useEffect(() => {
    const elementSearched = document.getElementById(`material-ui-panel-statusBar-${secondary ? 'secondary' : 'primary'}`)
    if (elementSearched !== null) {
      setElementFound(elementSearched)
    }
  }, [secondary, statusObject])

  const callbackHandleStatusAnnouncement = useCallback((id) => {
    console.log(tooltip)
    handleStatusAnnouncement({ id, secondary, tooltip })
  }, [secondary, tooltip, handleStatusAnnouncement])

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

  const generateClasses = () => {
    return clsx([
      classes.default,

      highlight !== 'default' && classes.hightlight,
      highlight === 'primary' && classes.hightlightPrimary,

      (onClick || focusOnClick) && [
        classes.interactive,
        highlight === 'default' && classes.actionNormal,
        highlight !== 'default' && classes.actionHighlight,
        highlight === 'primary' && classes.actionHighlightPrimary,
        highlight === 'secondary' && classes.actionHighlightSecondary
      ],
    ])
  }

  return <>{(statusObject !== null && !!id && elementFound) && createPortal(
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
          : onClick ? callbackOnClick(e) : null}
        onContextMenu={(e) => settings.allowRightClick
          ? onContextMenu ? onContextMenu(e) : null
          : e.preventDefault()}
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={generateClasses()}
        style={{ ...style }}
      >
        {children}
      </Box>
    </Tooltip>,
    elementFound)
  }</>
}

MupStatus.defaultProps = {
  secondary: false,
  highlight: 'default',
  tooltip: '',
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
  highlight: PropTypes.oneOf(['default', 'primary', 'secondary']),
  tooltip: PropTypes.string,
  children: PropTypes.any,
}

export default MupStatus
