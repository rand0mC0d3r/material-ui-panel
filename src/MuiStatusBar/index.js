import { useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import DataProvider from '../MuiPanelStore'
import InternalStatus from './InternalStatus'

export default ({ style, className }) => {
  const { triggerStatusBarAnnounced  } = useContext(DataProvider)
  const [documentElement, setDocumentElement] = useState(null)

  useEffect(() => {
    setDocumentElement(document.getElementById('material-ui-panel-statusBar'))
    triggerStatusBarAnnounced()
  }, [])

  return documentElement
    ? createPortal(<InternalStatus {...{ style, className }} />, documentElement)
    : null
}
