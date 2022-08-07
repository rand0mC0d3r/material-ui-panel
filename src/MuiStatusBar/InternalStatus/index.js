import { Popover } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined'
import { Fragment, useContext, useState } from 'react'
import DataProvider from '../../MuiPanelStore'

const useStyles = makeStyles((theme) => ({
  statusBar: {
    padding: '0px 8px',
    gap: '4px',
    display: 'flex',
    minHeight: '28px',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.type === 'light'
      ? theme.palette.augmentColor({ main: theme.palette.divider }).dark
      : theme.palette.background.paper,
    color: `${theme.palette.background.default} !important`,
  },
  upper: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    borderTop: 'none',
  },
  lower: {
    borderBottom: 'none',
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  child: {
    display: 'flex',
    flexWrap: 'nowrap',
  },
  statusEntry: {
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    padding: '8px',
  },
  statusEntryItem: {
    display: 'flex',
    minWidth: '165px',
    flexDirection: 'row',
    gap: '4px',
    padding: '4px 8px',

    '&:hover': {
      backgroundColor: `${theme.palette.augmentColor({ main: theme.palette.primary.light }).light} !important`,
      color: `${theme.palette.background.default } !important`
    },
  },
  primary: {
    overflow: 'scroll',
    justifyContent: 'flex-start',
    scrollSnapType: 'both mandatory',
    gap: '4px',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
  },
  secondary: {
    overflow: 'hidden',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    scrollSnapType: 'both mandatory',

    gap: '0px 8px',
    flex: '1 1 auto',
    width: '0px',
    minWidth: '100px',

    '&::-webkit-scrollbar': {
      display: 'none'
    },
  },
}))

export default ({ style, className }) => {
  const theme = useTheme()
  const { status, settings, handleStatusVisibilityToggle, tooltipComponent } = useContext(DataProvider)
  const classes = useStyles(theme)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const onClose = () => setAnchorEl(null)

  const statusEntry = (s) => <div className={classes.statusEntryItem}
    onClick={() => handleStatusVisibilityToggle({ id: s.uniqueId })}>
    {s.visible ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankOutlinedIcon />}
    {s.children}
  </div>

  const entryWrapper = (s) => <Fragment key={s.uniqueId}>{tooltipComponent !== undefined
    ? <>{tooltipComponent('Toggle visiblity of tile', statusEntry(s))}</>
    : statusEntry(s)}
  </Fragment>

  return <>
    {status.length > 0 && <div {...{ style }}
      id="material-ui-panel-statusBar-wrapper"
      onContextMenu={e => {
        e.preventDefault()
        setAnchorEl(e.currentTarget)
      }}
      className={[
        className,
        classes.statusBar,
        settings.upperBar ? classes.upper : classes.lower
      ].filter(e => !!e).join(' ')}
    >
      {['primary', 'secondary'].map((side, i) => <div
        id={`material-ui-panel-statusBar-${side}`}
        key={`${side}_status`}
        className={[
          classes.child,
          i === 0 ? classes.primary : classes.secondary
        ].filter(e => !!e).join(' ')}
      />)}
    </div>}

    <Popover {...{ open, anchorEl, onClose }}
      id={'toggle-status-popover'}
      anchorOrigin={{ vertical: settings.upperBar ? 'top' : 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: !settings.upperBar ? 'bottom' : 'top', horizontal: 'center' }}
      style={{ marginTop: `${(settings.upperBar ? 1 : -1) * 12}px` }}
    >
      <div onContextMenu={e => { e.preventDefault() }} className={classes.statusEntry}>
        <div>{status.filter(s=>!s.secondary).map(s => entryWrapper(s))}</div>
        <div>{status.filter(s=>s.secondary).map(s => entryWrapper(s))}</div>
      </div>
    </Popover>
  </>
}
