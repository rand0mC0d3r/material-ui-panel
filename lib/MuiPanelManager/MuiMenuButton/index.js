"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _styles = require("@material-ui/core/styles");

var _AddToHomeScreen = _interopRequireDefault(require("@material-ui/icons/AddToHomeScreen"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _InfoOutlined = _interopRequireDefault(require("@material-ui/icons/InfoOutlined"));

var _SwapHoriz = _interopRequireDefault(require("@material-ui/icons/SwapHoriz"));

var _ViewStream = _interopRequireDefault(require("@material-ui/icons/ViewStream"));

var _WebAsset = _interopRequireDefault(require("@material-ui/icons/WebAsset"));

var _react = _interopRequireWildcard(require("react"));

var _MuiPanelSettings = _interopRequireDefault(require("../../MuiPanelSettings"));

var _MuiPanelStore = _interopRequireDefault(require("../../MuiPanelStore"));

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
    root: {
      height: "100%",
      position: "absolute",
      width: "100%",
      overflow: "hidden",
      display: "grid",
      "grid-template-rows": "1fr",
      "gap": "0px 0px",
      "grid-auto-flow": "row",
      backgroundColor: theme.palette.background.default
    },
    toolboxButton: {},
    shortText: {
      fontSize: '10px',
      width: '40px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    badge: {
      "& .MuiBadge-badge": {
        border: "2px solid ".concat(theme.palette.background.paper),
        width: '24px',
        fontSize: '11px',
        height: '16px',
        minWidth: '24px',
        right: '2px',
        top: '0%',
        bottom: 'unset'
      }
    },
    bothGrid: {
      "grid-template-columns": "54px auto 1fr auto 54px",
      "grid-template-areas": "\n      \"leftMenu leftPanel main rightPanel rightMenu\"\n    "
    },
    leftGrid: {
      "grid-template-columns": "54px auto 1fr",
      "grid-template-areas": "\n      \"leftMenu leftPanel main\"\n    "
    },
    rightRight: {
      "grid-template-columns": "1fr auto 54px",
      "grid-template-areas": "\n      \"leftMenu leftPanel main rightPanel rightMenu\"\n    "
    },
    bothMenus: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    leftMenu: {
      "grid-area": "leftMenu",
      borderRight: "1px solid ".concat(theme.palette.divider)
    },
    rightMenu: {
      "grid-area": "rightMenu",
      borderLeft: "1px solid ".concat(theme.palette.divider)
    },
    panelContainer: {
      position: "relative",
      overflow: 'scroll',
      display: 'flex',
      flexDirection: 'column'
    },
    leftPanel: {
      borderRight: "1px solid ".concat(theme.palette.divider)
    },
    rightPanel: {
      borderLeft: "1px solid ".concat(theme.palette.divider)
    },
    main: {
      "grid-area": "main"
    },
    iconButton: {
      fontSize: "26px" // "&:hover": {
      //   color: theme.palette.text.primary,
      //   opacity: "0.95",
      // }

    },
    buttonMenu: {
      border: "0px none",
      padding: theme.spacing(2, 0),
      borderRadius: "0px",
      opacity: "0.55",
      minWidth: "initial",
      "&:hover": {
        color: theme.palette.text.primary,
        opacity: "0.9"
      }
    },
    rightGroupButtonMenu: {
      position: 'relative',
      "&::after": {
        content: '"."',
        backgroundColor: theme.palette.divider,
        color: theme.palette.divider,
        position: 'absolute',
        fontSize: '4px',
        lineHeight: "12px",
        width: '4px',
        top: 24,
        borderRadius: "0px 4px 4px 0px",
        left: 0
      }
    },
    leftGroupButtonMenu: {
      position: 'relative',
      "&::after": {
        content: '"."',
        backgroundColor: theme.palette.divider,
        color: theme.palette.divider,
        position: 'absolute',
        width: '4px',
        top: 24,
        borderRadius: "4px 0px 0px 4px",
        right: 0,
        lineHeight: '12px',
        fontSize: '4px'
      }
    },
    modalTitle: {
      width: '200px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      padding: '8px',
      fontSize: '12px',
      backgroundColor: theme.palette.divider
    },
    rightButtonMenu: {
      borderLeft: "3px solid transparent"
    },
    leftButtonMenu: {
      borderRight: "3px solid transparent"
    },
    rightActiveButtonMenu: {
      borderLeft: "3px solid ".concat(theme.palette.text.primary),
      opacity: "1"
    },
    leftActiveButtonMenu: {
      borderRight: "3px solid ".concat(theme.palette.text.primary),
      opacity: "1"
    },
    panelWrapper: {
      display: 'flex' // alignItems: 'stretch'

    },
    panelContent: {
      padding: "16px"
    },
    leftPanelWrapper: {
      borderRight: "3px solid ".concat(theme.palette.primary.main)
    },
    rightPanelWrapper: {
      borderLeft: "3px solid ".concat(theme.palette.primary.main)
    }
  };
});
var MuiMenuButton = (0, _styles.withTheme)(function (_ref) {
  var lo = _ref.lo,
      side = _ref.side,
      theme = _ref.theme;
  var classes = useStyles(theme);

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      layout = _useContext.layout,
      handleSetAsEmbedded = _useContext.handleSetAsEmbedded,
      handleSetVisible = _useContext.handleSetVisible,
      handleSetAsGroup = _useContext.handleSetAsGroup,
      handleUnSetAsEmbedded = _useContext.handleUnSetAsEmbedded,
      handleSetSide = _useContext.handleSetSide;

  var _React$useState = _react.default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  (0, _react.useEffect)(function () {
    setAnchorEl(null);
  }, [lo]);
  var open = Boolean(anchorEl);
  var id = open ? "simple-popover-".concat(lo.uniqueId) : undefined;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    arrow: true,
    key: lo.index,
    placement: lo.side,
    enterDelay: 1000,
    title: "".concat(lo.tooltip, " ").concat(lo.notificationCount > 0 ? " - Notifications: ".concat(lo.notificationCount) : '')
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_core.Button, {
    "aria-describedby": id,
    disableRipple: true,
    onContextMenu: function onContextMenu(e) {
      return handleClick(e);
    },
    disableElevation: true,
    disabled: lo.noPanel,
    onClick: function onClick() {
      return !lo.noPanel && handleSetVisible({
        uniqueId: lo.uniqueId
      });
    },
    variant: "text",
    fullWidth: true,
    className: "\n          ".concat(classes.buttonMenu, "\n          ").concat(lo.asGroup && classes["".concat(side, "GroupButtonMenu")], "\n          ").concat(classes["".concat(side, "ButtonMenu")], "\n          ").concat(lo.isVisible && classes["".concat(side, "ActiveButtonMenu")], "\n        ")
  }, /*#__PURE__*/_react.default.createElement(_core.Badge, {
    max: 9,
    className: classes.badge,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: side !== 'right' ? 'right' : 'left'
    },
    badgeContent: lo.notificationCount,
    color: lo.notificationColor,
    variant: lo.variant
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }, lo.showIcon && /*#__PURE__*/(0, _react.cloneElement)(lo.icon, {
    className: classes.iconButton,
    color: lo.isVisible ? "action" : "initial"
  }), lo.shortText && /*#__PURE__*/_react.default.createElement("div", {
    className: classes.shortText
  }, lo.shortText)))))), /*#__PURE__*/_react.default.createElement(_Popover.default, {
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: handleClose,
    anchorOrigin: {
      vertical: 'center',
      horizontal: side !== 'right' ? 'right' : 'left'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: side !== 'right' ? 'left' : 'right'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.modalTitle
  }, lo.tooltip), /*#__PURE__*/_react.default.createElement(_core.Box, {
    style: {
      gap: '8px',
      padding: '8px'
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }, !lo.asEmbedded && /*#__PURE__*/_react.default.createElement(_core.Button, {
    size: "small",
    fullWidth: true,
    onClick: function onClick() {
      return handleSetSide({
        uniqueId: lo.uniqueId
      });
    },
    variant: "outlined",
    startIcon: /*#__PURE__*/_react.default.createElement(_SwapHoriz.default, {
      style: {
        fontSize: 20
      }
    }),
    className: classes.toolboxButton
  }, "Switch sides"), !lo.asEmbedded ? /*#__PURE__*/_react.default.createElement(_core.Button, {
    onClick: function onClick() {
      return handleSetAsGroup({
        uniqueId: lo.uniqueId
      });
    },
    variant: "outlined",
    size: "small",
    fullWidth: true,
    startIcon: lo.asGroup ? /*#__PURE__*/_react.default.createElement(_ViewStream.default, null) : /*#__PURE__*/_react.default.createElement(_WebAsset.default, null),
    className: classes.toolboxButton
  }, lo.asGroup ? 'as Individual' : 'as Group') : /*#__PURE__*/_react.default.createElement(_core.Button, {
    onClick: function onClick() {
      return handleUnSetAsEmbedded({
        uniqueId: lo.uniqueId
      });
    },
    size: "small",
    startIcon: /*#__PURE__*/_react.default.createElement(_AddToHomeScreen.default, null),
    variant: "outlined",
    className: classes.toolboxButton
  }, "Promote"), !lo.asEmbedded && !lo.asGroup && /*#__PURE__*/_react.default.createElement(_core.Select, {
    fullWidth: true,
    disabled: lo.asGroup || !layout.some(function (lo) {
      return lo.asGroup;
    }),
    onChange: function onChange(event) {
      handleSetAsEmbedded({
        uniqueId: lo.uniqueId,
        parentId: event.target.value
      });
    }
  }, layout.filter(function (lo) {
    return lo.asGroup;
  }).map(function (lo) {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      value: lo.uniqueId
    }, /*#__PURE__*/_react.default.createElement(_core.Box, {
      display: "flex",
      style: {
        gap: "16px"
      }
    }, lo.icon, " ", lo.title));
  })))));
});
var _default = MuiMenuButton;
exports.default = _default;