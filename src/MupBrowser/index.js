import { Button, List, ListItem, ListItemIcon, ListItemText, Popover, Tooltip } from '@material-ui/core'
import { makeStyles, withTheme } from '@material-ui/core/styles'
import AspectRatioIcon from '@material-ui/icons/AspectRatio'
import DevicesIcon from '@material-ui/icons/Devices'
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft'
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight'
import SettingsIcon from '@material-ui/icons/Settings'
import React, { useState } from 'react'

const useStyles = makeStyles(theme => ({
  buttonMenu: {
    border: '0px none',
    padding: theme.spacing(2, 0),
    borderRadius: '0px',
    minWidth: 'initial',
  },
  iconList: {
    gap: theme.spacing(1),
  }
}))

const MupBrowser = withTheme(({
  theme,
  isExpanded = true,
  initialSide = 'left'
}) => {
  const classes = useStyles(theme)
  const [url, setUrl] = useState('')


  return <>
		browser {url}
  </>
})
export default MupBrowser
