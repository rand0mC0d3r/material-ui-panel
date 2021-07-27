"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _Remove = _interopRequireDefault(require("@material-ui/icons/Remove"));

var _react = _interopRequireWildcard(require("react"));

var _MuiPanelStore = _interopRequireDefault(require("../MuiPanelStore"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MuiDivider = (0, _styles.withTheme)(function (_ref) {
  var _ref$defaultSide = _ref.defaultSide,
      defaultSide = _ref$defaultSide === void 0 ? 'left' : _ref$defaultSide,
      tooltip = _ref.tooltip,
      shortText = _ref.shortText,
      icon = _ref.icon,
      _ref$showIcon = _ref.showIcon,
      showIcon = _ref$showIcon === void 0 ? true : _ref$showIcon,
      theme = _ref.theme;

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      handlePanelAnnouncement = _useContext.handlePanelAnnouncement;

  (0, _react.useEffect)(function () {
    handlePanelAnnouncement({
      side: defaultSide,
      shortText: shortText,
      showIcon: showIcon,
      tooltip: tooltip,
      icon: icon ? icon : /*#__PURE__*/_react.default.createElement(_Remove.default, null),
      noPanel: true
    });
  }, []);
  return null;
});
var _default = MuiDivider;
exports.default = _default;