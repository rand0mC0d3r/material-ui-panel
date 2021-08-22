"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _react = _interopRequireWildcard(require("react"));

var _MupMenuCollapseButton = _interopRequireDefault(require("../MupMenuCollapseButton"));

var _MuiPanelSettings = _interopRequireDefault(require("../MuiPanelSettings"));

var _MuiPanelStore = _interopRequireWildcard(require("../MuiPanelStore"));

var _MuiMenuButton = _interopRequireDefault(require("./MuiMenuButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var menuWidth = '54px';
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
    bothGrid: {
      "grid-template-columns": "auto auto 1fr auto auto",
      "grid-template-areas": "\n      \"leftMenu leftPanel main rightPanel rightMenu\"\n    "
    },
    leftGrid: {
      "grid-template-columns": "auto auto 1fr",
      "grid-template-areas": "\n      \"leftMenu leftPanel main\"\n    "
    },
    rightRight: {
      "grid-template-columns": "1fr auto auto",
      "grid-template-areas": "\n      \"leftMenu leftPanel main rightPanel rightMenu\"\n    "
    },
    bothMenus: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative'
    },
    leftMenu: {
      "grid-area": "leftMenu",
      width: '54px',
      borderRight: "1px solid ".concat(theme.palette.divider)
    },
    rightMenu: {
      width: '54px',
      "grid-area": "rightMenu",
      borderLeft: "1px solid ".concat(theme.palette.divider)
    },
    panelContainer: {
      position: "relative",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
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
      fontSize: "26px",
      "&:hover": {
        color: theme.palette.primary.main
      }
    },
    buttonMenu: {
      border: "0px none",
      padding: theme.spacing(2, 0),
      borderRadius: "0px",
      minWidth: "initial"
    },
    rightGroupButtonMenu: {
      position: 'relative',
      "&::after": {
        content: '"G"',
        backgroundColor: "#CCC",
        position: 'absolute',
        fontSize: "8px",
        lineHeight: "12px",
        width: '12px',
        top: 2,
        borderRadius: "4px",
        left: 2
      }
    },
    leftGroupButtonMenu: {
      position: 'relative',
      "&::after": {
        content: '"G"',
        backgroundColor: "#CCC",
        position: 'absolute',
        fontSize: "8px",
        lineHeight: "12px",
        width: '10px',
        top: 2,
        borderRadius: "4px",
        right: 2
      }
    },
    panelContainerWrapper: {
      position: 'relative',
      overflow: 'hidden auto'
    },
    rightButtonMenu: {
      borderRight: "3px solid transparent"
    },
    leftButtonMenu: {
      borderLeft: "3px solid transparent"
    },
    rightActiveButtonMenu: {
      borderRight: "3px solid ".concat(theme.palette.primary.main)
    },
    leftActiveButtonMenu: {
      borderLeft: "3px solid ".concat(theme.palette.primary.main)
    },
    panelWrapper: {
      display: 'flex' // alignItems: 'stretch'

    },
    panelContent: {
      padding: "16px"
    },
    leftPanelWrapper: {
      borderLeft: "3px solid ".concat(theme.palette.primary.main)
    },
    rightPanelWrapper: {
      borderRight: "3px solid ".concat(theme.palette.primary.main)
    },
    menuOpen: {
      width: menuWidth
    },
    menuCollapsed: {
      width: '8px',
      backgroundColor: theme.palette.background.default,
      transition: "100ms 300ms background-color",
      cursor: 'pointer',
      "&:hover": {
        transition: "1000ms 300ms background-color",
        backgroundColor: theme.palette.divider
      }
    }
  };
});
var availableSides = ['left', 'right'];
var MuiPanelManager = (0, _styles.withTheme)(function (_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      _ref$allowRightClick = _ref.allowRightClick,
      allowRightClick = _ref$allowRightClick === void 0 ? false : _ref$allowRightClick,
      _ref$showCollapseButt = _ref.showCollapseButton,
      showCollapseButton = _ref$showCollapseButt === void 0 ? true : _ref$showCollapseButt;
  var classes = useStyles(theme);

  var _useState = (0, _react.useState)('both'),
      _useState2 = _slicedToArray(_useState, 2),
      sides = _useState2[0],
      setSides = _useState2[1];

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      settings = _useContext.settings,
      toggleIsCollapsed = _useContext.toggleIsCollapsed,
      layout = _useContext.layout;

  (0, _react.useEffect)(function () {
    var foundSides = _toConsumableArray(new Set(layout.reduce(function (acc, val) {
      acc.push(val.side);
      return acc;
    }, [])));

    setSides(foundSides.length === 1 ? foundSides[0] : 'both');
  }, [layout]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(classes.root, " ").concat(classes["".concat(sides, "Grid")])
  }, availableSides.map(function (side) {
    return /*#__PURE__*/_react.default.createElement("div", {
      onContextMenu: function onContextMenu(e) {
        !allowRightClick && e.preventDefault();
      },
      className: "".concat(classes.panelContainerWrapper, " ").concat(layout.some(function (l) {
        return l.side === side && l.isVisible;
      }) && (side === 'left' ? classes.leftPanel : classes.rightPanel))
    }, /*#__PURE__*/_react.default.createElement("div", {
      id: "".concat(side, "-panel"),
      key: "".concat(side, "-panel"),
      className: "".concat(classes.panelContainer),
      style: {
        gridArea: "".concat(side, "Panel"),
        overflow: 'hidden auto',
        width: "".concat(layout.some(function (l) {
          return l.side === side && l.isVisible;
        }) ? '500px' : 'unset')
      }
    }));
  }), availableSides.filter(function (side) {
    return layout.some(function (lo) {
      return lo.side === side;
    });
  }).map(function (side, index) {
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: index
    }, layout.filter(function (lo) {
      return lo.side === side;
    }).length > 0 && /*#__PURE__*/_react.default.createElement("div", {
      onClick: function onClick() {
        settings.isCollapsed && toggleIsCollapsed();
      },
      onContextMenu: function onContextMenu(e) {
        !allowRightClick && e.preventDefault();
      },
      className: "".concat(classes["".concat(side, "Menu")], " ").concat(classes.bothMenus, " ").concat(settings.isCollapsed ? classes.menuCollapsed : classes.menuOpen)
    }, !settings.isCollapsed && /*#__PURE__*/_react.default.createElement("div", null, layout.filter(function (lo) {
      return lo.side === side;
    }).filter(function (lo) {
      return !lo.asEmbedded;
    }).map(function (lo) {
      return /*#__PURE__*/_react.default.createElement(_MuiMenuButton.default, {
        lo: lo,
        side: side
      });
    })), showCollapseButton && /*#__PURE__*/_react.default.createElement(_MupMenuCollapseButton.default, {
      side: side
    }), index === 0 && /*#__PURE__*/_react.default.createElement("div", null, !settings.isCollapsed && /*#__PURE__*/_react.default.createElement(_MuiPanelSettings.default, null))));
  }), children.map(function (child, i) {
    return /*#__PURE__*/(0, _react.cloneElement)(child, {
      key: i,
      style: {
        gridArea: "main"
      }
    });
  }));
});
var _default = MuiPanelManager;
exports.default = _default;