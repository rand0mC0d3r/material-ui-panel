"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _AspectRatio = _interopRequireDefault(require("@material-ui/icons/AspectRatio"));

var _Devices = _interopRequireDefault(require("@material-ui/icons/Devices"));

var _FormatAlignLeft = _interopRequireDefault(require("@material-ui/icons/FormatAlignLeft"));

var _FormatAlignRight = _interopRequireDefault(require("@material-ui/icons/FormatAlignRight"));

var _Settings = _interopRequireDefault(require("@material-ui/icons/Settings"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    buttonMenu: {
      border: "0px none",
      padding: theme.spacing(2, 0),
      borderRadius: "0px",
      minWidth: "initial"
    },
    iconList: {
      gap: theme.spacing(1)
    }
  };
});
var MuiPanelManager = (0, _styles.withTheme)(function (_ref) {
  var theme = _ref.theme,
      _ref$isExpanded = _ref.isExpanded,
      isExpanded = _ref$isExpanded === void 0 ? true : _ref$isExpanded,
      _ref$initialSide = _ref.initialSide,
      initialSide = _ref$initialSide === void 0 ? 'left' : _ref$initialSide;
  var classes = useStyles(theme);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var open = Boolean(anchorEl);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    arrow: true,
    title: "Panel settings"
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    disableElevation: true,
    variant: "outlined",
    fullWidth: true,
    onClick: handleClick,
    className: "".concat(classes.buttonMenu)
  }, /*#__PURE__*/_react.default.createElement(_Settings.default, null))), /*#__PURE__*/_react.default.createElement(_core.Popover, {
    open: open,
    anchorEl: anchorEl,
    onClose: handleClose,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'middle',
      horizontal: 'left'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.List, {
    component: "nav",
    "aria-label": "main mailbox folders",
    dense: true
  }, /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    dense: true,
    button: true
  }, /*#__PURE__*/_react.default.createElement(_core.ListItemIcon, null, isExpanded ? /*#__PURE__*/_react.default.createElement(_AspectRatio.default, null) : /*#__PURE__*/_react.default.createElement(_Devices.default, null)), /*#__PURE__*/_react.default.createElement(_core.ListItemText, {
    primary: "Expanded / Panel"
  })), /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    dense: true,
    button: true
  }, /*#__PURE__*/_react.default.createElement(_core.ListItemIcon, null, initialSide === 'right' ? /*#__PURE__*/_react.default.createElement(_FormatAlignRight.default, null) : /*#__PURE__*/_react.default.createElement(_FormatAlignLeft.default, null)), /*#__PURE__*/_react.default.createElement(_core.ListItemText, {
    primary: "Default Side (".concat(initialSide, ")")
  })))));
});
var _default = MuiPanelManager;
exports.default = _default;