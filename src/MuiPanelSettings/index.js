import { Button, List, ListItem, ListItemIcon, ListItemText, Popover, Tooltip } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AspectRatioIcon from '@material-ui/icons/AspectRatio'
import DevicesIcon from '@material-ui/icons/Devices'
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft'
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight'
import SettingsIcon from '@material-ui/icons/Settings'
import { useState } from 'react'

const useStyles = makeStyles(theme => ({
  buttonMenu: {
    border: '0px none',
    padding: theme.spacing(2, 0),
    borderRadius: '0px',
    minWidth: 'initial',
  },
}))

const MuiPanelManager = ({ isExpanded,	initialSide }) => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  const open = Boolean(anchorEl)

  return <>
    <Tooltip arrow title={'Panel settings'}>
      <Button
        disableElevation
        variant="outlined"
        fullWidth
        onClick={handleClick}
        className={`${classes.buttonMenu}`}
      >
        <SettingsIcon />
      </Button>
    </Tooltip>
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'middle', horizontal: 'left' }}
    >
      <List component="nav" aria-label="main mailbox folders" dense>
        <ListItem dense button>
          <ListItemIcon>{isExpanded
						? <AspectRatioIcon />
						: <DevicesIcon />
          }</ListItemIcon>
          <ListItemText primary="Expanded / Panel" />
        </ListItem>
        <ListItem dense button>
          <ListItemIcon>{initialSide === 'right'
						? <FormatAlignRightIcon />
						: <FormatAlignLeftIcon />
          }</ListItemIcon>
          <ListItemText primary={`Default Side (${initialSide})`} />
        </ListItem>
      </List>
    </Popover>
  </>
}

MuiPanelManager.defaultProps = {
  isExpanded: true,
  initialSide: 'left'
}

export default MuiPanelManager
