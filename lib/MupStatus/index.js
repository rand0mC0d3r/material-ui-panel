"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _reactDom = require("react-dom");

var _MuiPanelStore = _interopRequireDefault(require("../MuiPanelStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    default: {
      padding: '4px',
      height: '24px'
    },
    root: {
      '&:hover': {
        backgroundColor: "".concat(theme.palette.augmentColor({
          main: theme.palette.divider
        }).light, " !important")
      }
    }
  };
});

var MupStatus = function MupStatus(_ref) {
  var id = _ref.id,
      asMenu = _ref.asMenu,
      side = _ref.side,
      minWidth = _ref.minWidth,
      focusOnClick = _ref.focusOnClick,
      _onClick = _ref.onClick,
      _onContextMenu = _ref.onContextMenu,
      requestAttention = _ref.requestAttention,
      tooltip = _ref.tooltip,
      elements = _ref.elements;

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      status = _useContext.status,
      settings = _useContext.settings,
      handleSetVisible = _useContext.handleSetVisible,
      handleStatusAnnouncement = _useContext.handleStatusAnnouncement;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      statusObject = _useState2[0],
      setStatusObject = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      anchorEl = _useState4[0],
      setAnchorEl = _useState4[1];

  var theme = (0, _styles.useTheme)();
  var classes = useStyles(theme);
  var open = Boolean(anchorEl);

  var onClose = function onClose() {
    return setAnchorEl(null);
  };

  var callbackOnClick = (0, _react.useCallback)(function (e) {
    _onClick(e);
  }, [_onClick]);
  var callbackHandleStatusAnnouncement = (0, _react.useCallback)(function (id) {
    handleStatusAnnouncement({
      id: id,
      elements: elements,
      side: side,
      tooltip: tooltip
    });
  }, [side, tooltip, elements, handleStatusAnnouncement]);
  (0, _react.useEffect)(function () {
    if (id && statusObject === null && !status.some(function (item) {
      return item.uniqueId === id;
    })) {
      callbackHandleStatusAnnouncement(id);
    }
  }, [id, statusObject, status, callbackHandleStatusAnnouncement]);
  (0, _react.useEffect)(function () {
    if (statusObject === null && status.some(function (item) {
      return item.uniqueId === id;
    })) {
      setStatusObject(status.find(function (item) {
        return item.uniqueId === id;
      }).uniqueId);
    }
  }, [status, id, statusObject]);
  return statusObject !== null && !!id && document.getElementById("material-ui-panel-statusBar-".concat(side)) ? /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_core.Tooltip, {
    title: tooltip,
    disableFocusListener: tooltip === '',
    disableHoverListener: tooltip === '',
    disableTouchListener: tooltip === '',
    arrow: true
  }, /*#__PURE__*/React.createElement(_core.Box, {
    key: "MupStatus_".concat(id, "_wrapper"),
    onClick: function onClick(e) {
      return focusOnClick ? handleSetVisible({
        uniqueId: focusOnClick
      }) : asMenu ? setAnchorEl(e.currentTarget) : _onClick ? callbackOnClick(e) : null;
    },
    onContextMenu: function onContextMenu(e) {
      return settings.allowRightClick ? _onContextMenu ? _onContextMenu(e) : null : e.preventDefault();
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    className: "".concat(classes.default, " ").concat(focusOnClick || _onClick || asMenu ? classes.root : ''),
    style: {
      minWidth: minWidth || 'auto',
      gap: '16px',
      cursor: focusOnClick || !!_onClick || asMenu ? 'pointer' : 'initial',
      backgroundColor: requestAttention ? theme.palette.secondary.main : 'transparent'
    }
  }, elements.map(function (element) {
    return /*#__PURE__*/React.createElement(_core.Box, {
      display: "flex",
      alignItems: "center",
      key: "MupStatus_".concat(element.text, "_container"),
      style: {
        gap: '6px'
      }
    }, element.icon && /*#__PURE__*/React.createElement(_core.SvgIcon, {
      style: {
        fontSize: 20
      },
      color: "action"
    }, element.icon), element.image && /*#__PURE__*/React.createElement("img", {
      alt: "injected element",
      style: {
        width: '20px',
        height: '20px',
        borderRadius: element.mask ? '50%' : '0px'
      },
      src: element.image
    }), element.text && /*#__PURE__*/React.createElement(_core.Typography, {
      variant: "subtitle2",
      color: "textPrimary",
      style: {
        lineHeight: '0px',
        whiteSpace: 'nowrap',
        userSelect: 'none'
      }
    }, element.text));
  }))), asMenu && /*#__PURE__*/React.createElement(_core.Popover, {
    open: open,
    anchorEl: anchorEl,
    onClose: onClose,
    anchorOrigin: {
      vertical: settings.upperBar ? 'bottom' : 'top',
      horizontal: 'left'
    },
    transformOrigin: {
      vertical: !settings.upperBar ? 'bottom' : 'top',
      horizontal: 'left'
    }
  }, asMenu)), document.getElementById("material-ui-panel-statusBar-".concat(side))) : null;
};

MupStatus.defaultProps = {
  side: 'left',
  requestAttention: false,
  tooltip: '',
  elements: [],
  asButton: false
};
MupStatus.propTypes = {
  id: _propTypes.default.string.isRequired,
  side: _propTypes.default.oneOf(['left', 'right']),
  focusOnClick: _propTypes.default.string,
  asMenu: _propTypes.default.any,
  minWidth: _propTypes.default.number,
  onClick: _propTypes.default.func,
  onContextMenu: _propTypes.default.func,
  requestAttention: _propTypes.default.bool,
  tooltip: _propTypes.default.string,
  elements: _propTypes.default.arrayOf(_propTypes.default.shape({
    icon: _propTypes.default.node,
    image: _propTypes.default.node,
    text: _propTypes.default.string
  })).isRequired
};
var _default = MupStatus;
exports.default = _default;