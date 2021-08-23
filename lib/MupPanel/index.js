"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Texture = _interopRequireDefault(require("@material-ui/icons/Texture"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _MuiPanelStore = _interopRequireDefault(require("../MuiPanelStore"));

var _MupHeaderPanel = _interopRequireDefault(require("../MupHeaderPanel"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MupPanel = function MupPanel(_ref) {
  var id = _ref.id,
      title = _ref.title,
      hint = _ref.hint,
      tooltip = _ref.tooltip,
      icon = _ref.icon,
      placement = _ref.placement,
      alertsAcknowledged = _ref.alertsAcknowledged,
      notifications = _ref.notifications,
      disabled = _ref.disabled,
      iconInHeader = _ref.iconInHeader,
      noPadding = _ref.noPadding,
      children = _ref.children;

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      layout = _useContext.layout,
      handlePanelAlerts = _useContext.handlePanelAlerts,
      handlePanelAnnouncement = _useContext.handlePanelAnnouncement;

  var _useState = (0, _react.useState)('left'),
      _useState2 = _slicedToArray(_useState, 2),
      side = _useState2[0],
      setSide = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isRegistered = _useState4[0],
      setIsRegistered = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      layoutObject = _useState6[0],
      setLayoutObject = _useState6[1];

  (0, _react.useEffect)(function () {
    if (!id) {
      console.error("MupPanel: missing attr:id for panel with title+hint:", title, hint);
    } else {
      if (!isRegistered) {
        handlePanelAnnouncement({
          iconInHeader: iconInHeader,
          placement: placement,
          disabled: disabled,
          id: id,
          subTitle: hint,
          side: side,
          title: title,
          tooltip: tooltip,
          icon: icon || /*#__PURE__*/_react.default.createElement(_Texture.default, null)
        });
        setIsRegistered(true);
      }
    }
  }, [id, isRegistered, side, handlePanelAnnouncement, iconInHeader, placement, disabled, title, hint, tooltip, icon]);
  (0, _react.useEffect)(function () {
    var findObject = layout.find(function (lo) {
      return lo.uniqueId === id;
    });

    if (findObject) {
      setLayoutObject(findObject); // if (findObject.notifications?.count === 0) {
      //   alertsAcknowledged()
      // }
    }
  }, [layout, id, alertsAcknowledged]);
  (0, _react.useEffect)(function () {
    if (layoutObject) {
      setSide(layoutObject.side);
    }
  }, [layoutObject]);
  (0, _react.useEffect)(function () {
    if (id && layoutObject) {
      if (notifications.count !== null && notifications.count !== layoutObject.notifications.count && !!notifications.color) {
        handlePanelAlerts({
          id: id,
          count: Math.min(99, Math.max(notifications.count, 0)),
          color: notifications.color
        });
      }
    }
  }, [notifications.count, notifications.color, id, layoutObject, handlePanelAlerts]);
  return layoutObject && layoutObject.isVisible && (layoutObject.asSection && layoutObject.uniqueId ? document.getElementById("".concat(layoutObject.uniqueId, "-section")) : document.getElementById("".concat(side, "-panel"))) && !!id ? /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react.default.createElement("div", {
    style: {
      order: layoutObject.parentId ? '' : '-1',
      flex: !layoutObject.parentId ? '1 1 auto' : '0 0 auto',
      display: 'flex',
      height: layoutObject.parentId ? 'unset' : "100%",
      flexDirection: 'column'
    }
  }, /*#__PURE__*/_react.default.createElement(_MupHeaderPanel.default, {
    layoutObject: layoutObject
  }), !layoutObject.isCollapsed && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: noPadding ? null : '16px',
      alignSelf: 'stretch',
      overflow: 'scroll',
      flex: '1 1 auto'
    }
  }, children)), function () {
    return layoutObject.asSection && layoutObject.uniqueId ? document.getElementById("".concat(layoutObject.uniqueId, "-section")) : document.getElementById("".concat(side, "-panel"));
  }()) : null;
};

MupPanel.defaultProps = {
  placement: 'top',
  notifications: {
    count: null,
    color: null
  },
  alertsAcknowledged: function alertsAcknowledged() {},
  noPadding: false,
  iconInHeader: false
};
MupPanel.propTypes = {
  id: _propTypes.default.string,
  title: _propTypes.default.string,
  hint: _propTypes.default.string,
  tooltip: _propTypes.default.string,
  icon: _propTypes.default.node,
  placement: _propTypes.default.oneOf(['top', 'bottom']),
  notifications: _propTypes.default.shape({
    count: _propTypes.default.number,
    color: _propTypes.default.string
  }),
  disabled: _propTypes.default.bool,
  iconInHeader: _propTypes.default.bool,
  noPadding: _propTypes.default.bool,
  children: _propTypes.default.node
};
var _default = MupPanel;
exports.default = _default;