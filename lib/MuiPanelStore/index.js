"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MuiPanelProvider = MuiPanelProvider;
exports.default = void 0;

var _get = _interopRequireDefault(require("lodash/get"));

var _react = _interopRequireWildcard(require("react"));

var _MuiPanelManager = _interopRequireDefault(require("../MuiPanelManager"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var DataContext = /*#__PURE__*/(0, _react.createContext)(null);

function MuiPanelProvider(props) {
  var initialLayout = (0, _get.default)(props, 'layout', []);
  var initialSettings = (0, _get.default)(props, 'settings', {
    isCollapsed: false
  });

  var _useState = (0, _react.useState)(initialLayout),
      _useState2 = _slicedToArray(_useState, 2),
      layout = _useState2[0],
      setLayout = _useState2[1];

  var _useState3 = (0, _react.useState)(initialSettings),
      _useState4 = _slicedToArray(_useState3, 2),
      settings = _useState4[0],
      setSettings = _useState4[1];

  var handlePanelAnnouncement = function handlePanelAnnouncement(_ref) {
    var ref = _ref.ref,
        children = _ref.children,
        side = _ref.side,
        _ref$notificationCoun = _ref.notificationCount,
        notificationCount = _ref$notificationCoun === void 0 ? 0 : _ref$notificationCoun,
        notificationColor = _ref.notificationColor,
        subTitle = _ref.subTitle,
        shortText = _ref.shortText,
        _ref$iconInHeader = _ref.iconInHeader,
        iconInHeader = _ref$iconInHeader === void 0 ? true : _ref$iconInHeader,
        title = _ref.title,
        tooltip = _ref.tooltip,
        icon = _ref.icon,
        _ref$showIcon = _ref.showIcon,
        showIcon = _ref$showIcon === void 0 ? true : _ref$showIcon,
        _ref$noPanel = _ref.noPanel,
        noPanel = _ref$noPanel === void 0 ? false : _ref$noPanel;
    var uniqueId = Math.random().toString(36).substring(7);
    setLayout(function (layout) {
      var _ref2;

      return [].concat(_toConsumableArray(layout), [(_ref2 = {
        uniqueId: uniqueId,
        side: side,
        isVisible: false,
        asGroup: false,
        asEmbedded: false,
        parentId: null,
        iconInHeader: iconInHeader,
        isCollapsed: false,
        ref: ref,
        index: layout.length,
        showBadge: false,
        notificationCount: notificationCount,
        notificationColor: notificationColor,
        variant: 'standard'
      }, _defineProperty(_ref2, "index", layout.length), _defineProperty(_ref2, "subTitle", subTitle), _defineProperty(_ref2, "title", title), _defineProperty(_ref2, "showIcon", showIcon), _defineProperty(_ref2, "shortText", shortText), _defineProperty(_ref2, "tooltip", tooltip), _defineProperty(_ref2, "noPanel", noPanel), _defineProperty(_ref2, "icon", icon), _defineProperty(_ref2, "children", children), _ref2)]);
    });
    return uniqueId;
  };

  var handleSetAsGroup = function handleSetAsGroup(_ref3) {
    var uniqueId = _ref3.uniqueId;
    setLayout(layout.map(function (layoutObject) {
      return layoutObject.uniqueId === uniqueId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
        asGroup: !layoutObject.asGroup
      }) : layoutObject;
    }));
  };

  var handleUnSetAsEmbedded = function handleUnSetAsEmbedded(_ref4) {
    var uniqueId = _ref4.uniqueId;
    setLayout(layout.map(function (layoutObject) {
      return layoutObject.uniqueId === uniqueId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
        asGroup: false,
        asEmbedded: false,
        isVisible: false,
        parentId: null
      }) : layoutObject;
    }));
  };

  var handlePanelAlerts = function handlePanelAlerts(_ref5) {
    var uniqueId = _ref5.uniqueId,
        notificationCount = _ref5.notificationCount,
        notificationColor = _ref5.notificationColor;
    setLayout(layout.map(function (layoutObject) {
      return layoutObject.uniqueId === uniqueId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
        notificationCount: notificationCount,
        notificationColor: notificationColor
      }) : layoutObject;
    }));
  };

  var handleToggleCollapse = function handleToggleCollapse(_ref6) {
    var uniqueId = _ref6.uniqueId;
    setLayout(layout.map(function (layoutObject) {
      return layoutObject.uniqueId === uniqueId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
        isCollapsed: !layoutObject.isCollapsed
      }) : layoutObject;
    }));
  };

  var handleSetAsEmbedded = function handleSetAsEmbedded(_ref7) {
    var uniqueId = _ref7.uniqueId,
        parentId = _ref7.parentId;
    var findParent = layout.find(function (layoutObject) {
      return layoutObject.uniqueId === parentId;
    });

    if (findParent) {
      var updateEmbedded = layout.map(function (layoutObject) {
        return layoutObject.uniqueId === uniqueId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
          parentId: parentId,
          isVisible: true,
          side: findParent.side,
          asEmbedded: !layoutObject.asEmbedded
        }) : layoutObject;
      });
      var activateParent = updateEmbedded.map(function (layoutObject) {
        return layoutObject.uniqueId === parentId || layoutObject.parentId === parentId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
          isVisible: true
        }) : layoutObject;
      });
      setLayout(activateParent);
    }
  };

  var handleSetSide = function handleSetSide(_ref8) {
    var uniqueId = _ref8.uniqueId;
    setLayout(layout.map(function (layoutObject) {
      return layoutObject.uniqueId === uniqueId || layoutObject.parentId === uniqueId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
        isVisible: true,
        side: layoutObject.side === 'right' ? "left" : 'right'
      }) : _objectSpread(_objectSpread({}, layoutObject), {}, {
        isVisible: false
      });
    }));
  };

  var toggleIsCollapsed = function toggleIsCollapsed() {
    setSettings(_objectSpread(_objectSpread({}, settings), {}, {
      isCollapsed: !settings.isCollapsed
    }));
  };

  var handleSetVisible = function handleSetVisible(_ref9) {
    var uniqueId = _ref9.uniqueId;
    var foundObject = layout.find(function (lo) {
      return lo.uniqueId === uniqueId;
    });

    if (foundObject) {
      console.log("toggling visibility for id", uniqueId, foundObject);
      setLayout(function (layout) {
        return _toConsumableArray(layout.map(function (lo) {
          if (lo.side === foundObject.side) {
            if (lo.uniqueId === foundObject.uniqueId) {
              console.log('found by uniqueId');
              return _objectSpread(_objectSpread({}, lo), {}, {
                isVisible: !lo.isVisible,
                notificationCount: 0
              });
            } else if (lo.parentId === foundObject.uniqueId) {
              console.log('found by parentId');
              return _objectSpread(_objectSpread({}, lo), {}, {
                isVisible: true
              });
            } else {
              console.log('not found');
              return _objectSpread(_objectSpread({}, lo), {}, {
                isVisible: false
              });
            }
          }

          console.log('other side');
          return lo;
        }));
      });
    }
  };

  (0, _react.useEffect)(function () {
    localStorage.setItem('material-ui-panel.layout', JSON.stringify(layout.map(function (l) {
      return _objectSpread(_objectSpread({}, l), {}, {
        children: null,
        icon: null
      });
    })));
  }, [layout]);
  (0, _react.useEffect)(function () {
    console.log("---");
    layout.forEach(function (layoutObject) {
      return console.log(layoutObject);
    });
  }, [layout]);
  (0, _react.useEffect)(function () {
    console.log('settings', settings);
  }, [settings]);
  return /*#__PURE__*/_react.default.createElement(DataContext.Provider, {
    value: {
      layout: layout,
      setLayout: setLayout,
      settings: settings,
      setSettings: setSettings,
      handleUnSetAsEmbedded: handleUnSetAsEmbedded,
      toggleIsCollapsed: toggleIsCollapsed,
      handleSetAsGroup: handleSetAsGroup,
      handleSetVisible: handleSetVisible,
      handlePanelAlerts: handlePanelAlerts,
      handleSetSide: handleSetSide,
      handleToggleCollapse: handleToggleCollapse,
      handleSetAsEmbedded: handleSetAsEmbedded,
      handlePanelAnnouncement: handlePanelAnnouncement
    }
  }, /*#__PURE__*/_react.default.createElement(_MuiPanelManager.default, {
    allowRightClick: props.allowRightClick,
    showCollapseButton: props.showCollapseButton
  }, props.children));
}

var _default = DataContext;
exports.default = _default;