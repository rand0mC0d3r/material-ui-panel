import { Box, Button, Tooltip, Typography } from '@material-ui/core'
import { makeStyles, withTheme } from '@material-ui/core/styles'
import AmpStoriesIcon from '@material-ui/icons/AmpStories'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import React, { cloneElement, useContext } from 'react'
import DataProvider from '../MuiPanelStore'
import MupMenuOptions from '../MupMenuOptions'
const fontSize = 20

const useStyles = makeStyles(theme => ({
  collapseButton: {
    padding: '0px',
    width: theme.spacing(3),
    minWidth: theme.spacing(3),
    lineHeight: '0px',
    // border: '1px solid red'
  },
  defaultFunctions: {
    border: `1px dotted ${theme.palette.divider}`,
    borderRadius: '4px',
    display: 'flex',
    gap: theme.spacing(0.5),
    padding: '0px',
  },
  header: {
    cursor: 'default',
    position: 'relative',
    gap: theme.spacing(1),
    height: '30px',
    userSelect: 'none',
    padding: theme.spacing(1.5, 2, 1.5, 1),
    borderTop: '1px solid transparent',
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
    backdropFilter: 'blur(4px)',
  },
}))

const MupHeaderPanel = withTheme(({
  layoutObject: { uniqueId, side, iconInHeader, icon, extraButtons, asEmbedded, isCollapsed, title, subTitle, asGroup },
  layoutObject,
  theme,
}) => {
  const classes = useStyles(theme)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const { handleToggleCollapse, tooltipComponent } = useContext(DataProvider)

  const handleClick = (event) => { setAnchorEl(event.currentTarget) }

  const wrapOrNotInTooltip = (tooltip, extras = {},  node) => {
    return tooltipComponent && tooltip
      ? <>{tooltipComponent(tooltip, cloneElement(node, extras))}</>
      : cloneElement(node, extras)
  }

  return <Box
    justifyContent="space-between"
    onDoubleClick={() => handleToggleCollapse({ uniqueId })}
    alignItems="center"
    onContextMenu={(e) => { e.preventDefault(); handleClick(e) }}
    display="flex"
    className={`${classes.header}`}
  >
    <MupMenuOptions underMenu={true} {...{ lo: layoutObject, side, anchorEl, setAnchorEl }} />
    <Box display="flex" alignItems="center" style={{ gap: theme.spacing(1) }}>
      <Tooltip arrow title="Click to toggle collapse">
        <Button disableRipple disableElevation onClick={() => handleToggleCollapse({ uniqueId })}
          className={classes.collapseButton}>
          {isCollapsed ? <ChevronRightIcon style={{ fontSize }} /> : <ExpandMoreIcon style={{ fontSize }} />}
        </Button>
      </Tooltip>
      {iconInHeader && icon !== undefined && cloneElement(icon, { color: 'disabled', style: { fontSize: 20 } })}
      <Box
        style={{ gap: theme.spacing(1) }}
        flexWrap='wrap'
        display="flex"
        alignItems="center"
      >
        <Typography
          color={asEmbedded ? 'textSecondary' : 'textPrimary'}
          style={{
            maxWidth: '265px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            lineHeight: 'initial',
            fontWeight: 'bold'
          }}
          variant='subtitle2'
        >
          {title}
        </Typography>
        {subTitle && <Tooltip
          title={subTitle}
          placement='bottom'
        >
          <InfoOutlinedIcon style={{ fontSize: '16px', color: theme.palette.text.hint }} />
        </Tooltip>}
      </Box>
    </Box>
    <Box
      display="flex"
      alignItems="center"
      style={{
        gap: theme.spacing(1),
        height: '32px'
      }}
    >
      {extraButtons && <>
        {extraButtons.map(extraButton => <div
          key={extraButton.key}
          onClick={() => extraButton.onClick && extraButton.onClick()}
          key={extraButton.key}>
          {extraButton.node && <>
            {wrapOrNotInTooltip(extraButton.tooltip, {}, extraButton.node)}
          </>}
          {extraButton.icon && <>
            <Button
              className={classes.collapseButton}
              size="small">
              {wrapOrNotInTooltip(extraButton.tooltip,
                { color: 'action' },
                extraButton.icon
              )}
            </Button>
          </>}
        </div>)}
      </>}
      <div className={classes.defaultFunctions}>
        {asGroup && <Tooltip arrow title="As group..." placement='bottom'>
          <AmpStoriesIcon
            style={{
              fontSize: '16px',
              color: theme.palette.background.default,
              transform: 'rotateZ(90deg)',
              background: theme.palette.divider,
              borderRadius: '4px',
              padding: '4px 2px',
              margin: '0px 4px',
            }}
          />
        </Tooltip>}
        <Tooltip title="More options for the panel" arrow>
          <Button
            className={classes.collapseButton}
            size="small"
            onClick={(e) => { e.preventDefault(); handleClick(e) }}
          >
            <MoreHorizIcon color="action" />
          </Button>
        </Tooltip>
      </div>
    </Box>
  </Box>
})

export default MupHeaderPanel
