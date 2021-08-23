"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _react = _interopRequireWildcard(require("react"));

var _MuiPanelStore = _interopRequireDefault(require("../../MuiPanelStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      position: "absolute",
      backgroundColor: theme.palette.background.default,
      border: "3px dotted ".concat(theme.palette.divider),
      borderRadius: "8px",
      padding: '8px',
      left: '35%',
      right: '35%',
      top: '32px',
      height: '850px',
      overflow: "auto"
    },
    dumpText: {
      color: theme.palette.text.primary
    }
  };
});
var MuiDebug = (0, _styles.withTheme)(function (_ref) {
  var theme = _ref.theme;
  var classes = useStyles(theme);

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      settings = _useContext.settings,
      sections = _useContext.sections,
      layout = _useContext.layout;

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, settings.debugMode && /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, sections.map(function (sectionObject) {
    return /*#__PURE__*/_react.default.createElement("pre", {
      className: classes.dumpText
    }, JSON.stringify(_objectSpread({}, sectionObject), null, 4));
  }), /*#__PURE__*/_react.default.createElement("hr", null), layout.map(function (layoutObject) {
    return /*#__PURE__*/_react.default.createElement("pre", {
      className: classes.dumpText
    }, JSON.stringify(_objectSpread(_objectSpread({}, layoutObject), {}, {
      icon: null,
      ref: null,
      children: null
    }), null, 4));
  })));
});
var _default = MuiDebug;
exports.default = _default;