import { Box, Button, MenuItem, Select, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppsIcon from '@material-ui/icons/Apps';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import WebIcon from '@material-ui/icons/Web';
import React, { cloneElement, Fragment, useContext, useEffect, useState } from 'react';
import DataProvider, { MuiPanelProvider } from '../MuiPanelStore';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100%",
    // border: '1px solid red',
    height: "100%",
    backgroundColor: theme.palette.background.paper,
    gridArea: "main",
    position: 'relative',
  },
  smallButton: {
    padding: "0px",
    width: theme.spacing(3),
    minWidth: theme.spacing(3),
    lineHeight: '0px'
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    // border: `1px solid ${theme.palette.divider}`,
    height: "100%",
    backgroundColor: theme.palette.background.paper,
    gridArea: "main",
    position: 'relative',
  },
  header: {
    minHeight: "57px",
    display: "flex",
    flexDirection: "row",
    padding: "0px 12px",
    backgroundColor: theme.palette.background.default,
    alignItems: "center",
    justifyContent: "space-between",

    "&:hover": {
      backgroundColor: theme.palette.augmentColor({ main: theme.palette.divider }).light,
    }
  },
  title: {
    alignItems: "center",
    display: "flex",
  },
  horizontal: {
    flexDirection: "row",
  },
  vertical: {
    flexDirection: "column",
  },
  zone: {
    // border: '1px solid blue',
    flex: "1 1 auto",
    position: 'relative',
    alignItems: "center",
    justifyContent: "center",
  },
  splitButton: {

  },
  buttonsWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    flex: "0 0 auto"
  }
}));

const MuiSplitter = withTheme(({
  section,
  theme,
}) => {
  const classes = useStyles(theme)
  // const [currentPanel = useState()
  const { layout, settings, sections, addPanelToSection, chooseTypeForSection, addZoneToSection, toggleSectionDirection } = useContext(DataProvider);

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [sections])

  return <div className={ classes.wrapper}>
    <div className={classes.header} style={{borderBottom: `1px solid ${section.background}`}}>
      <div className={classes.title}>
        {section.type === 'list' && <AppsIcon color="action" />}
      {`panel ID: ${section.id} - ${section.direction} - ${section.type}`}
      </div>
      <div className={classes.buttonsWrapper}>
        {section.type === 'list' && <Tooltip arrow title="Toggle list direction">
          <Button disableRipple disableElevation className={classes.smallButton} onClick={() => toggleSectionDirection({ sectionId: section.id })}>
            {section.direction !== 'vertical' ? <SwapHorizIcon color="action" /> : <ImportExportIcon color="action" />}
          </Button>
        </Tooltip>}

        {section.type === 'list' &&
          <Button disableRipple disableElevation onClick={() => addZoneToSection({ sectionId: section.id })} className={classes.smallButton}>
            <PlaylistAddIcon color="action" />
        </Button>}

        {section.type === 'list' && section.zones.length === 0 && <div
          onClick={() => chooseTypeForSection({ panelId: section.id, isList: false })}
          className={classes.splitButton}
        >
            <AppsIcon />
        </div>}

        {section.type !== 'list' && <>
          <Select
            fullWidth
            value={section.panelId || ''}
            onChange={(event) => { addPanelToSection({ sectionId: section.id, panelId: event.target.value }) }}
          >
            {layout.filter(lo => !lo.noPanel).map(lo => <MenuItem value={lo.uniqueId}>
              <Box display="flex" className={classes.groupsBox}>
                {lo.icon}
                <Typography variant="caption" color="textSecondary">{lo.title}</Typography>
              </Box>
            </MenuItem>)}
          </Select>

          <div
            onClick={() => chooseTypeForSection({ panelId: section.id, isList: true })}
            className={classes.splitButton}
          ><WebIcon /></div>

        </>}


      </div>
    </div>
    <div className={`
        ${classes.root}
        ${section.direction === 'horizontal'
        ? classes.horizontal
        : classes.vertical}
      `}>
      {((section.type === 'list' && section.zones.length === 0) || (section.type !== 'list' && !section.panelId)) && <>select mode</>}
      {section.type !== 'list' && <>
        {section.panelId && `panelId: ${section.panelId}`}
      </>}
      {section.type === 'list' && section.zones && section.zones.map(zone =>
        <div className={classes.zone}>
        {/* <div className={classes.header}>
          {`zone ID: ${zone}`}
        </div> */}
        <MuiSplitter section={sections.find(s => s.id === zone)} />
      </div>)}
    </div>
  </div>
})

export default MuiSplitter;