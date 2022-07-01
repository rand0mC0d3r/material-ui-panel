"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _react = require("react");

var _MuiPanelStore = _interopRequireDefault(require("../../MuiPanelStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    statusBar: {
      padding: '0px 8px',
      gap: '8px',
      height: '32px',
      backgroundColor: theme.palette.type === 'light' ? theme.palette.augmentColor({
        main: theme.palette.divider
      }).dark : theme.palette.background.paper,
      color: "".concat(theme.palette.background.default, " !important")
    },
    statusBarHalf: {
      overflow: 'scroll',
      scrollSnapType: 'both mandatory',
      gap: '8px',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    statusBarHalfSecondary: {
      overflow: 'hidden',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      scrollSnapType: 'both mandatory',
      gap: '0px 8px',
      flex: '1 1 auto',
      width: '0px',
      minWidth: '100px',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    }
  };
});
var availableSides = ['left', 'right'];

var _default = function _default(_ref) {
  var style = _ref.style,
      className = _ref.className;
  var theme = (0, _styles.useTheme)();

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      status = _useContext.status,
      settings = _useContext.settings;

  var classes = useStyles(theme);
  return /*#__PURE__*/React.createElement(React.Fragment, null, status.length > 0 && /*#__PURE__*/React.createElement(_core.Box, {
    id: "material-ui-panel-statusBar-wrapper",
    onContextMenu: function onContextMenu(e) {
      e.preventDefault();
    },
    display: "flex",
    className: [classes.statusBar, className].filter(function (e) {
      return !!e;
    }).join(' '),
    justifyContent: "space-between",
    style: _objectSpread(_objectSpread({}, style), {}, {
      borderBottom: settings.upperBar ? "1px solid ".concat(theme.palette.divider) : 'none',
      borderTop: !settings.upperBar ? "1px solid ".concat(theme.palette.divider) : 'none'
    })
  }, availableSides.map(function (side) {
    return /*#__PURE__*/React.createElement(_core.Box, {
      id: "material-ui-panel-statusBar-".concat(side),
      key: "".concat(side, "_status"),
      display: "flex",
      justifyContent: side === 'left' ? 'flex-start' : 'flex-end',
      className: side === 'left' ? classes.statusBarHalf : classes.statusBarHalfSecondary
    });
  })));
};

exports.default = _default;