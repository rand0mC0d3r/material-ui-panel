import { Box, SvgIcon, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useCallback, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import DataProvider from '../MuiPanelStore';

const useStyles = makeStyles(theme => ({
  root: {
    '&:hover': {
      backgroundColor: `${theme.palette.augmentColor({main: theme.palette.divider}).light} !important`
    }
  },
}));

const MupStatus = ({ id, side, focusOnClick, onClick, requestAttention, tooltip, elements }) => {
  const { status, handleSetVisible, handleStatusAnnouncement } = useContext(DataProvider);
  const [statusObject, setStatusObject] = useState(null);
  const theme = useTheme();
  const classes = useStyles(theme);

  const handleOnClick = useCallback(() => { if (onClick) { onClick(); } }, [onClick]);

  const callbackHandleStatusAnnouncement = useCallback((id) => {
    console.log('[MupStatus]: Announcing bar object', id);
    handleStatusAnnouncement({ id, elements, side, tooltip });
  }, [side, tooltip, elements, handleStatusAnnouncement]);


  useEffect(() => {
    if (statusObject === null && !status.find(lo => lo.uniqueId === id)) {
      console.log('[MupStatus]: Preparing to announce status object', id);
      !id
        ? console.error('[MupStatus]: missing attr:id for status element')
        : callbackHandleStatusAnnouncement(id);
    }
  }, [id, statusObject, status, callbackHandleStatusAnnouncement]);

  useEffect(() => {
    const findObject = status.find(lo => lo.uniqueId === id);
    if (statusObject === null && findObject) {
      console.log('[MupStatus]: Found status bar object', id);
      setStatusObject(findObject.uniqueId);
    }
  }, [status, id, statusObject]);

  return (statusObject !== null && !!id) ? createPortal(<Box
    key={`MupStatus_${id}_wrapper`}
    title={tooltip}
    onClick={(e) => focusOnClick ? handleSetVisible({ uniqueId: focusOnClick }) : !!onClick && handleOnClick(e)}
    display="flex"
    alignItems="center"
    className={(focusOnClick || onClick) ? classes.root : ''}
    style={{
      gap: '16px',
      padding: '3px 6px',
      cursor: (focusOnClick || !!onClick) ? 'pointer' : 'initial',
      backgroundColor: requestAttention ? theme.palette.secondary.main : 'transparent',
    }}
  >
    {elements.map(element => <Box
      display="flex"
      key={`MupStatus_${element.text}_container`}
      alignItems="center"
      style={{ gap: '6px' }}
    >
      {element.icon && <SvgIcon key={`MupStatus_${element.text}_icon`} style={{ fontSize: 20}} color='action'>{element.icon}</SvgIcon>}
      {element.text && <Typography
        key={`MupStatus_${element.text}_text`}
        variant="subtitle2"
        style={{ lineHeight: '0px', whiteSpace: 'nowrap', userSelect: 'none' }}
        color="textPrimary"
      >
        {element.text}
      </Typography>}
    </Box>)}
    </Box>,
  document.getElementById(`material-ui-panel-statusBar-${side}`))
  : null;
};

MupStatus.defaultProps = {
  side: 'left',
  onClick: null,
  requestAttention: false,
  tooltip: '',
  elements: [],
};

MupStatus.propTypes = {
  id: PropTypes.string,
  side: PropTypes.oneOf(['left', 'right']),
  focusOnClick: PropTypes.string,
  onClick: PropTypes.func,
  requestAttention: PropTypes.bool,
  tooltip: PropTypes.string,
  elements: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.node,
    text: PropTypes.string,
  })),
};

export default MupStatus;