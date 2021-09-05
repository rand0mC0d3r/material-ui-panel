import { Box, Button, MenuItem, Select, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppsIcon from '@material-ui/icons/Apps';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import CancelPresentationOutlinedIcon from '@material-ui/icons/CancelPresentationOutlined';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import FlipIcon from '@material-ui/icons/Flip';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import LibraryAddOutlinedIcon from '@material-ui/icons/LibraryAddOutlined';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import WebIcon from '@material-ui/icons/Web';
import React, { cloneElement, useContext } from 'react';
import DataProvider from '../MuiPanelStore';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    // border: '1px solid red',
    height: '100%',
    // backgroundColor: theme.palette.background.paper,
    gridArea: 'main',
    position: 'relative',
  },
  groupIcon: {
    // transform: 'rotateZ(90deg)',
    minWidth: theme.spacing(3),
    background: theme.palette.divider,
    borderRadius: '4px',
    padding: '4px 2px',
    color: theme.palette.background.paper,
  },
  smallButton: {
    padding: '0px',
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
    '&:hover': {
      color: `${theme.palette.text.secondary} !important`
    }
  },
  header: {
    minHeight: '55px',
    display: 'flex',
    flexDirection: 'row',
    padding: '0px 12px',
    alignItems: 'center',
    justifyContent: 'space-between',

    '&:hover': {
      backgroundColor: theme.palette.augmentColor({ main: theme.palette.divider }).light,
    },
  },
  headerCollapsed: {
    minHeight: '8px',
    opacity: '0.5',
    display: 'flex',
    flexDirection: 'row',
    padding: '0px 12px',
    // backgroundColor: theme.palette.background.default,
    alignItems: 'center',
    justifyContent: 'space-between',

    '&:hover': {
      backgroundColor: theme.palette.augmentColor({ main: theme.palette.divider }).light,
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    // backgroundColor: theme.palette.background.paper,
    gridArea: 'main',
    position: 'relative',
  },
  wrapperRepeat: {
    boxShadow: 'inset 1px 1px 0px 0px #CCC',
  },
  rootController: {
    position: 'absolute',
    left: '50%',
    padding: '8px 16px',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '0px 0px 8px 8px',
    border: `1px solid ${theme.palette.divider}`,
    zIndex: '1',
    top: '-30px',
    transition: 'top .05s ease-in-out',

    '&:hover': {
      top: '0px',
      transition: 'top .15s ease-in-out'

    },
  },
  groupsBox: {
    gap: '8px'
  },
  title: {
    alignItems: 'center',
    display: 'flex',
    gap: '8px'
  },
  horizontal: {
    flexDirection: 'row',
  },
  vertical: {
    flexDirection: 'column',
  },
  zone: {
    // border: '1px solid blue',
    flex: '1 1 auto',
    position: 'relative',
    // width: '0px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splitButton: {

  },
  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    flex: '0 0 auto'
  }
}));

