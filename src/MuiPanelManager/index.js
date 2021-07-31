import { makeStyles, withTheme } from '@material-ui/core/styles';
import React, { cloneElement, Fragment, useContext, useEffect, useState } from 'react';
import MuiMenuCollapseButton from '../MuiMenuCollapseButton';
import MuiPanelSettings from '../MuiPanelSettings';
import DataProvider, { MuiPanelProvider } from '../MuiPanelStore';
import MuiMenuButton from './MuiMenuButton';

const menuWidth = '56px';

const styledGrid = {
  bothGrid: {
    "grid-template-columns": `auto auto 1fr auto auto`,
    "grid-template-areas":`
      "leftMenu leftPanel main rightPanel rightMenu"
    `
  },
  leftGrid: {
    "grid-template-columns": `auto auto 1fr`,
    "grid-template-areas":`
      "leftMenu leftPanel main"
    `
  },
  rightGrid: {
    "grid-template-columns": `1fr auto auto`,
    "grid-template-areas":`
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
  },
  leftMenu: {
    "grid-area": "leftMenu",
    width: menuWidth,
    borderRight: `1px solid ${theme.palette.divider}`
  },
  rightMenu: {
    width: menuWidth,
    "grid-area": "rightMenu",
    borderLeft: `1px solid ${theme.palette.divider}`
  },
})

const styledPanel = theme => ({
    panelContainerWrapper: {
    position: 'relative',
    overflow: 'hidden auto',
    display: 'none'
  },
  panelContainer: {
    position: "relative",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  leftPanel: {
    gridArea: "leftPanel",
    borderRight: `1px solid ${theme.palette.divider}`,
    display: 'unset'
  },
  rightPanel: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    display: 'unset',
    gridArea: "rightPanel",
  },
})

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    position: "absolute",
    width: "100%",
    overflow: "hidden",
    display: "grid",
    "grid-template-rows": "1fr",
    "gap": "0px 0px",
    "grid-auto-flow": "row",
    backgroundColor: theme.palette.background.default,
  },
  ...styledGrid,
  ...styledMenus(theme),
  ...styledPanel(theme),

  main: { "grid-area": "main" },
  iconButton: {
    fontSize: "26px",

    "&:hover": {
      color: theme.palette.primary.main,
    }
  },
  buttonMenu: {
    border: "0px none",
    padding: theme.spacing(2, 0),
    borderRadius: "0px",
    minWidth: "initial",
  },
  rightGroupButtonMenu: {
    position: 'relative',
    "&::after": {
      content: '"G"',
      backgroundColor: "#CCC",
      position: 'absolute',
      fontSize: "8px",
      lineHeight: "12px",
      width: '12px',
      top: 2,
      borderRadius: "4px",
      left: 2,
    },
  },
  leftGroupButtonMenu: {
    position: 'relative',
    "&::after": {
      content: '"G"',
      backgroundColor: "#CCC",
      position: 'absolute',
      fontSize: "8px",
      lineHeight: "12px",
      width: '10px',
      top: 2,
      borderRadius: "4px",
      right: 2,
    },
  },

  rightButtonMenu: {
    borderRight: "4px solid transparent",
  },
  leftButtonMenu: {
    borderLeft: "4px solid transparent"
  },
  rightActiveButtonMenu: {
    borderRight: `4px solid ${theme.palette.primary.main}`,
  },
  leftActiveButtonMenu: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
  },
  panelWrapper: {
    display: 'flex',
    // alignItems: 'stretch'
  },
  panelContent: {
    padding: "16px",
  },
  leftPanelWrapper: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
  },
  rightPanelWrapper: {
    borderRight: `4px solid ${theme.palette.primary.main}`,
  },
  menuOpen: {
    width: menuWidth,
  },
  menuCollapsed: {
    width: '8px',
    backgroundColor: theme.palette.background.paper,
    transition: "background-color 350ms ease-out 100ms",
    opacity: 1,
    cursor: 'pointer',

    "&:hover": {
      backgroundColor: theme.palette.background.default,
    }
  },
  emptySpace: {
    flex: '1 1 auto'
  }
}));

const availableSides = ['left', 'right'];
const MuiPanelManager = withTheme(({
  children,
  theme,
  allowRightClick = false,
  showCollapseButton = true,
}) => {
  const classes = useStyles(theme)
  const [sides, setSides] = useState()

  const { settings, toggleSettingIsCollapsed, layout } = useContext(DataProvider);

  useEffect(() => {
    if (layout.length > 0) {
      const foundSides = [...new Set(layout.reduce((acc, val) => { acc.push(val.side); return acc }, []))]
      setSides(foundSides.length === 1 ? foundSides[0] : 'both')
    }
  }, [layout]);

  return <div className={`${classes.root} ${classes[`${sides}Grid`]}`}>
    {availableSides
      .map(side => <div
        onContextMenu={(e) => { !allowRightClick && e.preventDefault() }}
        className={`${classes.panelContainerWrapper} ${layout.some(l => l.side === side && l.isVisible) && (side === 'left' ? classes.leftPanel : classes.rightPanel)}`}
      >
        <div
        id={`${side}-panel`} key={`${side}-panel`}
        className={`${classes.panelContainer}`}
        style={{
          gridArea: `${side}Panel`,
          overflow: 'hidden auto',
          width: settings.isCollapsed ? '0px' : (layout.some(l => l.side === side && l.isVisible) ? '500px' : 'unset')
        }}
      /></div>)}
    {availableSides
      .filter(side => layout.some(lo => lo.side === side))
      .map((side, index) => <Fragment key={index}>
        {layout.filter(lo => lo.side === side).length > 0 && <div
          onDoubleClick={() => {settings.isCollapsed && toggleSettingIsCollapsed() } }

          onContextMenu={(e) => { !allowRightClick && e.preventDefault() }}
          className={`${classes[`${side}Menu`]} ${classes.bothMenus} ${settings.isCollapsed ? classes.menuCollapsed : classes.menuOpen}`}
        >
          {showCollapseButton && <MuiMenuCollapseButton {...{ side }} />}
          {!settings.isCollapsed && <>
            {layout
              .filter(lo => lo.side === side)
              .filter(lo => !lo.asEmbedded)
              .map(lo => <MuiMenuButton key={lo.uniqueId} {...{ lo, side }} />)}
            <div className={classes.emptySpace} onDoubleClick={() => { !settings.isCollapsed && toggleSettingIsCollapsed() }} />
            {index === 0 && <MuiPanelSettings />}
          </>}
        </div>}
    </Fragment>)}

    {children.map((child, i) => cloneElement(child, { key: i, style: { gridArea: "main"}}))}
      </div>
})

export default MuiPanelManager;