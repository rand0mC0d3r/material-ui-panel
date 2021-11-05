"use strict";

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

var _react = require("react");

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
      border: '0px none',
      padding: theme.spacing(2, 0),
      borderRadius: '0px',
      minWidth: 'initial'
    }
  };
});

var MuiPanelManager = function MuiPanelManager(_ref) {
  var isExpanded = _ref.isExpanded,
      initialSide = _ref.initialSide;
  var theme = (0, _styles.useTheme)();
  var classes = useStyles(theme);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var handleClick = function handleClick(event) {
    return setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    return setAnchorEl(null);
  };

  var open = Boolean(anchorEl);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_core.Tooltip, {
    arrow: true,
    title: 'Panel settings'
  }, /*#__PURE__*/React.createElement(_core.Button, {
    disableElevation: true,
    variant: "outlined",
    fullWidth: true,
    onClick: handleClick,
    className: "".concat(classes.buttonMenu)
  }, /*#__PURE__*/React.createElement(_Settings.default, null))), /*#__PURE__*/React.createElement(_core.Popover, {
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
  }, /*#__PURE__*/React.createElement(_core.List, {
    component: "nav",
    "aria-label": "main mailbox folders",
    dense: true
  }, /*#__PURE__*/React.createElement(_core.ListItem, {
    dense: true,
    button: true
  }, /*#__PURE__*/React.createElement(_core.ListItemIcon, null, isExpanded ? /*#__PURE__*/React.createElement(_AspectRatio.default, null) : /*#__PURE__*/React.createElement(_Devices.default, null)), /*#__PURE__*/React.createElement(_core.ListItemText, {
    primary: "Expanded / Panel"
  })), /*#__PURE__*/React.createElement(_core.ListItem, {
    dense: true,
    button: true
  }, /*#__PURE__*/React.createElement(_core.ListItemIcon, null, initialSide === 'right' ? /*#__PURE__*/React.createElement(_FormatAlignRight.default, null) : /*#__PURE__*/React.createElement(_FormatAlignLeft.default, null)), /*#__PURE__*/React.createElement(_core.ListItemText, {
    primary: "Default Side (".concat(initialSide, ")")
  })))));
};

MuiPanelManager.defaultProps = {
  isExpanded: true,
  initialSide: 'left'
};
var _default = MuiPanelManager;
exports.default = _default;