import { Box, Select, Tooltip, Typography } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import Popover from '@material-ui/core/Popover'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen'
import AmpStoriesIcon from '@material-ui/icons/AmpStories'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import ViewStreamIcon from '@material-ui/icons/ViewStream'
import { useContext } from 'react'
import DataProvider from '../MuiPanelStore'

const useStyles = makeStyles(( theme ) => ({
  popover: {
    '& .MuiPopover-paper': {
      border: `1px solid ${theme.palette.divider}`
    }
  }
}))

const MupMenuOptions = ({
  lo,
  anchorEl,
  setAnchorEl,
  side,
  underMenu = false,
}) => {
  const { layout, handleSetAsEmbedded, handleSetAsGroup, handleUnSetAsEmbedded, handleSetSide } = useContext(DataProvider)
  const open = Boolean(anchorEl)
  const theme = useTheme()
  const classes = useStyles(theme)
  const onClose = () => { setAnchorEl(null) }

  return <Popover className={classes.popover}
    marginThreshold={0}
    elevation={0}
    {...{open, anchorEl, onClose}}
    anchorOrigin={underMenu
      ? { vertical: 'bottom', horizontal: 'center' }
      : { vertical: 'center', horizontal: side !== 'right' ? 'right' : 'left' }
    }
    transformOrigin={underMenu
      ? { vertical: 'top', horizontal: 'center' }
      : { vertical: 'center', horizontal: side !== 'right' ? 'left' : 'right' }
    }>
    <Box
      style={{
        gap: theme.spacing(1),
        padding: theme.spacing(1)
      }}
      display="flex"
      flexDirection="row"
      alignItems="center"
    >
      {!lo.asEmbedded &&
        <Tooltip arrow
          title="Swap sides">
          <SwapHorizIcon onClick={() => handleSetSide({ uniqueId: lo.uniqueId })}
            style={{ fontSize: 20 }} />
        </Tooltip>}
      {!lo.noPanel && <>
        {!lo.asEmbedded
          ? <>{lo.asGroup
            ? <ViewStreamIcon onClick={() => handleSetAsGroup({ uniqueId: lo.uniqueId })} />
            : <Tooltip arrow
              title="Promote as group">
              <AmpStoriesIcon
                style={{ transform: 'rotateZ(90deg)' }}
                onClick={() => handleSetAsGroup({ uniqueId: lo.uniqueId })}
              />
            </Tooltip>}
          </>
          : <Tooltip arrow
            title="Detach as individual">
            <AddToHomeScreenIcon onClick={() => handleUnSetAsEmbedded({ uniqueId: lo.uniqueId })} />
          </Tooltip>}

        {!lo.asEmbedded && !lo.asGroup && <Select fullWidth
          disabled={lo.asGroup || !layout.some(lo => lo.asGroup)}
          onChange={(event) => { handleSetAsEmbedded({ uniqueId: lo.uniqueId, parentId: event.target.value }) }}>
          {layout.filter(lo => lo.asGroup).map(lo => <MenuItem value={lo.uniqueId}>
            <Box display="flex"
              alignItems="center"
              style={{ gap: theme.spacing(14), alignItems: 'center' }}>
              {lo.icon}
              <Typography variant="caption"
                color="textSecondary">{lo.title}</Typography>
            </Box>
          </MenuItem>)}
        </Select>}
      </>}
    </Box>
  </Popover>
}

export default MupMenuOptions
