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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      position: 'absolute',
      border: "3px dotted ".concat(theme.palette.divider),
      borderRadius: '8px',
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      backdropFilter: 'blur(5px)',
      padding: '8px',
      left: '30%',
      right: '30%',
      top: '100px',
      height: '850px',
      overflow: 'auto'
    },
    dumpText: {
      color: theme.palette.text.primary
    },
    header: {
      backgroundColor: theme.palette.background.paper,
      padding: '8px',
      marginBottom: '8px',
      border: "1px solid ".concat(theme.palette.divider),
      borderRadius: '4px',
      cursor: 'pointer'
    }
  };
});

var MupDebug = function MupDebug() {
  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      settings = _useContext.settings,
      status = _useContext.status,
      sections = _useContext.sections,
      layout = _useContext.layout;

  var _useState = (0, _react.useState)([{
    title: 'Sections',
    collapsed: true
  }, {
    title: 'Layout',
    collapsed: false
  }, {
    title: 'Status',
    collapsed: true
  }, {
    title: 'Settings',
    collapsed: true
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      dumps = _useState2[0],
      setDumps = _useState2[1];

  var theme = (0, _styles.useTheme)();
  var classes = useStyles(theme);
  (0, _react.useEffect)(function () {
    setDumps(function (dumps) {
      return dumps.map(function (d) {
        if (d.title === 'Sections') {
          return _objectSpread(_objectSpread({}, d), {}, {
            dataSource: sections.map(function (obj) {
              return /*#__PURE__*/React.createElement("pre", {
                key: "section_".concat(obj.uniqueId),
                className: classes.dumpText
              }, JSON.stringify(_objectSpread({}, obj), null, 4));
            })
          });
        }

        return d;
      });
    });
  }, [sections, classes.dumpText]);
  (0, _react.useEffect)(function () {
    setDumps(function (dumps) {
      return dumps.map(function (d) {
        if (d.title === 'Layout') {
          return _objectSpread(_objectSpread({}, d), {}, {
            dataSource: layout.map(function (obj) {
              return /*#__PURE__*/React.createElement("pre", {
                key: "layout_".concat(obj.uniqueId),
                className: classes.dumpText
              }, JSON.stringify(_objectSpread(_objectSpread({}, obj), {}, {
                icon: null,
                ref: null,
                children: null
              }), null, 4));
            })
          });
        }

        return d;
      });
    });
  }, [layout, classes.dumpText]);
  (0, _react.useEffect)(function () {
    setDumps(function (dumps) {
      return dumps.map(function (d) {
        if (d.title === 'Settings') {
          return _objectSpread(_objectSpread({}, d), {}, {
            dataSource: Object.entries(settings).map(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  val = _ref2[1];

              return /*#__PURE__*/React.createElement("pre", {
                key: "settings_".concat(key),
                className: classes.dumpText
              }, key, ": ", JSON.stringify(val));
            })
          });
        }

        return d;
      });
    });
  }, [settings, classes.dumpText]);
  (0, _react.useEffect)(function () {
    setDumps(function (dumps) {
      return dumps.map(function (d) {
        if (d.title === 'Status') {
          return _objectSpread(_objectSpread({}, d), {}, {
            dataSource: status.map(function (obj) {
              return /*#__PURE__*/React.createElement("pre", {
                key: "settings_".concat(obj.uniqueId),
                className: classes.dumpText
              }, JSON.stringify(_objectSpread(_objectSpread({}, obj), {}, {
                elements: null
              }), null, 4));
            })
          });
        }

        return d;
      });
    });
  }, [status, classes.dumpText]);

  var toggleDumpCollapse = function toggleDumpCollapse(title) {
    setDumps(function (dumps) {
      return dumps.map(function (dump) {
        if (dump.title === title) dump.collapsed = !dump.collapsed;
        return dump;
      });
    });
  };

  return settings.debugMode ? /*#__PURE__*/React.createElement("div", {
    key: "MupDebug",
    className: classes.root
  }, dumps.map(function (dump) {
    return /*#__PURE__*/React.createElement(_react.Fragment, {
      key: dump.title
    }, /*#__PURE__*/React.createElement(_core.Typography, {
      className: classes.header,
      color: "textPrimary",
      onClick: function onClick() {
        return toggleDumpCollapse(dump.title);
      },
      variant: "h6"
    }, dump.title), !dump.collapsed && dump.dataSource);
  })) : null;
};

var _default = MupDebug;
exports.default = _default;