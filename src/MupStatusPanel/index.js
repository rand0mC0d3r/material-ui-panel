import { Popover } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from 'react'
import DataProvider from '../MuiPanelStore'
import MupStatus from '../MupStatus'

const MupStatusPanel = ({
  id,
  secondary,
  style,
  tooltip,
  children,
  popover
}) => {
  const { status } = useContext(DataProvider)
  const [statusObject, setStatusObject] = useState(null)

  const [anchorEl, setAnchorEl] = useState(null)
  const [isToggled, setIsToggled] = useState(false)
  const open = Boolean(anchorEl)

  useEffect(() => {
    if (statusObject === null && status.some(item => item.uniqueId === id)) {
      setStatusObject(status.find(item => item.uniqueId === id))
    }
  }, [status, id, statusObject])

  const onClose = () => setAnchorEl(null)

  return <>
    <MupStatus {...{ id, tooltip, secondary }}
      onClick={e => setAnchorEl(e.currentTarget)}
      hasToggled={() => { setIsToggled(!isToggled) }}
      style={{ ...style, minWidth: '24px' }}
    >
      {children}
    </MupStatus>

    <Popover {...{ open, anchorEl, onClose }}
      id={`${id}-status-popover`}
      anchorOrigin={{ vertical: isToggled ? 'top' : 'bottom', horizontal: statusObject?.secondary ? 'right' : 'left' }}
      transformOrigin={{ vertical: !isToggled ? 'bottom' : 'top', horizontal: statusObject?.secondary ? 'right' : 'left' }}
      style={{ marginTop: `${(isToggled ? 1 : -1) * 12}px` }}
    >
      {popover}
    </Popover>
  </>
}

MupStatusPanel.defaultProps = {
  secondary: false,
  tooltip: '',
}

MupStatusPanel.propTypes = {
  id: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  style: PropTypes.any,
  tooltip: PropTypes.string,
  children: PropTypes.any,
  popover: PropTypes.any,
}

export default MupStatusPanel
