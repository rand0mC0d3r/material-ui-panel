import TextureIcon from '@material-ui/icons/Texture'
import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import DataProvider from '../MuiPanelStore'
import MupHeaderPanel from '../MupHeaderPanel'

const MupPanel = ({
  id, title, hint, tooltip, icon, placement,
  alertsAcknowledged, notifications,
  extraButtons,
  disabled, iconInHeader, noPadding, children }) => {
  const { layout, handlePanelAlerts, handlePanelAnnouncement } = useContext(DataProvider)
  const [side, setSide] = useState('left')
  const [isRegistered, setIsRegistered] = useState(false)
  const [layoutObject, setLayoutObject] = useState()

  useEffect(() => {
    if (!id) {
      console.error('MupPanel: missing attr:id for panel with title+hint:', title, hint)
    } else {
      if (!isRegistered) {
        handlePanelAnnouncement({ iconInHeader, placement, extraButtons, disabled, id, subTitle: hint, side, title, tooltip, icon: icon || <TextureIcon /> })
        setIsRegistered(true)
      }
    }
  }, [id, isRegistered, side, handlePanelAnnouncement, extraButtons, iconInHeader, placement, disabled, title, hint, tooltip, icon])

  useEffect(() => {
    const findObject = layout.find(lo => lo.uniqueId === id)
    if (findObject) {
      setLayoutObject(findObject)
      // if (findObject.notifications?.count === 0) {
      //   alertsAcknowledged()
      // }
    }
  }, [layout, id, alertsAcknowledged])

  useEffect(() => { if (layoutObject) { setSide(layoutObject.side) } }, [layoutObject])

  useEffect(() => {
    if (id && layoutObject) {
      if (notifications.count !== null && notifications.count !== layoutObject.notifications.count  && !!notifications.color) {
        handlePanelAlerts({ id, count: Math.min(99, Math.max(notifications.count, 0)), color: notifications.color })
      }
    }
  }, [notifications.count, notifications.color, id, layoutObject, handlePanelAlerts])

  return layoutObject &&
    layoutObject.isVisible &&
    (layoutObject.asSection &&
      layoutObject.uniqueId
      ? document.getElementById(`${layoutObject.uniqueId}-section`)
      : document.getElementById(`${side}-panel`)) &&
    !!id ? createPortal(
      <div style={{
        order: layoutObject.parentId ? '' : '-1',
        flex: !layoutObject.parentId ? `${layoutObject.isCollapsed ? '0' : '1'} 1 auto` : '1 0 auto',
        display: 'flex',
        height: (layoutObject.parentId || layoutObject.isCollapsed) ? 'unset' :'100%',
        flexDirection: 'column'
      }}>
        {!layoutObject.asSection && <MupHeaderPanel {...{ layoutObject }} />}
        {!layoutObject.isCollapsed && <div
          style={{
            padding: noPadding ? null : '16px',
            alignSelf: 'stretch',
            overflow: 'scroll',
            flex: '1 1 auto'
          }}>
          {children}
        </div>}
      </div>,
      layoutObject.asSection && layoutObject.uniqueId
      ? document.getElementById(`${layoutObject.uniqueId}-section`)
      : document.getElementById(`${side}-panel`)
    )
    : null
}

MupPanel.defaultProps = {
  placement: 'top',
  notifications: {
    count: null,
    color: null,
  },
  alertsAcknowledged: () => { },
  noPadding: false,
  iconInHeader: false,
}

MupPanel.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  hint: PropTypes.string,
  tooltip: PropTypes.string,
  icon: PropTypes.node,
  placement: PropTypes.oneOf(['top', 'bottom']),
  notifications: PropTypes.shape({
    count: PropTypes.number,
    color: PropTypes.string,
  }),
  disabled: PropTypes.bool,
  iconInHeader: PropTypes.bool,
  noPadding: PropTypes.bool,
  children: PropTypes.node,
}

export default MupPanel
