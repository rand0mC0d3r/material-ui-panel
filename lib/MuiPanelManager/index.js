"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery"));

var _react = require("react");

var _MuiPanelStore = _interopRequireDefault(require("../MuiPanelStore"));

var _MuiSplitter = _interopRequireDefault(require("../MuiSplitter"));

var _MuiStatusBar = _interopRequireDefault(require("../MuiStatusBar"));

var _MupMenuCollapseButton = _interopRequireDefault(require("../MupMenuCollapseButton"));

var _InternalStatus = _interopRequireDefault(require("./../MuiStatusBar/InternalStatus"));

var _MuiMenuButton = _interopRequireDefault(require("./MuiMenuButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var menuWidth = '56px';
var leftPanelWidth = '500px';
var rightPanelWidth = '500px';
var styledGrid = {
  bothGrid: {
    'grid-template-columns': 'auto auto 1fr auto auto',
    'grid-template-areas': "\n      \"leftMenu leftPanel main rightPanel rightMenu\"\n    "
  },
  leftGrid: {
    'grid-template-columns': 'auto auto 1fr',
    'grid-template-areas': "\n      \"leftMenu leftPanel main\"\n    "
  },
  rightGrid: {
    'grid-template-columns': '1fr auto auto',
    'grid-template-areas': "\n      \"main rightPanel rightMenu\"\n    "
  }
};

var styledMenus = function styledMenus(theme) {
  return {
    bothMenus: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      height: '100%'
    },
    leftMenu: {
      'grid-area': 'leftMenu',
      width: menuWidth,
      borderRight: "1px solid ".concat(theme.palette.divider)
    },
    rightMenu: {
      width: menuWidth,
      'grid-area': 'rightMenu',
      borderLeft: "1px solid ".concat(theme.palette.divider)
    }
  };
};

var styledPanel = function styledPanel(theme) {
  return {
    panelContainerWrapper: {
      position: 'relative',
      overflow: 'hidden auto',
      display: 'contents',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    panelContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start' // height: '100%',

    },
    leftPanel: {
      gridArea: 'leftPanel',
      borderRight: "1px solid ".concat(theme.palette.divider),
      display: 'unset'
    },
    rightPanel: {
      borderLeft: "1px solid ".concat(theme.palette.divider),
      display: 'unset',
      gridArea: 'rightPanel'
    }
  };
};

var useStyles = (0, _styles.makeStyles)(function (theme, upperbar) {
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread({
    wrapper: {
      height: '100%',
      width: '100%',
      position: 'absolute'
    },
    scrollSide: {
      overflow: 'visible',
      position: 'absolute',
      left: '0px',
      bottom: '0px',
      top: '0px',
      right: '0px',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    root: {
      // height: "100%",
      flex: '1 1 auto',
      // position: "absolute",
      width: '100%',
      overflow: 'hidden',
      display: 'grid',
      'grid-template-rows': '1fr',
      'gap': '0px 0px',
      'grid-auto-flow': 'row',
      backgroundColor: theme.palette.background.default
    }
  }, styledGrid), styledMenus(theme)), styledPanel(theme)), {}, {
    main: {
      'grid-area': 'main'
    },
    iconButton: {
      fontSize: '26px',
      '&:hover': {
        color: theme.palette.primary.main
      }
    },
    buttonMenu: {
      border: '0px none',
      padding: theme.spacing(2, 0),
      borderRadius: '0px',
      minWidth: 'initial'
    },
    rightGroupButtonMenu: {
      position: 'relative',
      '&::after': {
        content: '"G"',
        backgroundColor: '#CCC',
        position: 'absolute',
        fontSize: '8px',
        lineHeight: '12px',
        width: '12px',
        top: 2,
        borderRadius: '4px',
        left: 2
      }
    },
    leftGroupButtonMenu: {
      position: 'relative',
      '&::after': {
        content: '"G"',
        backgroundColor: '#CCC',
        position: 'absolute',
        fontSize: '8px',
        lineHeight: '12px',
        width: '10px',
        top: 2,
        borderRadius: '4px',
        right: 2
      }
    },
    rightButtonMenu: {
      borderRight: '4px solid transparent'
    },
    leftButtonMenu: {
      borderLeft: '4px solid transparent'
    },
    rightActiveButtonMenu: {
      borderRight: "4px solid ".concat(theme.palette.primary.main)
    },
    leftActiveButtonMenu: {
      borderLeft: "4px solid ".concat(theme.palette.primary.main)
    },
    menuOpen: {
      width: menuWidth
    },
    menuCollapsed: {
      width: '0px',
      border: '0px',
      backgroundColor: theme.palette.background.paper,
      transition: 'background-color 350ms ease-out 100ms',
      opacity: 1,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.background.default
      }
    },
    emptySpace: {
      flex: '1 1 auto'
    }
  });
});
var availableSides = ['left', 'right'];

