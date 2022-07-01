"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _react = _interopRequireWildcard(require("react"));

var _MuiPanelStore = _interopRequireDefault(require("../../MuiPanelStore"));

var _MupMenuOptions = _interopRequireDefault(require("../../MupMenuOptions"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    badge: {
      '& .MuiBadge-badge': {
        width: '22px',
        fontSize: '11px',
        height: '16px',
        minWidth: '22px',
        bottom: '12px',
        boxShadow: "0px 0px 0px 2px ".concat(theme.palette.background.paper)
      }
    },
    groupBadge: {
      '& .MuiBadge-badge': {
        boxShadow: "\n        0px 2px 0px -1px ".concat(theme.palette.background.paper, ",\n        0px 3px 0px 0px ").concat(theme.palette.divider, ",\n        0px 5px 0px -1px ").concat(theme.palette.background.paper, ",\n        0px 6px 0px 0px ").concat(theme.palette.divider, "\n      ")
      }
    },
    rightBadge: {
      '& .MuiBadge-badge': {
        left: '-10px',
        right: 'unset'
      }
    },
    leftBadge: {
      '& .MuiBadge-badge': {
        left: 'unset',
        right: '-10px'
      }
    },
    rightFixBadge: {
      '& .MuiBadge-badge': {
        left: '-14px',
        right: 'unset'
      }
    },
    leftFixBadge: {
      '& .MuiBadge-badge': {
        left: 'unset',
        right: '-14px'
      }
    },
    iconButton: {
      fontSize: '24px',
      opacity: '0.55',
      color: theme.palette.text.primary,
      '&:hover': {
        color: theme.palette.augmentColor({
          main: theme.palette.text.secondary
        }).dark,
        opacity: '0.9'
      }
    },
    disabledButton: {
      opacity: '0.9',
      color: "".concat(theme.palette.text.disabled, " !important")
    },
    iconExtraButton: {
      fontSize: '10px',
      opacity: '0.55',
      color: theme.palette.text.hint,
      backgroundColor: theme.palette.divider,
      padding: '1px 1px',
      position: 'absolute'
    },
    leftIconExtraButton: {
      left: '-12px',
      borderRadius: '0px 4px 4px 0px'
    },
    rightIconExtraButton: {
      right: '-12px',
      borderRadius: '4px 0px 0px 4px'
    },
    iconExtraButton0: {
      top: '-8px'
    },
    iconExtraButton1: {
      top: '7px'
    },
    iconExtraButton2: {
      top: '22px'
    },
    iconExtraButton3: {
      left: '-14px',
      top: '30px',
      position: 'absolute'
    },
    activeIconButton: {
      color: theme.palette.primary.main,
      opacity: '0.9'
    },
    rightIconButton: {
      marginLeft: '4px'
    },
    leftIconButton: {
      marginRight: '4px'
    },
    shortText: {
      fontSize: '10px',
      width: '40px',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    buttonMenu: {
      border: '0px none',
      padding: theme.spacing(2, 0),
      borderRadius: '0px',
      minWidth: 'initial',
      '@media (max-width: 1200px)': {
        padding: theme.spacing(1.65, 0)
      }
    },
    rightGroupButtonMenu: {
      position: 'relative',
      '&::after': {
        content: '"."',
        backgroundColor: theme.palette.divider,
        color: theme.palette.divider,
        position: 'absolute',
        fontSize: '4px',
        lineHeight: '12px',
        width: '8px',
        top: 22,
        borderRadius: '0px 4px 4px 0px',
        left: -4
      }
    },
    leftGroupButtonMenu: {
      position: 'relative',
      '&::after': {
        content: '"."',
        backgroundColor: theme.palette.divider,
        color: theme.palette.divider,
        position: 'absolute',
        width: '8px',
        top: 22,
        borderRadius: '4px 0px 0px 4px',
        right: -4,
        lineHeight: '12px',
        fontSize: '4px'
      }
    },
    rightButtonMenu: {
      borderRight: '4px solid transparent'
    },
    leftButtonMenu: {
      borderLeft: '4px solid transparent'
    },
    rightActiveButtonMenu: {
      borderRight: "4px solid ".concat(theme.palette.text.primary),
      opacity: '1'
    },
    leftActiveButtonMenu: {
      borderLeft: "4px solid ".concat(theme.palette.text.primary),
      opacity: '1'
    }
  };
});
var ContentContainerBox = (0, _styles.styled)(_core.Box)(function (_ref) {
  var theme = _ref.theme;
  return {
    gap: theme.spacing(0.5)
  };
});
var MuiMenuButton = (0, _styles.withTheme)(function (_ref2) {
  var _lo$title, _lo$shortText, _lo$hint, _lo$tooltip;

  var lo = _ref2.lo,
      _ref2$extraIcons = _ref2.extraIcons,
      extraIcons = _ref2$extraIcons === void 0 ? [] : _ref2$extraIcons,
      side = _ref2.side,
      theme = _ref2.theme;
  var classes = useStyles(theme); // const classes = useStyles(theme)

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      settings = _useContext.settings,
      handleSetVisible = _useContext.handleSetVisible;

  var _React$useState = _react.default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var determineColor = function determineColor() {
    var colorMap = [{
      id: 'primary',
      value: theme.palette.primary.main
    }, {
      id: 'secondary',
      value: theme.palette.secondary.main
    }, {
      id: 'textPrimary',
      value: theme.palette.text.primary
    }, {
      id: 'textSecondary',
      value: theme.palette.text.secondary
    }];
    return colorMap.find(function (_ref3) {
      var id = _ref3.id;
      return id === settings.markerColor;
    }).value;
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    arrow: true,
    key: lo.index,
    placement: lo.side,
    enterDelay: 1000,
    title: ((_lo$title = lo.title) === null || _lo$title === void 0 ? void 0 : _lo$title.length) > 0 || ((_lo$shortText = lo.shortText) === null || _lo$shortText === void 0 ? void 0 : _lo$shortText.length) > 0 || ((_lo$hint = lo.hint) === null || _lo$hint === void 0 ? void 0 : _lo$hint.length) > 0 || ((_lo$tooltip = lo.tooltip) === null || _lo$tooltip === void 0 ? void 0 : _lo$tooltip.length) > 0 ? "".concat(lo.tooltip || lo.hint || lo.title || lo.shortText, " ").concat(lo.disabled ? '(disabled)' : '') : ''
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_core.Button, {
    onContextMenu: function onContextMenu(e) {
      return handleClick(e);
    },
    disableRipple: !lo.handleOnClick,
    disableElevation: !lo.handleOnClick,
    disabled: lo.disabled && (lo.noPanel || !lo.handleOnClick),
    onClick: function onClick() {
      return !lo.noPanel ? handleSetVisible({
        uniqueId: lo.uniqueId
      }) : lo.handleOnClick && lo.handleOnClick();
    },
    variant: "text",
    fullWidth: true,
    style: {
      borderColor: lo.isVisible && determineColor()
    },
    className: "\n            ".concat(classes.buttonMenu, "\n            ").concat(!lo.noPanel && classes["".concat(!settings.inverseMarkers ? (0, _utils.oppositeSide)(side) : side, "ButtonMenu")], "\n            ").concat(lo.isVisible && classes["".concat(!settings.inverseMarkers ? (0, _utils.oppositeSide)(side) : side, "ActiveButtonMenu")], "\n        ")
  }, /*#__PURE__*/_react.default.createElement(_core.Badge, {
    className: "\n              ".concat(classes.badge, "\n              ").concat(side === 'right' ? classes.rightBadge : classes.leftBadge, "]}\n              ").concat(!settings.inverseMarkers && classes["".concat(side, "FixBadge")], "\n              ").concat(lo.notifications.summary > lo.notifications.count && classes.groupBadge, "\n              "),
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: (0, _utils.oppositeSide)(side, 'left')
    },
    badgeContent: Math.max(0, Math.min(99, Math.max(lo.notifications.summary, lo.notifications.count) || 0)),
    color: lo.notifications.color,
    variant: lo.variant
  }, /*#__PURE__*/_react.default.createElement(ContentContainerBox, {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }, lo.showIcon && /*#__PURE__*/(0, _react.cloneElement)(lo.icon, {
    className: "\n                    ".concat(!lo.noPanel && classes.iconButton, "\n                    ").concat(!lo.noPanel && classes["".concat(!settings.inverseMarkers ? (0, _utils.oppositeSide)(side) : side, "IconButton")], "\n                    ").concat(lo.isVisible && classes.activeIconButton, "\n                    ").concat(lo.disabled && classes.disabledButton, "\n                  ")
  }), !lo.noPanel && extraIcons && extraIcons.map(function (extraIcon, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, i <= 2 && /*#__PURE__*/(0, _react.cloneElement)(extraIcon, {
      style: {
        color: lo.isVisible && !lo.noPanel && determineColor()
      },
      className: "\n                    ".concat(classes.iconExtraButton, "\n                    ").concat(!lo.noPanel && classes["".concat(!settings.inverseMarkers ? (0, _utils.oppositeSide)(side) : side, "IconExtraButton")], "\n                    ").concat(classes["iconExtraButton".concat(i)], "\n                  ")
    }));
  }), lo.shortText && /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.shortText,
    style: {
      color: lo.disabled ? theme.palette.text.disabled : theme.palette.text.primary
    }
  }, lo.shortText.substr(0, 4))))))), /*#__PURE__*/_react.default.createElement(_MupMenuOptions.default, {
    lo: lo,
    side: side,
    anchorEl: anchorEl,
    setAnchorEl: setAnchorEl
  }));
});
var _default = MuiMenuButton;
exports.default = _default;