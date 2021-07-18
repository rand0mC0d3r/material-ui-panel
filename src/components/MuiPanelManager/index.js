import { Badge, Box, Button, Tooltip } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import React, { cloneElement, Fragment, useContext, useEffect, useState } from 'react';
import DataProvider from '../MuiContextStore';
import MuiPanelHeader from '../MuiPanelHeader';
import MuiPanelSettings from '../MuiPanelSettings';

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
  shortText: {
    fontSize: '10px',
    width: '40px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
  },
  bothGrid: {
    "grid-template-columns": `54px auto 1fr auto 54px`,
    "grid-template-areas":`
      "left-menu left-panel main right-panel right-menu"
    `
  },
  leftGrid: {
    "grid-template-columns": `54px auto 1fr`,
    "grid-template-areas":`
      "left-menu left-panel main"
    `
  },
  rightRight: {
    "grid-template-columns": `1fr auto 54px`,
    "grid-template-areas":`
      "left-menu left-panel main right-panel right-menu"
    `
  },

  bothMenus: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  leftMenu: {
    "grid-area": "left-menu",
    borderRight: `1px solid ${theme.palette.divider}`
  },
  rightMenu: {
    "grid-area": "right-menu",
    borderLeft: `1px solid ${theme.palette.divider}`
  },

  panelContainer: {
    position: "relative",
    overflow: 'scroll',
  },
  leftPanel: {
    "grid-area": "left-panel",
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  topMenu: { "grid-area": "top-menu" },
  topPanel: { "grid-area": "top-panel" },
  rightPanel: { "grid-area": "right-panel" },

  bottomPanel: { "grid-area": "bottom-panel" },
  bottomMenu: { "grid-area": "bottom-menu" },
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
    borderRight: "3px solid transparent",
  },
  leftButtonMenu: {
    borderLeft: "3px solid transparent"
  },
  rightActiveButtonMenu: {
    borderRight: `3px solid ${theme.palette.primary.main}`,
  },
  leftActiveButtonMenu: {
    borderLeft: `3px solid ${theme.palette.primary.main}`,
  },
  panelWrapper: {
    display: 'flex',
    // alignItems: 'stretch'
  },
  panelContent: {
    padding: "16px",
  },
  leftPanelWrapper: {
    borderLeft: `3px solid ${theme.palette.primary.main}`,
  },
  rightPanelWrapper: {
    borderRight: `3px solid ${theme.palette.primary.main}`,
  }
}));

const MuiPanelManager = withTheme(({
  children,
  theme,
  allowRightClick = false,
}) => {
  const classes = useStyles(theme)
  const [sides, setSides] = useState('both')
  const { layout, rows,  handleSetVisible } = useContext(DataProvider);

  useEffect(() => {
    const foundSides = [...new Set(layout.reduce((acc, val) => { acc.push(val.side); return acc }, []))]
    setSides(foundSides.length === 1 ? foundSides[0] : 'both')
  }, [layout]);

  return <div
    onContextMenu={(e) => { !allowRightClick && e.preventDefault() }}
    className={`${classes.root} ${classes[`${sides}Grid`]}`}
  >
    {['left', 'right']
      .filter(side => layout.some(lo => lo.side === side))
      .map((side, index) => <Fragment key={index}>
        {layout.filter(lo => lo.side === side).length > 0 && <div
          className={`${classes[`${side}Menu`]} ${classes.bothMenus}`}
        >
        <div>
            {layout
              .filter(lo => lo.side === side)
              .filter(lo => !lo.asEmbedded)
              .map(lo => <Tooltip
                arrow
                key={lo.index}
            placement={lo.side}
            enterDelay={1000}
            title={lo.tooltip}>
            <span>
              <Button
                disableRipple
                disableElevation
                disabled={lo.noPanel}
                onClick={() => !lo.noPanel && handleSetVisible({ uniqueId: lo.uniqueId })}
                variant="text"
                fullWidth
                className={`
                ${classes.buttonMenu}
                ${lo.asGroup && classes[`${side}GroupButtonMenu`]}
                ${classes[`${side}ButtonMenu`]}
                ${lo.isVisible && classes[`${side}ActiveButtonMenu`]}
              `}
              >
                <Badge
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  badgeContent={lo.notificationCount}
                  color="primary"
                  variant={lo.variant}
                >
                  <Box display="flex" alignItems="center" flexDirection="column">
                    {lo.showIcon && cloneElement(lo.icon, { className: classes.iconButton, color: lo.isVisible ? "primary" : "action" })}
                    {lo.shortText && <div className={classes.shortText}>{lo.shortText}</div>}
                  </Box>
                </Badge>
              </Button>
            </span>
          </Tooltip>
          )}
        </div>
        {index === 0 && <div>
          <MuiPanelSettings />
        </div>}
      </div>}
      </Fragment>)}



    {['left', 'right']
      .filter(side => layout.some(lo => lo.side === side && lo.isVisible))
      .map(side => <div key={side} className={classes.panelContainer} style={{gridArea: `${side}-panel`}}>
        {layout
          .filter(lo => lo.side === side && lo.isVisible && !lo.noPanel)
          .map(layoutObject => <Fragment key={layoutObject.uniqueId}>
            <MuiPanelHeader {...{ layoutObject }} />
            {!layoutObject.isCollapsed && <div className={classes.panelContent}>{layoutObject.children}</div>}
          </Fragment>)}
      </div>)}

    {children.map((child, i) => cloneElement(child, { key: i, style: { gridArea: `1 / 3 / 1 / 3`}}))}
  </div>
})
export default MuiPanelManager;