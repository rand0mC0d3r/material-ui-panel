import { Box } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useContext, useEffect, useState } from 'react'
import DataProvider from '../MuiPanelStore'
import MuiSplitter from '../MuiSplitter'
import MupMenuCollapseButton from '../MupMenuCollapseButton'
import MuiMenuButton from './MuiMenuButton'

const menuWidth = '56px'
const leftPanelWidth = '500px'
const rightPanelWidth = '500px'

const styledGrid = {
  bothGrid: {
    'grid-template-columns': 'auto auto 1fr auto auto',
    'grid-template-areas':`
      "leftMenu leftPanel main rightPanel rightMenu"
    `
  },
  leftGrid: {
    'grid-template-columns': 'auto auto 1fr',
    'grid-template-areas':`
      "leftMenu leftPanel main"
    `
  },
  rightGrid: {
    'grid-template-columns': '1fr auto auto',
    'grid-template-areas':`
      "main rightPanel rightMenu"
    `
  },
}

const styledMenus = theme => ({
  bothMenus: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    height: '100%',
  },
  leftMenu: {
    'grid-area': 'leftMenu',
    width: menuWidth,
    borderRight: `1px solid ${theme.palette.divider}`
  },
  rightMenu: {
    width: menuWidth,
    'grid-area': 'rightMenu',
    borderLeft: `1px solid ${theme.palette.divider}`
  },
})

const styledPanel = theme => ({
  panelContainerWrapper: {
    position: 'relative',
    overflow: 'hidden auto',
    display: 'contents',

    '&::-webkit-scrollbar' : {
      display: 'none'
    }
  },
  panelContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // height: '100%',
  },
  leftPanel: {
    gridArea: 'leftPanel',
    borderRight: `1px solid ${theme.palette.divider}`,
    display: 'unset'
  },
  rightPanel: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    display: 'unset',
    gridArea: 'rightPanel',
  },
})

const useStyles = makeStyles((theme, upperbar) => ({
  statusBar: {
    padding: '0px 15px',
    gap: '32px',
    borderBottom: !upperbar ? `1px solid ${theme.palette.divider}` : 'none',
    borderTop: upperbar ? `1px solid ${theme.palette.divider}` : 'none',
    backgroundColor: theme.palette.type === 'light'
      ? theme.palette.augmentColor({ main: theme.palette.divider }).dark
      : theme.palette.background.paper,
    color: `${theme.palette.background.default} !important`,

    '@media (max-width: 1300px)' : {
      gap: '4px',
      padding: '0px 5px',
    }
  },
  statusBarHalf: {
    overflow: 'scroll',
    gap: '13px',

    '&::-webkit-scrollbar': {
      display: 'none'
    },

    '@media (max-width: 1300px)' : {
      gap: '4px',
    }
  },
  wrapper: {
    height: '100%',
    width: '100%',

    position: 'absolute',

  },
  scrollSide: {
    overflow: 'scroll',
    position: 'absolute',
    left: '0px',
    bottom: '0px',
    top: '0px',

    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  root: {
    // height: "100%",
    flex: '1 1 auto',
    // position: "absolute",
    width: '100%',
    overflow: 'hidden',
    display: 'grid',
    'grid-template-rows': '1fr',
    'gap': '0px 0px',
    'grid-auto-flow': 'row',
    backgroundColor: theme.palette.background.default,
  },
  ...styledGrid,
  ...styledMenus(theme),
  ...styledPanel(theme),

  main: { 'grid-area': 'main' },
  iconButton: {
    fontSize: '26px',

    '&:hover': {
      color: theme.palette.primary.main,
    }
  },
  buttonMenu: {
    border: '0px none',
    padding: theme.spacing(2, 0),
    borderRadius: '0px',
    minWidth: 'initial',
  },
  rightGroupButtonMenu: {
    position: 'relative',
    '&::after': {
      content: '"G"',
      backgroundColor: '#CCC',
      position: 'absolute',
      fontSize: '8px',
      lineHeight: '12px',
      width: '12px',
      top: 2,
      borderRadius: '4px',
      left: 2,
    },
  },
  leftGroupButtonMenu: {
    position: 'relative',
    '&::after': {
      content: '"G"',
      backgroundColor: '#CCC',
      position: 'absolute',
      fontSize: '8px',
      lineHeight: '12px',
      width: '10px',
      top: 2,
      borderRadius: '4px',
      right: 2,
    },
  },

  rightButtonMenu: {
    borderRight: '4px solid transparent',
  },
  leftButtonMenu: {
    borderLeft: '4px solid transparent'
  },
  rightActiveButtonMenu: {
    borderRight: `4px solid ${theme.palette.primary.main}`,
  },
  leftActiveButtonMenu: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
  },
  menuOpen: {
    width: menuWidth,
  },
  menuCollapsed: {
    width: '0px',
    border: '0px',
    backgroundColor: theme.palette.background.paper,
    transition: 'background-color 350ms ease-out 100ms',
    opacity: 1,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: theme.palette.background.default,
    }
  },
  emptySpace: {
    flex: '1 1 auto'
  }
}))

