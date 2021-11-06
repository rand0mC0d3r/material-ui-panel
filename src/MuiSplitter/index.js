import { Box, Button, MenuItem, Select, TextField, Tooltip, Typography } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppsIcon from '@material-ui/icons/Apps'
import BlurOnIcon from '@material-ui/icons/BlurOn'
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode'
import CloseIcon from '@material-ui/icons/Close'
import HttpIcon from '@material-ui/icons/Http'
import ImportExportIcon from '@material-ui/icons/ImportExport'
import LaptopIcon from '@material-ui/icons/Laptop'
import LibraryAddOutlinedIcon from '@material-ui/icons/LibraryAddOutlined'
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import WebIcon from '@material-ui/icons/Web'
import WebAssetIcon from '@material-ui/icons/WebAsset'
import { cloneElement, useContext, useEffect, useState } from 'react'
import DataProvider from '../MuiPanelStore'
import MupSectionsSplitter from './MupSectionsSplitter'

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
    width: theme.spacing(4),
    minWidth: theme.spacing(4),
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
    gap: '24px',
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
    // boxShadow: 'inset 1px 1px 0px 0px #CCC',
  },
  rootWrapper: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  rootController: {
    position: 'absolute',
    padding: '2px 8px',
    paddingTop: '48px',
    top: '-44px',
    backgroundColor: `${theme.palette.background.paper}d`,
    borderRadius: '4px',
    backdropFilter: 'blur(10px)',

    boxShadow: `0px 0px 1px 1px ${theme.palette.divider}`,
    zIndex: '1',

    '&:hover': {
      top: '-40px',
      transition: 'top .35s ease-in-out'

    },
  },
  iframePanel: {
    '&::-webkit-scrollbar' : {
      display: 'none'
    }
  },
  groupsBox: {
    gap: '8px'
  },
  title: {
    alignItems: 'center',
    display: 'flex',
    // gap: '8px',
    flex: '1 1 auto'
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
}))

