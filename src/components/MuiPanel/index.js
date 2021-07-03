import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import React from 'react';

const sizesMap = {
  'small': { size: 17, extraSize: 10 },
  'medium': { size: 25, extraSize: 13 },
  'large': { size: 25, extraSize: 15 },
}

const MuiPanel = ({
  icon,
  extraIcon,
  size = 'small',
  color = 'inherit',
  position = 'bottom-end',
  disabled,
}) => (
  <div style={{
    position: 'relative',
    cursor: 'default'
  }}>
    test
  </div>
)

MuiPanel.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  extraIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
  position: PropTypes.oneOf(['top-start', 'top-end', 'bottom-start', 'bottom-end']),
  disabled: PropTypes.bool,
};

export default MuiPanel;