"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _MuiPanelStore = _interopRequireDefault(require("../MuiPanelStore"));

var _MupStatus = _interopRequireDefault(require("../MupStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MupStatusPanel = function MupStatusPanel(_ref) {
  var id = _ref.id,
      secondary = _ref.secondary,
      elevation = _ref.elevation,
      style = _ref.style,
      tooltip = _ref.tooltip,
      children = _ref.children,
      popover = _ref.popover;

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      status = _useContext.status;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      statusObject = _useState2[0],
      setStatusObject = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      anchorEl = _useState4[0],
      setAnchorEl = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isToggled = _useState6[0],
      setIsToggled = _useState6[1];

  var open = Boolean(anchorEl);
  (0, _react.useEffect)(function () {
    if (statusObject === null && status.some(function (item) {
      return item.uniqueId === id;
    })) {
      setStatusObject(status.find(function (item) {
        return item.uniqueId === id;
      }));
    }
  }, [status, id, statusObject]);

  var onClose = function onClose() {
    return setAnchorEl(null);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_MupStatus.default, {
    id: id,
    tooltip: tooltip,
    secondary: secondary,
    onClick: function onClick(e) {
      return setAnchorEl(e.currentTarget);
    },
    hasToggled: function hasToggled() {
      setIsToggled(!isToggled);
    },
    style: _objectSpread(_objectSpread({}, style), {}, {
      minWidth: '24px'
    })
  }, children), /*#__PURE__*/React.createElement(_core.Popover, {
    open: open,
    anchorEl: anchorEl,
    onClose: onClose,
    elevation: elevation,
    id: "".concat(id, "-status-popover"),
    anchorOrigin: {
      vertical: isToggled ? 'top' : 'bottom',
      horizontal: statusObject !== null && statusObject !== void 0 && statusObject.secondary ? 'right' : 'left'
    },
    transformOrigin: {
      vertical: !isToggled ? 'bottom' : 'top',
      horizontal: statusObject !== null && statusObject !== void 0 && statusObject.secondary ? 'right' : 'left'
    },
    style: {
      marginTop: "".concat((isToggled ? 1 : -1) * 12, "px")
    }
  }, popover));
};

MupStatusPanel.defaultProps = {
  secondary: false,
  tooltip: '',
  elevation: 1
};
MupStatusPanel.propTypes = {
  id: _propTypes.default.string.isRequired,
  secondary: _propTypes.default.bool,
  style: _propTypes.default.any,
  elevation: _propTypes.default.number,
  tooltip: _propTypes.default.string,
  children: _propTypes.default.any,
  popover: _propTypes.default.any
};
var _default = MupStatusPanel;
exports.default = _default;