const MuiSplitter = ({
  section,
  isRoot = false,
  showSplitterButton = true,
}) => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [layoutObject, setLayoutObject] = useState(null)
  const {
    layout, splitContentNg, setSectionUrl, showContent,
    removeZoneFromSection, toggleCollapseSection,
    removePanelFromSection, sections, addPanelToSection,
    chooseTypeForSection, addZoneToSection, toggleSectionDirection
  } = useContext(DataProvider)

  useEffect(() => {
    if (section.type === 'panel') {
      const findLayoutObject = layout.find(l => l.uniqueId === section.panelId)
      setLayoutObject(findLayoutObject)
    }
  }, [section])

  return <div className={`${classes.wrapper}`}
    style={isRoot ? { border: '0px none' } : {}}>

    {section.type === 'content' ? <div
      className={classes.rootWrapper}
      style={sections.length === 1
        ? {}
        : {}}>
      {showSplitterButton && <div className={classes.rootController}>
        <MupSectionsSplitter createSection={({ type, index, count }) => splitContentNg({ sectionId: section.id, type, index, count })} />
      </div>}
    </div>
      : <>
        <Tooltip title="Double-Click to collapse"
          arrow>
          <div className={section.isCollapsed ? classes.headerCollapsed : classes.header}
            onDoubleClick={() => toggleCollapseSection({ sectionId: section.id })}
            style={isRoot
            ? { borderBottom: `1px solid ${theme.palette.divider}`, backgroundColor: theme.palette.background.paper }
            : section.isCollapsed
              ? { backgroundColor: section.background }
              : { borderBottom: `3px solid ${section.background}` }
            }
          >
            {!section.isCollapsed && <>
              <div className={classes.title}>
                {!isRoot && <>
                  {section.type === 'list' && <AppsIcon color="action" />}
                  {section.type === 'panel' && <ChromeReaderModeIcon color="disabled" />}
                  {section.type === 'content' && <BlurOnIcon color="disabled" />}
                  <Typography
                    style={layoutObject?.title && { fontWeight: 'bold' }}
                    color={layoutObject?.title ? 'textPrimary' : 'textSecondary'}
                    variant='subtitle2'>
                    {section.type === 'list' && 'Add sub-sections ...'}
                    {section.type === 'panel' && (layoutObject?.title || 'Waiting for selection...')}
                    {section.type === 'content' && 'Main content'}
                  </Typography>
                </>}
                {section.type === 'web' && <>
                  <TextField
                    size="small"
                    variant="outlined"
                    fullWidth
                    autoFocus
                    value={section.url}
                    style={{flex: '1 1 auto'}}
                    placeholder="http://target.url/..."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <HttpIcon />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(event) => setSectionUrl({
                      sectionId: section.uniqueId,
                      url: event.target.value
                    })} />
                </>}
              </div>

              <Box alignItems="center"
                display="flex"
                className={classes.buttonsWrapper}>
                {section.type === 'list' && <Tooltip
                  arrow
                  title="Current orientation"
                  placement='bottom'>
                  {section.direction !== 'vertical'
                  ? <SwapHorizIcon className={classes.groupIcon}
                    style={{ fontSize: '16px', color: theme.palette.background.default }} />
                  : <ImportExportIcon className={classes.groupIcon}
                    style={{ fontSize: '16px', color: theme.palette.background.default }} />}
                </Tooltip>}

                {section.type === 'list' && <Tooltip arrow
                  title={`Switch to ${section.direction === 'vertical' ? 'columns' : 'rows'}`}>
                  <Button disableRipple
                    disableElevation
                    className={classes.smallButton}
                    onClick={() => toggleSectionDirection({ sectionId: section.id })}>
                    {section.direction !== 'vertical' ? <SwapHorizIcon color="action" /> : <ImportExportIcon color="action" />}
                  </Button>
                </Tooltip>}

                {section.type === 'list' &&
                <Tooltip arrow
                  title="Add a new section...">
                  <Button disableRipple
                    disableElevation
                    onClick={() => addZoneToSection({ sectionId: section.id })}
                    className={classes.smallButton}>
                    <LibraryAddOutlinedIcon color="action" />
                  </Button></Tooltip>}



                {section.type === 'panel' && <Box
                  key={`selectOptions_${section.id}`}
                  display="flex"
                  alignItems="center"
                  className={classes.buttonsWrapper}
                >
                  <Select
                    fullWidth
                    value={section.panelId || ''}
                    onChange={(event) => { addPanelToSection({ sectionId: section.id, panelId: event.target.value }) }}
                  >
                    {layout.filter(lo => !lo.noPanel && !lo.asContent).map(lo => <MenuItem
                      key={`${section.id}_${lo.uniqueId}`}
                      value={lo.uniqueId}
                    >
                      <Box display="flex"
                        alignItems="center"
                        className={classes.groupsBox}>
                        {lo.icon && cloneElement(lo.icon, { color: 'disabled' })}
                        <Typography variant="caption"
                          color="textSecondary">{lo.title}</Typography>
                      </Box>
                    </MenuItem>)}
                  </Select>

                  {section.panelId !== undefined && <>
                    <MobileScreenShareIcon
                      onClick={() => { removePanelFromSection({ sectionId: section.id, panelId: section.panelId }) }}
                      color="action" /></>}
                  <div
                    onClick={() => chooseTypeForSection({ panelId: section.id, isList: true })}
                    className={classes.splitButton}
                  ><WebIcon /></div>
                </Box>}

                {/* {section.type !== 'content' && <Tooltip arrow title="Switch to showing the main content">
                  <span>
                    <Button
                      className={classes.smallButton}
                      onClick={() => { showContent({ sectionId: section.id }); }}
                      disabled={section.type === 'content'}
                    >
                      <AspectRatioIcon />
                    </Button>
                  </span>
              </Tooltip>} */}

                <div style={{ display: 'flex', gap: '4px'}}>
                  {section.zones.length === 0 && <Tooltip arrow
                    title="Switch panel type">
                    <span>
                      <Button className={classes.smallButton}
                        variant="outlined"
                        disabled={((section.type === 'list' && section.zones.length === 0) || (section.type === 'panel' && !section.panelId))}
                        onClick={() => chooseTypeForSection({ panelId: section.id, isList: false })}
                      >
                        <AppsIcon/>
                      </Button>
                    </span>
                  </Tooltip>}

                  {section.type !== 'content' && <Tooltip arrow
                    title="Remove section">
                    <span>
                      <Button
                        variant="outlined"
                        disabled={section.type === 'list' && section.zones.length > 0}
                        onClick={() => { removeZoneFromSection({ sectionId: section.id }) }}
                        className={classes.smallButton}
                      >
                        <CloseIcon />
                      </Button>
                    </span>
                  </Tooltip>}
                </div>
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
          <Tooltip title="Select a mode to continue..."
            arrow>
            <Box display="flex"
              alignItems="center"
              style={{ gap: '32px' }}>

              <div onClick={() => chooseTypeForSection({ panelId: section.id })}
                className={classes.splitButton}>
                <AppsIcon style={{ fontSize: 48 }}
                  color={section.type === 'list' ? 'primary' : 'disabled' } />
              </div>

              <div onClick={() => { showContent({ sectionId: section.id }) }}
                className={classes.splitButton} >
                <LaptopIcon style={{ fontSize: 48 }}
                  color={section.type === 'content' ? 'primary' : 'disabled' } />
              </div>

              <div onClick={() => chooseTypeForSection({ panelId: section.id, type: 'panel' })}
                className={classes.splitButton} >
                <WebAssetIcon style={{ fontSize: 48 }}
                  color={section.type === 'panel' ? 'primary' : 'disabled' } />
              </div>

              <div onClick={() => chooseTypeForSection({ panelId: section.id, type: 'web' })}
                className={classes.splitButton} >
                <HttpIcon style={{ fontSize: 42 }}
                  color={section.type === 'web' ? 'primary' : 'disabled'} />
              </div>
            </Box>
          </Tooltip>
        </div>
      }
      {section.type === 'panel' && section.panelId && <>
        <div style={{ width: '100%', height: '100%' }}
          id={`${section.panelId}-section`} />
      </>}
      {section.type === 'content' && <>
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'stretch', alignItems: 'stretch' }}
          id={'content-section'} />
      </>}
      {section.type === 'web' && section.url && <>
        <iframe
          title={section.url}
          src={`http://${section.url.replace('http://', '').replace('https://', '')}`}
          style={{ border: '0px', width: '100%', height: '100%' }} />
      </>}
      {section.type === 'list' && section.zones && section.zones.map(zone =>
        <div
          key={`${section.id}_${zone}`}
          className={`${classes.zone} ${isRoot ? classes.wrapperRepeat : null}`}
          style={section.direction === 'horizontal' ? { width: '0px' } : {}}>
          <MuiSplitter section={sections.find(s => s.id === zone)} />
        </div>)}
    </div>
  </div>
}

export default MuiSplitter