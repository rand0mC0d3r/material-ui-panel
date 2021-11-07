import PropTypes from 'prop-types'
import { useCallback, useContext, useEffect, useState } from 'react'
import DataProvider from '../MuiPanelStore'

const MupButton = ({ id, tooltip, shortText, disabled, icon, showIcon, onClick }) => {
  const { handlePanelAnnouncement, handlePanelDestroy, handleSetIcon } = useContext(DataProvider)
  const [isRegistered, setIsRegistered] = useState(false)

  const callbackRegisterPanel = useCallback((id) => {
    handlePanelAnnouncement({
      side: 'left',
      handleOnClick: onClick,
      noPanel: true,
      icon, id, shortText, showIcon, tooltip, disabled
    })
  }, [handlePanelAnnouncement, icon, onClick, shortText, disabled, showIcon, tooltip])

  const callbackHandlePaneDestroy = useCallback((id) => {
    handlePanelDestroy({ id })
  }, [])

  const callbackHandleSetIcon = useCallback((icon) => {
    handleSetIcon({ uniqueId: id, icon })
  }, [id])

  useEffect(() => {
    if (id && icon && !isRegistered) {
      callbackRegisterPanel(id)
      setIsRegistered(true)
    }
  }, [isRegistered, id, icon, callbackRegisterPanel])

  useEffect(() => {
    if (id && icon && isRegistered) {
      callbackHandleSetIcon(icon)
    }
  }, [isRegistered, id, icon, callbackHandleSetIcon])

  useEffect(() => {
    return () => {
      if (id) { callbackHandlePaneDestroy(id); setIsRegistered(false) }
    }
  }, [id, callbackHandlePaneDestroy])

  return null
}

MupButton.defaultProps = {
  showIcon: true,
  disabled: false,
}

MupButton.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  tooltip: PropTypes.string,
  shortText: PropTypes.string,
  showIcon: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default MupButton