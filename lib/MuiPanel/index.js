"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Texture = _interopRequireDefault(require("@material-ui/icons/Texture"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _MuiPanelHeader = _interopRequireDefault(require("../MuiPanelHeader"));

var _MuiPanelStore = _interopRequireDefault(require("../MuiPanelStore"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MuiPanel = function MuiPanel(_ref) {
  var _ref$initialSide = _ref.initialSide,
      initialSide = _ref$initialSide === void 0 ? 'left' : _ref$initialSide,
      icon = _ref.icon,
      _ref$iconInHeader = _ref.iconInHeader,
      iconInHeader = _ref$iconInHeader === void 0 ? true : _ref$iconInHeader,
      title = _ref.title,
      subTitle = _ref.subTitle,
      _ref$notificationCoun = _ref.notificationCount,
      notificationCount = _ref$notificationCoun === void 0 ? 0 : _ref$notificationCoun,
      _ref$notificationColo = _ref.notificationColor,
      notificationColor = _ref$notificationColo === void 0 ? 'primary' : _ref$notificationColo,
      _ref$noPadding = _ref.noPadding,
      noPadding = _ref$noPadding === void 0 ? false : _ref$noPadding,
      children = _ref.children;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      receivedUniqueId = _useState2[0],
      setReceivedUniqueId = _useState2[1];

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      layout = _useContext.layout,
      handlePanelAlerts = _useContext.handlePanelAlerts,
      handlePanelAnnouncement = _useContext.handlePanelAnnouncement;

  var _useState3 = (0, _react.useState)(initialSide),
      _useState4 = _slicedToArray(_useState3, 2),
      side = _useState4[0],
      setSide = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      layoutObject = _useState6[0],
      setLayoutObject = _useState6[1];

  (0, _react.useEffect)(function () {
    if (!receivedUniqueId) {
      setReceivedUniqueId(handlePanelAnnouncement({
        iconInHeader: iconInHeader,
        subTitle: subTitle,
        side: initialSide,
        title: title,
        tooltip: title,
        icon: icon ? icon : /*#__PURE__*/_react.default.createElement(_Texture.default, null)
      }));
    }
  }, [receivedUniqueId]);
  (0, _react.useEffect)(function () {
    if (receivedUniqueId) {
      var findObject = layout.find(function (lo) {
        return lo.uniqueId === receivedUniqueId;
      });

      if (findObject) {
        setLayoutObject(findObject);
      }
    }
  }, [receivedUniqueId, layout]);
  (0, _react.useEffect)(function () {
    if (layoutObject) {
      setSide(layoutObject.side);
    }
  }, [layoutObject]);
  (0, _react.useEffect)(function () {
    if (receivedUniqueId) {
      handlePanelAlerts({
        uniqueId: receivedUniqueId,
        notificationCount: notificationCount,
        notificationColor: notificationColor
      });
    }
  }, [notificationCount, notificationColor, receivedUniqueId]);
  return layoutObject && layoutObject.isVisible && receivedUniqueId ? /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react.default.createElement("div", {
    style: {
      order: layoutObject.parentId ? '' : '-1',
      flex: !layoutObject.parentId ? '1 1 auto' : '0 0 auto'
    }
  }, /*#__PURE__*/_react.default.createElement(_MuiPanelHeader.default, {
    layoutObject: layoutObject
  }), !layoutObject.isCollapsed && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: noPadding ? null : '16px'
    }
  }, children)), document.getElementById("".concat(side, "-panel"))) : null;
};

var _default = MuiPanel;
exports.default = _default;