"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _icons = require("@material-ui/icons");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _MuiPanelStore = _interopRequireDefault(require("../MuiPanelStore"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MupMenuCollapseButton = (0, _styles.withTheme)(function (_ref) {
  var theme = _ref.theme,
      side = _ref.side;

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      settings = _useContext.settings,
      toggleSettingIsCollapsed = _useContext.toggleSettingIsCollapsed;

  return /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    placement: side,
    arrow: true,
    title: settings.isCollapsed ? 'Expand Panel' : 'Minimize Panel'
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
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
  }, side === 'right' && (settings.isCollapsed ? /*#__PURE__*/_react.default.createElement(_icons.ArrowLeft, {
    style: {
      fontSize: 16
    }
  }) : /*#__PURE__*/_react.default.createElement(_icons.ArrowRight, {
    style: {
      fontSize: 16
    }
  })), side === 'left' && (settings.isCollapsed ? /*#__PURE__*/_react.default.createElement(_icons.ArrowRight, {
    style: {
      fontSize: 16
    }
  }) : /*#__PURE__*/_react.default.createElement(_icons.ArrowLeft, {
    style: {
      fontSize: 16
    }
  }))));
});
MupMenuCollapseButton.defaultProps = {
  side: 'right'
};
MupMenuCollapseButton.propTypes = {
  side: _propTypes.default.oneOf(['left', 'right'])
};
var _default = MupMenuCollapseButton;
exports.default = _default;