const MuiSplitter = withTheme(({
  section,
  isRoot = false,
  theme,
}) => {
  const classes = useStyles(theme);
  const { layout, splitContent, showContent, removeZoneFromSection, toggleCollapseSection, removePanelFromSection, sections, addPanelToSection, chooseTypeForSection, addZoneToSection, toggleSectionDirection } = useContext(DataProvider);

  return <div className={`${classes.wrapper}`} style={isRoot ? { border: '0px none' } : {}}>

    {section.type === 'content' ? <div className={classes.rootController}>
        <Tooltip title="Divide the interface into panels" arrow placement="bottom">
          <Button className={classes.smallButton} onClick={() => splitContent({ sectionId: section.id })}>
            <FlipIcon />
          </Button>
        </Tooltip>
      </div>
      : <>
      <Tooltip title="Double-Click to collapse" arrow>
        <div className={section.isCollapsed ? classes.headerCollapsed : classes.header}
          onDoubleClick={() => toggleCollapseSection({ sectionId: section.id })}
          style={isRoot
            ? { border: '0px none', backgroundColor: theme.palette.background.paper }
            : section.isCollapsed
              ? { backgroundColor: section.background }
              : { borderBottom: `4px solid ${section.background}` }
          }
        >
          {!section.isCollapsed && <>
            <div className={classes.title}>
              {!isRoot && <>
                {section.type === 'list' && <AppsIcon color="action" />}
                {section.type === 'panel' && <ChromeReaderModeIcon color="disabled" />}
                {section.type === 'content' && <BlurOnIcon color="disabled" />}
                <Typography style={{ fontWeight: 'bold' }} color="textPrimary" variant='subtitle2'>
                  {section.type === 'list' && 'Add sub-sections ...'}
                  {section.type === 'panel' && 'Select panel content ...'}
                  {section.type === 'content' && 'Main content'}
                </Typography>
              </>}
            </div>
            <Box alignItems="center" display="flex" className={classes.buttonsWrapper}>
              {section.type === 'list' && <Tooltip
                arrow
                title="Current orientation"
                placement='bottom'>
                {section.direction !== 'vertical'
                  ? <SwapHorizIcon className={classes.groupIcon} style={{ fontSize: '16px', color: theme.palette.background.default }} />
                  : <ImportExportIcon className={classes.groupIcon} style={{ fontSize: '16px', color: theme.palette.background.default }} />}
              </Tooltip>}

              {section.type === 'list' && <Tooltip arrow title={`Switch to ${section.direction === 'vertical' ? 'columns' : 'rows'}`}>
                <Button disableRipple disableElevation className={classes.smallButton} onClick={() => toggleSectionDirection({ sectionId: section.id })}>
                  {section.direction !== 'vertical' ? <SwapHorizIcon color="action" /> : <ImportExportIcon color="action" />}
                </Button>
              </Tooltip>}

              {section.type === 'list' &&
                <Tooltip arrow title="Add a new section...">
                  <Button disableRipple disableElevation onClick={() => addZoneToSection({ sectionId: section.id })} className={classes.smallButton}>
                    <LibraryAddOutlinedIcon color="action" />
                  </Button></Tooltip>}

              {section.type === 'list' && section.zones.length === 0 && <div
                onClick={() => chooseTypeForSection({ panelId: section.id, isList: false })}
                className={classes.splitButton}
              >
                <AppsIcon />
              </div>}

                {section.type === 'panel' && <Box
                  key={`selectOptions_${section.id}`}
                  display="flex"
                  alignItems="center"
                  className={classes.buttonsWrapper}
                >
                  <Select
                  fullWidth
                  value={section.panelId || ''}
                  onChange={(event) => { addPanelToSection({ sectionId: section.id, panelId: event.target.value }); }}
                >
                  {layout.filter(lo => !lo.noPanel && !lo.asContent).map(lo => <MenuItem
                    key={`${section.id}_${lo.uniqueId}`}
                    value={lo.uniqueId}
                  >
                    <Box display="flex" alignItems="center" className={classes.groupsBox}>
                      {lo.icon && cloneElement(lo.icon, { color: 'disabled' })}
                      <Typography variant="caption" color="textSecondary">{lo.title}</Typography>
                    </Box>
                  </MenuItem>)}
                </Select>

                {section.panelId !== undefined && <><MobileScreenShareIcon onClick={() => { removePanelFromSection({ sectionId: section.id, panelId: section.panelId }); }} color="action" /></>}

                <div
                  onClick={() => chooseTypeForSection({ panelId: section.id, isList: true })}
                  className={classes.splitButton}
                ><WebIcon /></div>

              </Box>}

              {section.type !== 'content' ?
                <Button
                  className={classes.smallButton}
                  onClick={() => { showContent({ sectionId: section.id }); }}
                  disabled={section.type === 'content'}>
                  <AspectRatioIcon />
                </Button> : <>
                  <Button className={classes.smallButton}
                    onClick={() => chooseTypeForSection({ panelId: section.id, isList: true })}
                  >
                    <AppsIcon color={section.type !== 'list' ? 'disabled' : 'primary'} />
                  </Button>
                </>}

              {section.type !== 'content' && <Tooltip arrow title="Remove section">
                <span>
                  <Button disabled={section.type === 'list' && section.zones.length > 0} onClick={() => { removeZoneFromSection({ sectionId: section.id }); }} className={classes.smallButton}>
                    <CancelPresentationOutlinedIcon />
                  </Button>
                </span>
              </Tooltip>}
            </Box>
          </>}
        </div>
      </Tooltip>
    </>}
    <div className={`
        ${classes.root}
        ${section.direction === 'horizontal'
        ? classes.horizontal
        : classes.vertical}
      `}>
      {((section.type === 'list' && section.zones.length === 0) || (section.type === 'panel' && !section.panelId)) &&
        <div className={classes.selectMode}>
        <Tooltip title="Select a mode to continue..." arrow>
          <Box display="flex" alignItems="center" style={{ gap: '8px'}}>
            <div onClick={() => chooseTypeForSection({ panelId: section.id, isList: true })} className={classes.splitButton}>
              <AppsIcon style={{ fontSize: 48 }} color={section.type !== 'list' ? 'disabled' : 'primary' } />
            </div>

            <CallSplitIcon color="disabled" />

            <div onClick={() => chooseTypeForSection({ panelId: section.id, isList: false })} className={classes.splitButton} >
              <WebIcon style={{ fontSize: 48 }} color={section.type !== 'list' ? 'primary' : 'disabled' } />
            </div>
          </Box>
        </Tooltip>
        </div>
      }
      {section.type === 'panel' && section.panelId && <>
          <div style={{ width: '100%', height: '100%' }} id={`${section.panelId}-section`} />
      </>}
      {section.type === 'content' && <>
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'stretch', alignItems: 'stretch' }} id={'content-section'} />
      </>}
      {section.type === 'list' && section.zones && section.zones.map(zone =>
        <div
          key={`${section.id}_${zone}`}
          className={`${classes.zone} ${isRoot ? classes.wrapperRepeat : null}`}
          style={section.direction === 'horizontal' ? { width: '0px' } : {}}>
          <MuiSplitter section={sections.find(s => s.id === zone)} />
      </div>)}
    </div>
  </div>;
});

export default MuiSplitter;