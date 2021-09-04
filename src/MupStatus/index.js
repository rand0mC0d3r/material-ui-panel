import { Box, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { cloneElement, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import DataProvider from '../MuiPanelStore';

const useStyles = makeStyles(theme => ({
  root: {
    '&:hover': {
      cursor: 'pointer !important',
      backgroundColor: `${theme.palette.augmentColor({main: theme.palette.divider}).light} !important`
    }
  },
}));

const MupStatus = withTheme(({ id, side, focusOnClick, onClick, theme, requestAttention, tooltip, elements }) => {
  const { status, handleSetVisible, handleStatusAnnouncement } = useContext(DataProvider);
  const [statusObject, setStatusObject] = useState();
  const classes = useStyles(theme);

  useEffect(() => {
    !id
      ? console.error('MupStatus: missing attr:id for status element')
      : handleStatusAnnouncement({ id, elements, side, tooltip });
  }, [id, elements, side, tooltip]);

  useEffect(() => {
    const findObject = status.find(lo => lo.uniqueId === id);
    if (findObject) { setStatusObject(findObject);}
  }, [status, id]);

  return statusObject && !!id ? createPortal(<Tooltip title={tooltip} placement="top" arrow>
    <Box
      onClick={(e) => focusOnClick ? handleSetVisible({ uniqueId: focusOnClick }) : onClick && onClick(e)}
      display="flex"
      className={(focusOnClick || onClick) ? classes.root : ''}
      alignItems="center"
      style={{
        gap: '16px',
        cursor: 'default',
        padding: '3px 6px',
        backgroundColor: requestAttention ? theme.palette.secondary.main : 'transparent',
      }}
    >
      {elements.map(element => <Box
        display="flex"
        key={element.text}
        alignItems="center"
        style={{ gap: '6px' }}
      >
        {element.icon && cloneElement( element.icon, { color: 'action', style: { fontSize: 20}})}
        {element.text && <Typography variant="subtitle2" style={{ whiteSpace: 'nowrap' }} color="textPrimary">{element.text}</Typography>}
      </Box>)}
    </Box>
  </Tooltip>,
  document.getElementById(`material-ui-panel-statusBar-${side}`))
  : null;
});

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