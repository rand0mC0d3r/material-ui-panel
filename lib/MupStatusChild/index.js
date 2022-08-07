"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    box: {
      gap: '4px',
      color: theme.palette.action
    },
    svg: {
      fontSize: 20
    },
    typography: {
      lineHeight: '0px',
      whiteSpace: 'nowrap',
      userSelect: 'none'
    },
    image: {
      width: '20px',
      height: '20px'
    }
  };
});

var MupStatusChild = function MupStatusChild(_ref) {
  var icon = _ref.icon,
      text = _ref.text,
      textStyle = _ref.textStyle,
      image = _ref.image,
      mask = _ref.mask;
  var theme = (0, _styles.useTheme)();
  var classes = useStyles(theme);
  return /*#__PURE__*/React.createElement(_core.Box, {
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
    className: classes.box
  }, icon && /*#__PURE__*/React.createElement(_core.SvgIcon, {
    className: classes.svg,
    color: "action"
  }, icon), text && /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "subtitle2",
    color: "textPrimary",
    className: classes.typography,
    style: _objectSpread({}, textStyle)
  }, text), image && /*#__PURE__*/React.createElement("img", {
    alt: "injected element",
    className: classes.image,
    style: {
      borderRadius: mask ? '50%' : '0px'
    },
    src: image
  }));
};

var _default = MupStatusChild;
exports.default = _default;