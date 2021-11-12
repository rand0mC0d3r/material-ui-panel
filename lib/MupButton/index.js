"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _MuiPanelStore = _interopRequireDefault(require("../MuiPanelStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MupButton = function MupButton(_ref) {
  var id = _ref.id,
      tooltip = _ref.tooltip,
      shortText = _ref.shortText,
      disabled = _ref.disabled,
      icon = _ref.icon,
      showIcon = _ref.showIcon,
      onClick = _ref.onClick;

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      handlePanelAnnouncement = _useContext.handlePanelAnnouncement,
      handlePanelDestroy = _useContext.handlePanelDestroy,
      handleSetIcon = _useContext.handleSetIcon;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isRegistered = _useState2[0],
      setIsRegistered = _useState2[1];

  var callbackRegisterPanel = (0, _react.useCallback)(function (id) {
    handlePanelAnnouncement({
      side: 'left',
      handleOnClick: onClick,
      noPanel: true,
      icon: icon,
      id: id,
      shortText: shortText,
      showIcon: showIcon,
      tooltip: tooltip,
      disabled: disabled
    });
  }, [handlePanelAnnouncement, icon, onClick, shortText, disabled, showIcon, tooltip]);
  var callbackHandlePaneDestroy = (0, _react.useCallback)(function (id) {
    handlePanelDestroy({
      id: id
    });
  }, []);
  var callbackHandleSetIcon = (0, _react.useCallback)(function (icon) {
    handleSetIcon({
      uniqueId: id,
      icon: icon
    });
  }, [id]);
  (0, _react.useEffect)(function () {
    if (id && icon && !isRegistered) {
      callbackRegisterPanel(id);
      setIsRegistered(true);
    }
  }, [isRegistered, id, icon, callbackRegisterPanel]);
  (0, _react.useEffect)(function () {
    if (id && icon && isRegistered) {
      callbackHandleSetIcon(icon);
    }
  }, [isRegistered, id, icon, callbackHandleSetIcon]);
  (0, _react.useEffect)(function () {
    return function () {
      if (id) {
        callbackHandlePaneDestroy(id);
        setIsRegistered(false);
      }
    };
  }, [id, callbackHandlePaneDestroy]);
  return null;
};

MupButton.defaultProps = {
  showIcon: true,
  disabled: false
};
MupButton.propTypes = {
  id: _propTypes.default.string.isRequired,
  icon: _propTypes.default.node.isRequired,
  tooltip: _propTypes.default.string,
  shortText: _propTypes.default.string,
  showIcon: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func
};
var _default = MupButton;
exports.default = _default;