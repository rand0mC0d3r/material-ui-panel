"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _icons = require("@material-ui/icons");

var _react = _interopRequireWildcard(require("react"));

var _MuiPanelStore = _interopRequireDefault(require("../MuiPanelStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    buttonMenu: {
      position: 'absolute',
      bottom: '16px',
      border: "1px solid ".concat(theme.palette.divider),
      backgroundColor: theme.palette.background.paper
    },
    left: {
      borderRadius: "0px ".concat(theme.shape.borderRadius, "px ").concat(theme.shape.borderRadius, "px 0px"),
      right: '-24px'
    },
    right: {
      borderRadius: "".concat(theme.shape.borderRadius, "px 0px 0px ").concat(theme.shape.borderRadius, "px"),
      left: '-24px'
    }
  };
});
var MupMenuCollapseButton = (0, _styles.withTheme)(function (_ref) {
  var _ref$side = _ref.side,
      side = _ref$side === void 0 ? 'right' : _ref$side,
      theme = _ref.theme;
  var classes = useStyles(theme);

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      settings = _useContext.settings,
      toggleIsCollapsed = _useContext.toggleIsCollapsed;

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    placement: side,
    arrow: true,
    title: "Toggle Minimize Panel"
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    size: "small",
    onClick: toggleIsCollapsed,
    className: "".concat(classes.buttonMenu, " ").concat(classes[side])
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
  })))));
});
var _default = MupMenuCollapseButton;
exports.default = _default;