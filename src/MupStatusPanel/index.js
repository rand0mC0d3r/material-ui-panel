/* eslint-disable no-unused-vars */
import { Popover } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import DataProvider from '../MuiPanelStore'
import MupStatus from '../MupStatus'


const MupStatusPanel = ({
  id,
  secondary,
  style,
  hasToggled,
  focusOnClick,
  onClick = () => { },
  onContextMenu,
  highlight = 'default',
  tooltip,
  children,
  popover
}) => {
  const { status, settings, handleSetVisible, tooltipComponent, handleStatusAnnouncement, handleStatusDestroy } = useContext(DataProvider)
  const [statusObject, setStatusObject] = useState(null)
  const [elementFound, setElementFound] = useState(null)
  const theme = useTheme()

  const [anchorEl, setAnchorEl] = useState(null)
  const [isToggled, setIsToggled] = useState(false)
  const open = Boolean(anchorEl)

  const onClose = () => setAnchorEl(null)

  return <>
    <MupStatus {...{ id, tooltip }}
      onClick={e => setAnchorEl(e.currentTarget)}
      hasToggled={() => { setIsToggled(!isToggled) }}
      style={{ ...style, minWidth: '32px' }}
    >
      {children}
    </MupStatus>

    <Popover {...{ open, anchorEl, onClose }}
      id='popover'
      anchorOrigin={{ vertical: isToggled ? 'top' : 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: !isToggled ? 'bottom' : 'top', horizontal: 'center' }}
      style={{ marginTop: `${(isToggled ? 1 : -1) * 12}px` }}
    >
      {popover}
    </Popover>
  </>
}

MupStatusPanel.defaultProps = {
  secondary: false,
  highlight: 'default',
  tooltip: '',
  asButton: false,
}

MupStatusPanel.propTypes = {
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

export default MupStatusPanel
