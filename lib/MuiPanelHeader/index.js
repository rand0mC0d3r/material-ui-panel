"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _AddToHomeScreen = _interopRequireDefault(require("@material-ui/icons/AddToHomeScreen"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _InfoOutlined = _interopRequireDefault(require("@material-ui/icons/InfoOutlined"));

var _SwapHoriz = _interopRequireDefault(require("@material-ui/icons/SwapHoriz"));

var _ViewStream = _interopRequireDefault(require("@material-ui/icons/ViewStream"));

var _WebAsset = _interopRequireDefault(require("@material-ui/icons/WebAsset"));

var _react = _interopRequireWildcard(require("react"));

var _MuiPanelStore = _interopRequireDefault(require("../MuiPanelStore"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fontSize = 20;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    toolbox: {
      gap: theme.spacing(1),
      height: "32px"
    },
    toolboxButton: {
      padding: "0px",
      width: '28px',
      minWidth: '28px',
      lineHeight: '0px'
    },
    collapseButton: {
      padding: "0px",
      width: theme.spacing(2.5),
      minWidth: theme.spacing(2.5),
      lineHeight: '0px'
    },
    headerContainer: {
      gap: theme.spacing(1)
    },
    panelTitle: {
      maxWidth: '265px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      lineHeight: "initial"
    },
    header: {
      cursor: "default",
      position: "relative",
      gap: theme.spacing(1),
      userSelect: "none",
      padding: theme.spacing(1.5, 2, 1.5, 1),
      borderTop: "1px solid transparent",
      borderBottom: "1px solid ".concat(theme.palette.divider),
      backgroundColor: theme.palette.background.paper,
      backdropFilter: "blur(4px)"
    }
  };
});
var MuiPanel = (0, _styles.withTheme)(function (_ref) {
  var _ref$layoutObject = _ref.layoutObject,
      uniqueId = _ref$layoutObject.uniqueId,
      iconInHeader = _ref$layoutObject.iconInHeader,
      icon = _ref$layoutObject.icon,
      asEmbedded = _ref$layoutObject.asEmbedded,
      isCollapsed = _ref$layoutObject.isCollapsed,
      title = _ref$layoutObject.title,
      subTitle = _ref$layoutObject.subTitle,
      asGroup = _ref$layoutObject.asGroup,
      theme = _ref.theme;
  var classes = useStyles(theme);

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      layout = _useContext.layout,
      handleSetAsEmbedded = _useContext.handleSetAsEmbedded,
      handleToggleCollapse = _useContext.handleToggleCollapse,
      handleUnSetAsEmbedded = _useContext.handleUnSetAsEmbedded,
      handleSetAsGroup = _useContext.handleSetAsGroup,
      handleSetSide = _useContext.handleSetSide;

  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    justifyContent: "space-between",
    onDoubleClick: function onDoubleClick() {
      return handleToggleCollapse({
        uniqueId: uniqueId
      });
    },
    alignItems: "center",
    display: "flex",
    className: "".concat(classes.header)
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
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
    className: classes.headerContainer,
    flexWrap: "wrap",
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    color: "textPrimary",
    className: classes.panelTitle,
    style: {
      fontWeight: asEmbedded ? 'bold' : 'normal'
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
  })), asGroup && /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    title: "As group...",
    placement: "bottom"
  }, /*#__PURE__*/_react.default.createElement(_WebAsset.default, {
    style: {
      fontSize: '16px',
      color: theme.palette.text.hint
    }
  })))), /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    className: classes.toolbox
  }));
});
var _default = MuiPanel;
exports.default = _default;