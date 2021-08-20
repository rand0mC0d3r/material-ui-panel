import { Box, Button, MenuItem, Select, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppsIcon from '@material-ui/icons/Apps';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
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
    // backgroundColor: theme.palette.background.paper,
    gridArea: "main",
    position: 'relative',
  },
  smallButton: {
    padding: "0px",
    width: theme.spacing(3),
    minWidth: theme.spacing(3),
    lineHeight: '0px'
  },
  selectMode: {
    width: '100%',
    display: 'flex',
    flex: '1 1 auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectIcon: {
    "&:hover": {
      color: `${theme.palette.text.secondary} !important`
    }
  },
  header: {
    minHeight: "57px",
    display: "flex",
    flexDirection: "row",
    padding: "0px 12px",
    // backgroundColor: theme.palette.background.default,
    alignItems: "center",
    justifyContent: "space-between",

    "&:hover": {
      backgroundColor: theme.palette.augmentColor({ main: theme.palette.divider }).light,
    },
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    // backgroundColor: theme.palette.background.paper,
    gridArea: "main",
    position: 'relative',
  },
  wrapperRepeat: {
    boxShadow: 'inset 1px 1px 0px 0px #CCC',
  },
  groupsBox: {
    gap: "8px"
  },
  title: {
    alignItems: "center",
    display: "flex",
    gap: "8px"
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
  isRoot = false,
  theme,
}) => {
  const classes = useStyles(theme)
  // const [currentPanel = useState()
  const { layout, settings, removePanelFromSection, sections, addPanelToSection, chooseTypeForSection, addZoneToSection, toggleSectionDirection } = useContext(DataProvider);

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [sections])

  return <div className={`${classes.wrapper}`} style={isRoot ? { border: `0px none` } : { }}>
    <div className={classes.header}
      style={isRoot
        ? { border: `0px none` }
        : { borderBottom: `1px solid ${section.background}` }}
    >
      <div className={classes.title}>
        {section.type === 'list'
          ? <AppsIcon color="action" />
          : <ChromeReaderModeIcon color="disabled" />}
        <Typography style={{ fontWeight: 'bold' }} color="textPrimary" variant='subtitle2'>{section.id}</Typography>
      {/* {`${section.id} - ${section.direction} - ${section.type}`} */}
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

        {section.type !== 'list' && <Box display="flex" alignItems="center" className={classes.buttonsWrapper}>
          <Select
            fullWidth
            value={section.panelId || ''}
            onChange={(event) => { addPanelToSection({ sectionId: section.id, panelId: event.target.value }) }}
          >
            {layout.filter(lo => !lo.noPanel).map(lo => <MenuItem value={lo.uniqueId}>
              <Box display="flex" alignItems="center" className={classes.groupsBox}>
                {cloneElement(lo.icon, { color: "disabled" })}
                <Typography variant="caption" color="textSecondary">{lo.title}</Typography>
              </Box>
            </MenuItem>)}
          </Select>

          {section.panelId && <><MobileScreenShareIcon onClick={() => { removePanelFromSection({ sectionId: section.id, panelId: section.panelId }) }} color="action" /></>}

          <div
            onClick={() => chooseTypeForSection({ panelId: section.id, isList: true })}
            className={classes.splitButton}
          ><WebIcon /></div>

        </Box>}


      </div>
    </div>
    <div className={`
        ${classes.root}
        ${section.direction === 'horizontal'
        ? classes.horizontal
        : classes.vertical}
      `}>
      {((section.type === 'list' && section.zones.length === 0) || (section.type !== 'list' && !section.panelId)) &&
        <div className={classes.selectMode}>
        <CallSplitIcon className={classes.selectIcon} color="disabled" style={{ fontSize: 40 }} />
        </div>
      }
      {section.type !== 'list' && <>
        {section.panelId && <>
          {/* {`panelId: ${section.panelId}`} */}
          <div style={{ width: '100%' }} id={`${section.panelId}-section`} />
        </>}
      </>}
      {section.type === 'list' && section.zones && section.zones.map(zone =>
        <div className={`${classes.zone} ${isRoot ? classes.wrapperRepeat : null}`}>
          <MuiSplitter section={sections.find(s => s.id === zone)} />
      </div>)}
    </div>
  </div>
})

export default MuiSplitter;