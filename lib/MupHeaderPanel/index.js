"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _AmpStories = _interopRequireDefault(require("@material-ui/icons/AmpStories"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _InfoOutlined = _interopRequireDefault(require("@material-ui/icons/InfoOutlined"));

var _MoreHoriz = _interopRequireDefault(require("@material-ui/icons/MoreHoriz"));

var _react = _interopRequireWildcard(require("react"));

var _MuiPanelStore = _interopRequireDefault(require("../MuiPanelStore"));

var _MupMenuOptions = _interopRequireDefault(require("../MupMenuOptions"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var fontSize = 20;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    collapseButton: {
      padding: "0px",
      width: theme.spacing(2.5),
      minWidth: theme.spacing(2.5),
      lineHeight: '0px'
    },
    header: {
      cursor: "default",
      position: "relative",
      gap: theme.spacing(1),
      height: '30px',
      userSelect: "none",
      padding: theme.spacing(1.5, 2, 1.5, 1),
      borderTop: "1px solid transparent",
      borderBottom: "1px solid ".concat(theme.palette.divider),
      backgroundColor: theme.palette.background.paper,
      backdropFilter: "blur(4px)"
    }
  };
});
var MupHeaderPanel = (0, _styles.withTheme)(function (_ref) {
  var _ref$layoutObject = _ref.layoutObject,
      uniqueId = _ref$layoutObject.uniqueId,
      side = _ref$layoutObject.side,
      iconInHeader = _ref$layoutObject.iconInHeader,
      icon = _ref$layoutObject.icon,
      asEmbedded = _ref$layoutObject.asEmbedded,
      isCollapsed = _ref$layoutObject.isCollapsed,
      title = _ref$layoutObject.title,
      subTitle = _ref$layoutObject.subTitle,
      asGroup = _ref$layoutObject.asGroup,
      layoutObject = _ref.layoutObject,
      theme = _ref.theme;
  var classes = useStyles(theme);

  var _React$useState = _react.default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      handleToggleCollapse = _useContext.handleToggleCollapse;

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    justifyContent: "space-between",
    onDoubleClick: function onDoubleClick() {
      return handleToggleCollapse({
        uniqueId: uniqueId
      });
    },
    alignItems: "center",
    onContextMenu: function onContextMenu(e) {
      e.preventDefault();
      handleClick(e);
    },
    display: "flex",
    className: "".concat(classes.header)
  }, /*#__PURE__*/_react.default.createElement(_MupMenuOptions.default, {
    underMenu: true,
    lo: layoutObject,
    side: side,
    anchorEl: anchorEl,
    setAnchorEl: setAnchorEl
  }), /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    alignItems: "center",
    style: {
      gap: theme.spacing(1)
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    arrow: true,
    title: "Click to toggle collapse"
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    disableRipple: true,
    disableElevation: true,
    onClick: function onClick() {
      return handleToggleCollapse({
        uniqueId: uniqueId
      });
    },
    className: classes.collapseButton
  }, isCollapsed ? /*#__PURE__*/_react.default.createElement(_ChevronRight.default, {
    style: {
      fontSize: fontSize
    }
  }) : /*#__PURE__*/_react.default.createElement(_ExpandMore.default, {
    style: {
      fontSize: fontSize
    }
  }))), iconInHeader && icon !== undefined && /*#__PURE__*/(0, _react.cloneElement)(icon, {
    color: 'disabled',
    style: {
      fontSize: 20
    }
  }), /*#__PURE__*/_react.default.createElement(_core.Box, {
    style: {
      gap: theme.spacing(1)
    },
    flexWrap: "wrap",
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    color: asEmbedded ? 'textSecondary' : 'textPrimary',
    style: {
      maxWidth: '265px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      lineHeight: "initial",
      fontWeight: 'bold'
    },
    variant: "subtitle2"
  }, title), subTitle && /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    title: subTitle,
    placement: "bottom"
  }, /*#__PURE__*/_react.default.createElement(_InfoOutlined.default, {
    style: {
      fontSize: '16px',
      color: theme.palette.text.hint
    }
  })))), /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    alignItems: "center",
    style: {
      gap: theme.spacing(2),
      height: "32px"
    }
  }, asGroup && /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    arrow: true,
    title: "As group...",
    placement: "bottom"
  }, /*#__PURE__*/_react.default.createElement(_AmpStories.default, {
    style: {
      fontSize: '16px',
      color: theme.palette.background.default,
      transform: 'rotateZ(90deg)',
      background: theme.palette.divider,
      borderRadius: '4px',
      padding: '4px 2px'
    }
  })), /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    title: "More options for the panel",
    arrow: true
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    className: classes.collapseButton,
    size: "small",
    onClick: function onClick(e) {
      e.preventDefault();
      handleClick(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_MoreHoriz.default, {
    color: "action"
  })))));
});
var _default = MupHeaderPanel;
exports.default = _default;