const availableSides = ['left', 'right']

const MuiPanelManager = ({
  children,
  allowRightClick = false,
  showCollapseButton = true,
  showSplitterButton = true,
}) => {
  const theme = useTheme()
  const [sides, setSides] = useState()
  const matches = useMediaQuery('(min-width:600px)')
  const { status, settings, sections, toggleSettingIsCollapsed, layout } = useContext(DataProvider)
  const classes = useStyles(theme, settings.upperBar)

  useEffect(() => {
    toggleSettingIsCollapsed(!matches)
  }, [matches])

  useEffect(() => {
    if (layout.length > 0) {
      const foundSides = [
        ...new Set(layout.reduce((acc, val) => {
          acc.push(val.side)

          return acc
        }, []))]
      setSides(foundSides.length === 1 ? foundSides[0] : 'both')
    }
  }, [layout])

  return <Box id="MuiPanelManager"
    display="flex"

    flexDirection={settings.upperBar ? 'column-reverse' : 'column'}
    className={classes.wrapper}>
    <div
      id="MuiPanels"
      className={`${classes.root} ${classes[`${sides}Grid`]}`}>
      {availableSides
        .filter(side => layout.some(lo => lo.side === side && !lo.asContent))
        .map(side => <div
          key={`${side}_panels`}
          id={`MuiPanels_${side}Side`}
          onContextMenu={(e) => { !allowRightClick && e.preventDefault() }}
          className={`
          ${classes.panelContainerWrapper}
          ${layout.some(l => l.side === side && !l.asSection && !l.asContent && l.isVisible) &&
            (side === 'left' ? classes.leftPanel : classes.rightPanel)}`}
        >
          <div
            id={`${side}-panel`} key={`${side}-panel`}
            className={`${classes.panelContainer}`}
            style={{
              gridArea: `${side}Panel`,
              overflow: 'hidden auto',
              width: settings.isCollapsed
                ? '0px'
                : (layout.some(l => l.side === side && l.isVisible && !l.asSection)
                  ? (side === 'left'
                    ? leftPanelWidth
                    : rightPanelWidth)
                  : 'unset'),
              height: layout.filter(l => l.side === side && l.isVisible).length > 1 ? 'unset' : '100%'
            }}
          />
        </div>)}

      {availableSides
        .filter(side => layout.some(lo => lo.side === side && !lo.asContent))
        .map(side => <div key={`${side}_menus`}>
          {layout.filter(lo => lo.side === side && !lo.asContent && !lo.asSection).length > 0 &&
              <div
                id={`${side}-menu`}
                onDoubleClick={() => {settings.isCollapsed && toggleSettingIsCollapsed() } }
                onContextMenu={(e) => { !allowRightClick && e.preventDefault() }}
                className={`${classes[`${side}Menu`]} ${classes.bothMenus} ${settings.isCollapsed
                ? classes.menuCollapsed
                : classes.menuOpen}`}
              >
                {showCollapseButton && <MupMenuCollapseButton {...{ side }} />}
                <div className={`${classes.scrollSide}`}>
                  {!settings.isCollapsed && <>
                    {layout
                      .filter(lo => lo.side === side)
                      .filter(lo => !lo.asEmbedded && !lo.asContent && !lo.asSection)
                      .map(lo => <MuiMenuButton
                        extraIcons={layout.filter(l => lo.uniqueId === l.parentId).map(l => l.icon)}
                        key={lo.uniqueId}
                        {...{ lo, side }}
                      />)}
                    <div className={classes.emptySpace} onDoubleClick={() => { !settings.isCollapsed && toggleSettingIsCollapsed() }} />
                  </>}
                </div>
              </div>
          }
        </div>)}

      <div style={{ gridArea: 'main', display: 'flex', minWidth: '500px' }}>
        {sections.filter(section => !section.parentId).map(section => <MuiSplitter {...{ showSplitterButton }} key={ section.id} section={section}
          isRoot />)}
      </div>

      {children}

    </div>

    {status.length > 0 && <Box
      id="MuiStatusBarList"
      onContextMenu={(e) => { e.preventDefault() }}
      display="flex"
      className={classes.statusBar}
      justifyContent="space-between"
    >
      {availableSides
        .map(side => <Box
          id={`material-ui-panel-statusBar-${side}`}
          key={`${side}_status`}
          display="flex"
          justifyContent={side === 'left' ? 'flex-start' : 'flex-start'}
          className={classes.statusBarHalf}
        />)}
    </Box>}
  </Box>
}

export default MuiPanelManager