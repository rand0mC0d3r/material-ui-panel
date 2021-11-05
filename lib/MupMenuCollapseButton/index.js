"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _icons = require("@material-ui/icons");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _MuiPanelStore = _interopRequireDefault(require("../MuiPanelStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MupMenuCollapseButton = function MupMenuCollapseButton(_ref) {
  var side = _ref.side;
  var theme = (0, _styles.useTheme)();

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      settings = _useContext.settings,
      toggleSettingIsCollapsed = _useContext.toggleSettingIsCollapsed;

  return /*#__PURE__*/React.createElement(_core.Tooltip, {
    placement: side,
    arrow: true,
    title: settings.isCollapsed ? 'Expand Panel' : 'Minimize Panel'
  }, /*#__PURE__*/React.createElement(_core.IconButton, {
    size: "small",
    style: {
      position: 'absolute',
      zIndex: 1,
      bottom: theme.spacing(4),
      boxShadow: "inset -1px 0px 1px 0px ".concat(theme.palette.divider),
      border: "1px solid ".concat(theme.palette.divider),
      backgroundColor: theme.palette.background.paper,
      right: side === 'left' && '-24px',
      left: side === 'right' && '-24px',
      borderRadius: side === 'right' ? "".concat(theme.shape.borderRadius, "px 0px 0px ").concat(theme.shape.borderRadius, "px") : "0px ".concat(theme.shape.borderRadius, "px ").concat(theme.shape.borderRadius, "px 0px")
    },
    onClick: toggleSettingIsCollapsed
  }, side === 'right' && (settings.isCollapsed ? /*#__PURE__*/React.createElement(_icons.ArrowLeft, {
    style: {
      fontSize: 16
    }
  }) : /*#__PURE__*/React.createElement(_icons.ArrowRight, {
    style: {
      fontSize: 16
    }
  })), side === 'left' && (settings.isCollapsed ? /*#__PURE__*/React.createElement(_icons.ArrowRight, {
    style: {
      fontSize: 16
    }
  }) : /*#__PURE__*/React.createElement(_icons.ArrowLeft, {
    style: {
      fontSize: 16
    }
  }))));
};

MupMenuCollapseButton.defaultProps = {
  side: 'right'
};
MupMenuCollapseButton.propTypes = {
  side: _propTypes.default.oneOf(['left', 'right'])
};
var _default = MupMenuCollapseButton;
exports.default = _default;