import { Box } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useContext } from 'react'
import DataProvider from '../../MuiPanelStore'

const useStyles = makeStyles((theme) => ({
  statusBar: {
    padding: '0px 8px',
    gap: '8px',
    height: '32px',
    backgroundColor: theme.palette.type === 'light'
      ? theme.palette.augmentColor({ main: theme.palette.divider }).dark
      : theme.palette.background.paper,
    color: `${theme.palette.background.default} !important`,
  },
  statusBarHalf: {
    overflow: 'scroll',
    scrollSnapType: 'both mandatory',
    gap: '8px',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
  },
  statusBarHalfSecondary: {
    overflow: 'hidden',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
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

const availableSides = ['left', 'right']

export default ({ style, className }) => {
  const theme = useTheme()
  const { status, settings } = useContext(DataProvider)
  const classes = useStyles(theme)

  return <>
    {status.length > 0 && <Box
      id="material-ui-panel-statusBar-wrapper"
      onContextMenu={(e) => { e.preventDefault() }}
      display="flex"
      className={[classes.statusBar, className].filter(e => !!e).join(' ')}
      justifyContent="space-between"
      style={{
        ...style,
        borderBottom: settings.upperBar ? `1px solid ${theme.palette.divider}` : 'none',
        borderTop: !settings.upperBar ? `1px solid ${theme.palette.divider}` : 'none',
      }}
    >
      {availableSides.map(side => <Box
        id={`material-ui-panel-statusBar-${side}`}
        key={`${side}_status`}
        display="flex"
        justifyContent={side === 'left' ? 'flex-start' : 'flex-end'}
        className={side === 'left' ? classes.statusBarHalf : classes.statusBarHalfSecondary}
      />)}
    </Box>}
  </>
}
