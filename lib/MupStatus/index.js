"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

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

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      "&:hover": {
        cursor: "pointer !important",
        backgroundColor: "".concat(theme.palette.augmentColor({
          main: theme.palette.divider
        }).dark, " !important")
      }
    }
  };
});
var MupStatus = (0, _styles.withTheme)(function (_ref) {
  var id = _ref.id,
      side = _ref.side,
      focusOnClick = _ref.focusOnClick,
      _onClick = _ref.onClick,
      theme = _ref.theme,
      requestAttention = _ref.requestAttention,
      tooltip = _ref.tooltip,
      elements = _ref.elements;

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      status = _useContext.status,
      handleSetVisible = _useContext.handleSetVisible,
      handleStatusAnnouncement = _useContext.handleStatusAnnouncement;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      statusObject = _useState2[0],
      setStatusObject = _useState2[1];

  var classes = useStyles(theme);
  (0, _react.useEffect)(function () {
    !id ? console.error("MupStatus: missing attr:id for status element") : handleStatusAnnouncement({
      id: id,
      elements: elements,
      side: side,
      tooltip: tooltip
    });
  }, [id, elements, side, tooltip]);
  (0, _react.useEffect)(function () {
    var findObject = status.find(function (lo) {
      return lo.uniqueId === id;
    });

    if (findObject) {
      setStatusObject(findObject);
    }
  }, [status, id]);
  return statusObject && !!id ? /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    title: tooltip,
    placement: "top",
    arrow: true
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    onClick: function onClick() {
      return focusOnClick ? handleSetVisible({
        uniqueId: focusOnClick
      }) : _onClick && _onClick();
    },
    display: "flex",
    className: focusOnClick || _onClick ? classes.root : '',
    alignItems: "center",
    style: {
      gap: '16px',
      cursor: 'default',
      padding: '3px 6px',
      backgroundColor: requestAttention ? theme.palette.secondary.main : 'transparent'
    }
  }, elements.map(function (element) {
    return /*#__PURE__*/_react.default.createElement(_core.Box, {
      display: "flex",
      key: element.text,
      alignItems: "center",
      style: {
        gap: '6px'
      }
    }, element.icon && /*#__PURE__*/(0, _react.cloneElement)(element.icon, {
      color: "action",
      style: {
        fontSize: 20
      }
    }), /*#__PURE__*/_react.default.createElement(_core.Typography, {
      variant: "subtitle2",
      color: "textPrimary"
    }, element.text));
  }))), document.getElementById("material-ui-panel-statusBar-".concat(side))) : null;
});
MupStatus.defaultProps = {
  side: 'left',
  onClick: null,
  requestAttention: false,
  tooltip: '',
  elements: []
};
MupStatus.propTypes = {
  id: _propTypes.default.string,
  side: _propTypes.default.oneOf(['left', 'right']),
  focusOnClick: _propTypes.default.string,
  onClick: _propTypes.default.func,
  requestAttention: _propTypes.default.bool,
  tooltip: _propTypes.default.string,
  elements: _propTypes.default.arrayOf(_propTypes.default.shape({
    icon: _propTypes.default.node,
    text: _propTypes.default.string
  }))
};
var _default = MupStatus;
exports.default = _default;