import { useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import DataProvider from '../MuiPanelStore'
import InternalStatus from './InternalStatus'

const MuiStatusBlock = () => {
  const { toggleStatusBarAnnounced  } = useContext(DataProvider)
  const [statusDOM, setStatusDOM] = useState(null)

  useEffect(() => {
    toggleStatusBarAnnounced()
    setStatusDOM(document.getElementById('material-ui-panel-statusBar'))
  }, [])

  return statusDOM
    ? createPortal(<InternalStatus />, statusDOM)
    : null
}

export default MuiStatusBlock