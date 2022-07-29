import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useContext } from 'react'
import DataProvider from '../../MuiPanelStore'

const useStyles = makeStyles((theme) => ({
  statusBar: {
    padding: '0px 8px',
    gap: '4px',
    display: 'flex',
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
    flexWrap: 'wrap',
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
  const { status, settings } = useContext(DataProvider)
  const classes = useStyles(theme)

  return <>
    {status.length > 0 && <div {...{ style }}
      id="material-ui-panel-statusBar-wrapper"
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
  </>
}
