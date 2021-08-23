"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _Apps = _interopRequireDefault(require("@material-ui/icons/Apps"));

var _AspectRatio = _interopRequireDefault(require("@material-ui/icons/AspectRatio"));

var _BlurOn = _interopRequireDefault(require("@material-ui/icons/BlurOn"));

var _CallSplit = _interopRequireDefault(require("@material-ui/icons/CallSplit"));

var _CancelPresentationOutlined = _interopRequireDefault(require("@material-ui/icons/CancelPresentationOutlined"));

var _ChromeReaderMode = _interopRequireDefault(require("@material-ui/icons/ChromeReaderMode"));

var _Flip = _interopRequireDefault(require("@material-ui/icons/Flip"));

var _ImportExport = _interopRequireDefault(require("@material-ui/icons/ImportExport"));

var _LibraryAddOutlined = _interopRequireDefault(require("@material-ui/icons/LibraryAddOutlined"));

var _MobileScreenShare = _interopRequireDefault(require("@material-ui/icons/MobileScreenShare"));

var _SwapHoriz = _interopRequireDefault(require("@material-ui/icons/SwapHoriz"));

var _Web = _interopRequireDefault(require("@material-ui/icons/Web"));

var _react = _interopRequireWildcard(require("react"));

var _MuiPanelStore = _interopRequireDefault(require("../MuiPanelStore"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: "flex",
      width: "100%",
      // border: '1px solid red',
      height: "100%",
      // backgroundColor: theme.palette.background.paper,
      gridArea: "main",
      position: 'relative'
    },
    groupIcon: {
      // transform: 'rotateZ(90deg)',
      minWidth: theme.spacing(3),
      background: theme.palette.divider,
      borderRadius: '4px',
      padding: '4px 2px',
      color: theme.palette.background.paper
    },
    smallButton: {
      padding: "0px",
      width: theme.spacing(3),
      minWidth: theme.spacing(3),
      lineHeight: '0px'
    },
    selectMode: {
      width: '100%',
      display: 'flex',
      flex: '1 1 auto',
      justifyContent: 'center',
      alignItems: 'center'
    },
    selectIcon: {
      "&:hover": {
        color: "".concat(theme.palette.text.secondary, " !important")
      }
    },
    header: {
      minHeight: "55px",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px",
      alignItems: "center",
      justifyContent: "space-between",
      "&:hover": {
        backgroundColor: theme.palette.augmentColor({
          main: theme.palette.divider
        }).light
      }
    },
    headerCollapsed: {
      minHeight: "8px",
      opacity: "0.5",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px",
      // backgroundColor: theme.palette.background.default,
      alignItems: "center",
      justifyContent: "space-between",
      "&:hover": {
        backgroundColor: theme.palette.augmentColor({
          main: theme.palette.divider
        }).light
      }
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      // backgroundColor: theme.palette.background.paper,
      gridArea: "main",
      position: 'relative'
    },
    wrapperRepeat: {
      boxShadow: 'inset 1px 1px 0px 0px #CCC'
    },
    rootController: {
      position: "absolute",
      left: "50%",
      padding: "8px 16px",
      backgroundColor: theme.palette.background.paper,
      borderRadius: '0px 0px 8px 8px',
      border: "1px solid ".concat(theme.palette.divider),
      zIndex: "1",
      top: "-30px",
      transition: 'top .05s ease-in-out',
      "&:hover": {
        top: "0px",
        transition: 'top .15s ease-in-out'
      }
    },
    groupsBox: {
      gap: "8px"
    },
    title: {
      alignItems: "center",
      display: "flex",
      gap: "8px"
    },
    horizontal: {
      flexDirection: "row"
    },
    vertical: {
      flexDirection: "column"
    },
    zone: {
      // border: '1px solid blue',
      flex: "1 1 auto",
      position: 'relative',
      // width: '0px',
      alignItems: "center",
      justifyContent: "center"
    },
    splitButton: {},
    buttonsWrapper: {
      display: "flex",
      flexDirection: "row",
      gap: "16px",
      flex: "0 0 auto"
    }
  };
});
var MuiSplitter = (0, _styles.withTheme)(function (_ref) {
  var section = _ref.section,
      _ref$isRoot = _ref.isRoot,
      isRoot = _ref$isRoot === void 0 ? false : _ref$isRoot,
      theme = _ref.theme;
  var classes = useStyles(theme);

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      layout = _useContext.layout,
      splitContent = _useContext.splitContent,
      showContent = _useContext.showContent,
      removeZoneFromSection = _useContext.removeZoneFromSection,
      toggleCollapseSection = _useContext.toggleCollapseSection,
      removePanelFromSection = _useContext.removePanelFromSection,
      sections = _useContext.sections,
      addPanelToSection = _useContext.addPanelToSection,
      chooseTypeForSection = _useContext.chooseTypeForSection,
      addZoneToSection = _useContext.addZoneToSection,
      toggleSectionDirection = _useContext.toggleSectionDirection;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(classes.wrapper),
    style: isRoot ? {
      border: "0px none"
    } : {}
  }, section.type === 'content' ? /*#__PURE__*/_react.default.createElement("div", {
    className: classes.rootController
  }, /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    title: "Divide the interface into panels",
    arrow: true,
    placement: "bottom"
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    className: classes.smallButton,
    onClick: function onClick() {
      return splitContent({
        sectionId: section.id
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_Flip.default, null)))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    title: "Double-Click to collapse",
    arrow: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: section.isCollapsed ? classes.headerCollapsed : classes.header,
    onDoubleClick: function onDoubleClick() {
      return toggleCollapseSection({
        sectionId: section.id
      });
    },
    style: isRoot ? {
      border: "0px none",
      backgroundColor: theme.palette.background.paper
    } : section.isCollapsed ? {
      backgroundColor: section.background
    } : {
      borderBottom: "4px solid ".concat(section.background)
    }
  }, !section.isCollapsed && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, !isRoot && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, section.type === 'list' && /*#__PURE__*/_react.default.createElement(_Apps.default, {
    color: "action"
  }), section.type === 'panel' && /*#__PURE__*/_react.default.createElement(_ChromeReaderMode.default, {
    color: "disabled"
  }), section.type === 'content' && /*#__PURE__*/_react.default.createElement(_BlurOn.default, {
    color: "disabled"
  }), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    style: {
      fontWeight: 'bold'
    },
    color: "textPrimary",
    variant: "subtitle2"
  }, section.type === 'list' && 'Add sub-sections ...', section.type === 'panel' && 'Select panel ...', section.type === 'content' && 'Main content'))), /*#__PURE__*/_react.default.createElement(_core.Box, {
    alignItems: "center",
    display: "flex",
    className: classes.buttonsWrapper
  }, section.type === 'list' && /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    arrow: true,
    title: "Current orientation",
    placement: "bottom"
  }, section.direction !== 'vertical' ? /*#__PURE__*/_react.default.createElement(_SwapHoriz.default, {
    className: classes.groupIcon,
    style: {
      fontSize: '16px',
      color: theme.palette.background.default
    }
  }) : /*#__PURE__*/_react.default.createElement(_ImportExport.default, {
    className: classes.groupIcon,
    style: {
      fontSize: '16px',
      color: theme.palette.background.default
    }
  })), section.type === 'list' && /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    arrow: true,
    title: "Switch to ".concat(section.direction === 'vertical' ? 'columns' : 'rows')
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    disableRipple: true,
    disableElevation: true,
    className: classes.smallButton,
    onClick: function onClick() {
      return toggleSectionDirection({
        sectionId: section.id
      });
    }
  }, section.direction !== 'vertical' ? /*#__PURE__*/_react.default.createElement(_SwapHoriz.default, {
    color: "action"
  }) : /*#__PURE__*/_react.default.createElement(_ImportExport.default, {
    color: "action"
  }))), section.type === 'list' && /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    arrow: true,
    title: "Add a new section..."
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    disableRipple: true,
    disableElevation: true,
    onClick: function onClick() {
      return addZoneToSection({
        sectionId: section.id
      });
    },
    className: classes.smallButton
  }, /*#__PURE__*/_react.default.createElement(_LibraryAddOutlined.default, {
    color: "action"
  }))), section.type === 'list' && section.zones.length === 0 && /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return chooseTypeForSection({
        panelId: section.id,
        isList: false
      });
    },
    className: classes.splitButton
  }, /*#__PURE__*/_react.default.createElement(_Apps.default, null)), section.type === 'panel' && /*#__PURE__*/_react.default.createElement(_core.Box, {
    key: "selectOptions_".concat(section.id),
    display: "flex",
    alignItems: "center",
    className: classes.buttonsWrapper
  }, /*#__PURE__*/_react.default.createElement(_core.Select, {
    fullWidth: true,
    value: section.panelId || '',
    onChange: function onChange(event) {
      addPanelToSection({
        sectionId: section.id,
        panelId: event.target.value
      });
    }
  }, layout.filter(function (lo) {
    return !lo.noPanel;
  }).map(function (lo) {
    return /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
      key: "".concat(section.id, "_").concat(lo.uniqueId),
      value: lo.uniqueId
    }, /*#__PURE__*/_react.default.createElement(_core.Box, {
      display: "flex",
      alignItems: "center",
      className: classes.groupsBox
    }, lo.icon && /*#__PURE__*/(0, _react.cloneElement)(lo.icon, {
      color: "disabled"
    }), /*#__PURE__*/_react.default.createElement(_core.Typography, {
      variant: "caption",
      color: "textSecondary"
    }, lo.title)));
  })), section.panelId !== undefined && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_MobileScreenShare.default, {
    onClick: function onClick() {
      removePanelFromSection({
        sectionId: section.id,
        panelId: section.panelId
      });
    },
    color: "action"
  })), /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return chooseTypeForSection({
        panelId: section.id,
        isList: true
      });
    },
    className: classes.splitButton
  }, /*#__PURE__*/_react.default.createElement(_Web.default, null))), section.type !== 'content' ? /*#__PURE__*/_react.default.createElement(_core.Button, {
    className: classes.smallButton,
    onClick: function onClick() {
      showContent({
        sectionId: section.id
      });
    },
    disabled: section.type === 'content'
  }, /*#__PURE__*/_react.default.createElement(_AspectRatio.default, null)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Button, {
    className: classes.smallButton,
    onClick: function onClick() {
      return chooseTypeForSection({
        panelId: section.id,
        isList: true
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_Apps.default, {
    color: section.type !== 'list' ? 'disabled' : 'primary'
  }))), section.type !== 'content' && /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    arrow: true,
    title: "Remove section"
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_core.Button, {
    disabled: section.type === 'list' && section.zones.length > 0,
    onClick: function onClick() {
      removeZoneFromSection({
        sectionId: section.id
      });
    },
    className: classes.smallButton
  }, /*#__PURE__*/_react.default.createElement(_CancelPresentationOutlined.default, null))))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "\n        ".concat(classes.root, "\n        ").concat(section.direction === 'horizontal' ? classes.horizontal : classes.vertical, "\n      ")
  }, (section.type === 'list' && section.zones.length === 0 || section.type === 'panel' && !section.panelId) && /*#__PURE__*/_react.default.createElement("div", {
    className: classes.selectMode
  }, /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    title: "Select a mode to continue...",
    arrow: true
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    alignItems: "center",
    style: {
      gap: '8px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return chooseTypeForSection({
        panelId: section.id,
        isList: true
      });
    },
    className: classes.splitButton
  }, /*#__PURE__*/_react.default.createElement(_Apps.default, {
    style: {
      fontSize: 48
    },
    color: section.type !== 'list' ? 'disabled' : 'primary'
  })), /*#__PURE__*/_react.default.createElement(_CallSplit.default, {
    color: "disabled"
  }), /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return chooseTypeForSection({
        panelId: section.id,
        isList: false
      });
    },
    className: classes.splitButton
  }, /*#__PURE__*/_react.default.createElement(_Web.default, {
    style: {
      fontSize: 48
    },
    color: section.type !== 'list' ? 'primary' : 'disabled'
  }))))), section.type === 'panel' && section.panelId && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      height: '100%'
    },
    id: "".concat(section.panelId, "-section")
  })), section.type === 'content' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'stretch',
      alignItems: "stretch"
    },
    id: "content-section"
  })), section.type === 'list' && section.zones && section.zones.map(function (zone) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(classes.zone, " ").concat(isRoot ? classes.wrapperRepeat : null),
      style: section.direction === 'horizontal' ? {
        width: '0px'
      } : {}
    }, /*#__PURE__*/_react.default.createElement(MuiSplitter, {
      section: sections.find(function (s) {
        return s.id === zone;
      })
    }));
  })));
});
var _default = MuiSplitter;
exports.default = _default;