var MuiPanelManager = function MuiPanelManager(_ref) {
  var children = _ref.children,
      _ref$allowRightClick = _ref.allowRightClick,
      allowRightClick = _ref$allowRightClick === void 0 ? false : _ref$allowRightClick,
      _ref$showCollapseButt = _ref.showCollapseButton,
      showCollapseButton = _ref$showCollapseButt === void 0 ? true : _ref$showCollapseButt,
      _ref$showSplitterButt = _ref.showSplitterButton,
      showSplitterButton = _ref$showSplitterButt === void 0 ? true : _ref$showSplitterButt;
  var theme = (0, _styles.useTheme)();

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      sides = _useState2[0],
      setSides = _useState2[1];

  var matches = (0, _useMediaQuery.default)('(min-width:600px)');

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      settings = _useContext.settings,
      sections = _useContext.sections,
      toggleSettingIsCollapsed = _useContext.toggleSettingIsCollapsed,
      layout = _useContext.layout;

  var classes = useStyles(theme, settings.upperBar);
  (0, _react.useEffect)(function () {
    toggleSettingIsCollapsed(!matches);
  }, [matches]);
  (0, _react.useEffect)(function () {
    if (layout.length > 0) {
      var foundSides = _toConsumableArray(new Set(layout.reduce(function (acc, val) {
        acc.push(val.side);
        return acc;
      }, [])));

      setSides(foundSides.length === 1 ? foundSides[0] : 'both');
    }
  }, [layout]);
  return /*#__PURE__*/React.createElement(_core.Box, {
    id: "MuiPanelManager",
    display: "flex",
    flexDirection: settings.upperBar ? 'column-reverse' : 'column',
    className: classes.wrapper
  }, /*#__PURE__*/React.createElement("div", {
    id: "MuiPanels",
    className: "".concat(classes.root, " ").concat(classes["".concat(sides, "Grid")])
  }, availableSides.filter(function (side) {
    return layout.some(function (lo) {
      return lo.side === side && !lo.asContent;
    });
  }).map(function (side) {
    return /*#__PURE__*/React.createElement("div", {
      key: "".concat(side, "_panels"),
      id: "MuiPanels_".concat(side, "Side"),
      onContextMenu: function onContextMenu(e) {
        !allowRightClick && e.preventDefault();
      },
      className: "\n          ".concat(classes.panelContainerWrapper, "\n          ").concat(layout.some(function (l) {
        return l.side === side && !l.asSection && !l.asContent && l.isVisible;
      }) && (side === 'left' ? classes.leftPanel : classes.rightPanel))
    }, /*#__PURE__*/React.createElement("div", {
      id: "".concat(side, "-panel"),
      key: "".concat(side, "-panel"),
      className: "".concat(classes.panelContainer),
      style: {
        gridArea: "".concat(side, "Panel"),
        overflow: 'hidden auto',
        width: settings.isCollapsed ? '0px' : layout.some(function (l) {
          return l.side === side && l.isVisible && !l.asSection;
        }) ? side === 'left' ? leftPanelWidth : rightPanelWidth : 'unset',
        height: layout.filter(function (l) {
          return l.side === side && l.isVisible;
        }).length > 1 ? 'unset' : '100%'
      }
    }));
  }), availableSides.filter(function (side) {
    return layout.some(function (lo) {
      return lo.side === side && !lo.asContent;
    });
  }).map(function (side) {
    return /*#__PURE__*/React.createElement("div", {
      key: "".concat(side, "_menus")
    }, layout.filter(function (lo) {
      return lo.side === side && !lo.asContent && !lo.asSection;
    }).length > 0 && /*#__PURE__*/React.createElement("div", {
      id: "".concat(side, "-menu"),
      onDoubleClick: function onDoubleClick() {
        settings.isCollapsed && toggleSettingIsCollapsed();
      },
      onContextMenu: function onContextMenu(e) {
        !allowRightClick && e.preventDefault();
      },
      className: "".concat(classes["".concat(side, "Menu")], " ").concat(classes.bothMenus, " ").concat(settings.isCollapsed ? classes.menuCollapsed : classes.menuOpen)
    }, showCollapseButton && /*#__PURE__*/React.createElement(_MupMenuCollapseButton.default, {
      side: side
    }), /*#__PURE__*/React.createElement("div", {
      className: "".concat(classes.scrollSide)
    }, !settings.isCollapsed && /*#__PURE__*/React.createElement(React.Fragment, null, layout.filter(function (lo) {
      return lo.side === side;
    }).filter(function (lo) {
      return !lo.asEmbedded && !lo.asContent && !lo.asSection;
    }).map(function (lo) {
      return /*#__PURE__*/React.createElement(_MuiMenuButton.default, {
        extraIcons: layout.filter(function (l) {
          return lo.uniqueId === l.parentId;
        }).map(function (l) {
          return l.icon;
        }),
        key: lo.uniqueId,
        lo: lo,
        side: side
      });
    }), /*#__PURE__*/React.createElement("div", {
      className: classes.emptySpace,
      onDoubleClick: function onDoubleClick() {
        !settings.isCollapsed && toggleSettingIsCollapsed();
      }
    })))));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridArea: 'main',
      display: 'flex',
      minWidth: '500px'
    }
  }, sections.filter(function (section) {
    return !section.parentId;
  }).map(function (section) {
    return /*#__PURE__*/React.createElement(_MuiSplitter.default, {
      showSplitterButton: showSplitterButton,
      key: section.id,
      section: section,
      isRoot: true
    });
  })), children), /*#__PURE__*/React.createElement("div", {
    id: "material-ui-panel-statusBar"
  }, !settings.statusBarAnnounced && /*#__PURE__*/React.createElement(_InternalStatus.default, null)));
};

var _default = MuiPanelManager;
exports.default = _default;