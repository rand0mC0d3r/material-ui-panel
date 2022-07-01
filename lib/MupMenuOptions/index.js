"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _styles = require("@material-ui/core/styles");

var _AddToHomeScreen = _interopRequireDefault(require("@material-ui/icons/AddToHomeScreen"));

var _AmpStories = _interopRequireDefault(require("@material-ui/icons/AmpStories"));

var _SwapHoriz = _interopRequireDefault(require("@material-ui/icons/SwapHoriz"));

var _ViewStream = _interopRequireDefault(require("@material-ui/icons/ViewStream"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _MuiPanelStore = _interopRequireDefault(require("../MuiPanelStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    popover: {
      '& .MuiPopover-paper': {
        border: "1px solid ".concat(theme.palette.divider)
      }
    }
  };
});

var MupMenuOptions = function MupMenuOptions(_ref) {
  var lo = _ref.lo,
      anchorEl = _ref.anchorEl,
      setAnchorEl = _ref.setAnchorEl,
      side = _ref.side,
      underMenu = _ref.underMenu;

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      layout = _useContext.layout,
      handleSetAsEmbedded = _useContext.handleSetAsEmbedded,
      handleSetAsGroup = _useContext.handleSetAsGroup,
      handleUnSetAsEmbedded = _useContext.handleUnSetAsEmbedded,
      handleSetSide = _useContext.handleSetSide;

  var open = Boolean(anchorEl);
  var theme = (0, _styles.useTheme)();
  var classes = useStyles(theme);

  var onClose = function onClose() {
    setAnchorEl(null);
  };

  return /*#__PURE__*/React.createElement(_Popover.default, {
    className: classes.popover,
    marginThreshold: 0,
    elevation: 0,
    open: open,
    anchorEl: anchorEl,
    onClose: onClose,
    anchorOrigin: underMenu ? {
      vertical: 'bottom',
      horizontal: 'center'
    } : {
      vertical: 'center',
      horizontal: side !== 'right' ? 'right' : 'left'
    },
    transformOrigin: underMenu ? {
      vertical: 'top',
      horizontal: 'center'
    } : {
      vertical: 'center',
      horizontal: side !== 'right' ? 'left' : 'right'
    }
  }, /*#__PURE__*/React.createElement(_core.Box, {
    style: {
      gap: theme.spacing(1),
      padding: theme.spacing(1)
    },
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }, !lo.asEmbedded && /*#__PURE__*/React.createElement(_core.Tooltip, {
    arrow: true,
    title: "Swap sides"
  }, /*#__PURE__*/React.createElement(_SwapHoriz.default, {
    onClick: function onClick() {
      return handleSetSide({
        uniqueId: lo.uniqueId
      });
    },
    style: {
      fontSize: 20
    }
  })), !lo.noPanel && /*#__PURE__*/React.createElement(React.Fragment, null, !lo.asEmbedded ? /*#__PURE__*/React.createElement(React.Fragment, null, lo.asGroup ? /*#__PURE__*/React.createElement(_ViewStream.default, {
    onClick: function onClick() {
      return handleSetAsGroup({
        uniqueId: lo.uniqueId
      });
    }
  }) : /*#__PURE__*/React.createElement(_core.Tooltip, {
    arrow: true,
    title: "Promote as group"
  }, /*#__PURE__*/React.createElement(_AmpStories.default, {
    style: {
      transform: 'rotateZ(90deg)'
    },
    onClick: function onClick() {
      return handleSetAsGroup({
        uniqueId: lo.uniqueId
      });
    }
  }))) : /*#__PURE__*/React.createElement(_core.Tooltip, {
    arrow: true,
    title: "Detach as individual"
  }, /*#__PURE__*/React.createElement(_AddToHomeScreen.default, {
    onClick: function onClick() {
      return handleUnSetAsEmbedded({
        uniqueId: lo.uniqueId
      });
    }
  })), !lo.asEmbedded && !lo.asGroup && /*#__PURE__*/React.createElement(_core.Select, {
    fullWidth: true,
    disabled: lo.asGroup || !layout.some(function (lo) {
      return lo.asGroup;
    }),
    onChange: function onChange(event) {
      handleSetAsEmbedded({
        uniqueId: lo.uniqueId,
        parentId: event.target.value
      });
    }
  }, layout.filter(function (lo) {
    return lo.asGroup;
  }).map(function (lo) {
    return /*#__PURE__*/React.createElement(_MenuItem.default, {
      value: lo.uniqueId
    }, /*#__PURE__*/React.createElement(_core.Box, {
      display: "flex",
      alignItems: "center",
      style: {
        gap: theme.spacing(14),
        alignItems: 'center'
      }
    }, lo.icon, /*#__PURE__*/React.createElement(_core.Typography, {
      variant: "caption",
      color: "textSecondary"
    }, lo.title)));
  })))));
};

MupMenuOptions.defaultProps = {
  underMenu: false
};
MupMenuOptions.propTypes = {
  lo: _propTypes.default.object.isRequired,
  anchorEl: _propTypes.default.object,
  setAnchorEl: _propTypes.default.func.isRequired,
  side: _propTypes.default.string.isRequired,
  underMenu: _propTypes.default.bool
};
var _default = MupMenuOptions;
exports.default = _default;