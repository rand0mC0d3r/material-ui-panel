"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _styles = require("@material-ui/core/styles");

var _Apps = _interopRequireDefault(require("@material-ui/icons/Apps"));

var _BlurOn = _interopRequireDefault(require("@material-ui/icons/BlurOn"));

var _ChromeReaderMode = _interopRequireDefault(require("@material-ui/icons/ChromeReaderMode"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _Http = _interopRequireDefault(require("@material-ui/icons/Http"));

var _ImportExport = _interopRequireDefault(require("@material-ui/icons/ImportExport"));

var _Laptop = _interopRequireDefault(require("@material-ui/icons/Laptop"));

var _LibraryAddOutlined = _interopRequireDefault(require("@material-ui/icons/LibraryAddOutlined"));

var _MobileScreenShare = _interopRequireDefault(require("@material-ui/icons/MobileScreenShare"));

var _SwapHoriz = _interopRequireDefault(require("@material-ui/icons/SwapHoriz"));

var _Web = _interopRequireDefault(require("@material-ui/icons/Web"));

var _WebAsset = _interopRequireDefault(require("@material-ui/icons/WebAsset"));

var _react = require("react");

var _MuiPanelStore = _interopRequireDefault(require("../MuiPanelStore"));

var _MupSectionsSplitter = _interopRequireDefault(require("./MupSectionsSplitter"));

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
      display: 'flex',
      width: '100%',
      // border: '1px solid red',
      height: '100%',
      // backgroundColor: theme.palette.background.paper,
      gridArea: 'main',
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
      padding: '0px',
      width: theme.spacing(4),
      minWidth: theme.spacing(4),
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
      '&:hover': {
        color: "".concat(theme.palette.text.secondary, " !important")
      }
    },
    header: {
      minHeight: '55px',
      display: 'flex',
      flexDirection: 'row',
      padding: '0px 12px',
      alignItems: 'center',
      gap: '24px',
      justifyContent: 'space-between',
      '&:hover': {
        backgroundColor: theme.palette.augmentColor({
          main: theme.palette.divider
        }).light
      }
    },
    headerCollapsed: {
      minHeight: '8px',
      opacity: '0.5',
      display: 'flex',
      flexDirection: 'row',
      padding: '0px 12px',
      // backgroundColor: theme.palette.background.default,
      alignItems: 'center',
      justifyContent: 'space-between',
      '&:hover': {
        backgroundColor: theme.palette.augmentColor({
          main: theme.palette.divider
        }).light
      }
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      // backgroundColor: theme.palette.background.paper,
      gridArea: 'main',
      position: 'relative'
    },
    wrapperRepeat: {// boxShadow: 'inset 1px 1px 0px 0px #CCC',
    },
    rootWrapper: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    },
    rootController: {
      position: 'absolute',
      padding: '0px 0px',
      paddingTop: '48px',
      top: '-74px',
      backgroundColor: "".concat(theme.palette.background.paper, "a"),
      borderRadius: '4px',
      backdropFilter: 'blur(3px)',
      boxShadow: "0px 0px 1px 1px ".concat(theme.palette.divider),
      zIndex: '1',
      '&:hover': {
        top: '-48px',
        boxShadow: "0 1px 6px 1px ".concat(theme.palette.divider),
        transition: 'all .35s ease-in-out'
      }
    },
    iframePanel: {
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    groupsBox: {
      gap: '8px'
    },
    title: {
      alignItems: 'center',
      display: 'flex',
      // gap: '8px',
      flex: '1 1 auto'
    },
    horizontal: {
      flexDirection: 'row'
    },
    vertical: {
      flexDirection: 'column'
    },
    zone: {
      // border: '1px solid blue',
      flex: '1 1 auto',
      position: 'relative',
      // width: '0px',
      alignItems: 'center',
      justifyContent: 'center'
    },
    splitButton: {},
    buttonsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      gap: '16px',
      flex: '0 0 auto'
    }
  };
});

var MuiSplitter = function MuiSplitter(_ref) {
  var section = _ref.section,
      _ref$isRoot = _ref.isRoot,
      isRoot = _ref$isRoot === void 0 ? false : _ref$isRoot,
      _ref$showSplitterButt = _ref.showSplitterButton,
      showSplitterButton = _ref$showSplitterButt === void 0 ? true : _ref$showSplitterButt;
  var theme = (0, _styles.useTheme)();
  var classes = useStyles(theme);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      layoutObject = _useState2[0],
      setLayoutObject = _useState2[1];

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      layout = _useContext.layout,
      splitContentNg = _useContext.splitContentNg,
      setSectionUrl = _useContext.setSectionUrl,
      showContent = _useContext.showContent,
      removeZoneFromSection = _useContext.removeZoneFromSection,
      toggleCollapseSection = _useContext.toggleCollapseSection,
      removePanelFromSection = _useContext.removePanelFromSection,
      sections = _useContext.sections,
      addPanelToSection = _useContext.addPanelToSection,
      chooseTypeForSection = _useContext.chooseTypeForSection,
      addZoneToSection = _useContext.addZoneToSection,
      toggleSectionDirection = _useContext.toggleSectionDirection;

  (0, _react.useEffect)(function () {
    if (section.type === 'panel') {
      var findLayoutObject = layout.find(function (l) {
        return l.uniqueId === section.panelId;
      });
      setLayoutObject(findLayoutObject);
    }
  }, [section]);
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.wrapper),
    style: isRoot ? {
      border: '0px none'
    } : {}
  }, section.type === 'content' ? /*#__PURE__*/React.createElement("div", {
    className: classes.rootWrapper,
    style: sections.length === 1 ? {} : {}
  }, showSplitterButton && /*#__PURE__*/React.createElement("div", {
    className: classes.rootController
  }, /*#__PURE__*/React.createElement(_MupSectionsSplitter.default, {
    createSection: function createSection(_ref2) {
      var type = _ref2.type,
          index = _ref2.index,
          count = _ref2.count;
      return splitContentNg({
        sectionId: section.id,
        type: type,
        index: index,
        count: count
      });
    }
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_core.Tooltip, {
    title: "Double-Click to collapse",
    arrow: true
  }, /*#__PURE__*/React.createElement("div", {
    className: section.isCollapsed ? classes.headerCollapsed : classes.header,
    onDoubleClick: function onDoubleClick() {
      return toggleCollapseSection({
        sectionId: section.id
      });
    },
    style: isRoot ? {
      borderBottom: "1px solid ".concat(theme.palette.divider),
      backgroundColor: theme.palette.background.default,
      zIndex: '5'
    } : section.isCollapsed ? {
      backgroundColor: section.background
    } : {
      borderBottom: "3px solid ".concat(section.background)
    }
  }, !section.isCollapsed && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, !isRoot && /*#__PURE__*/React.createElement(React.Fragment, null, section.type === 'list' && /*#__PURE__*/React.createElement(_Apps.default, {
    color: "action"
  }), section.type === 'panel' && /*#__PURE__*/React.createElement(_ChromeReaderMode.default, {
    color: "disabled"
  }), section.type === 'content' && /*#__PURE__*/React.createElement(_BlurOn.default, {
    color: "disabled"
  }), /*#__PURE__*/React.createElement(_core.Typography, {
    style: (layoutObject === null || layoutObject === void 0 ? void 0 : layoutObject.title) && {
      fontWeight: 'bold'
    },
    color: layoutObject !== null && layoutObject !== void 0 && layoutObject.title ? 'textPrimary' : 'textSecondary',
    variant: "subtitle2"
  }, section.type === 'list' && 'Add sub-sections ...', section.type === 'panel' && ((layoutObject === null || layoutObject === void 0 ? void 0 : layoutObject.title) || 'Waiting for selection...'), section.type === 'content' && 'Main content')), section.type === 'web' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_core.TextField, {
    size: "small",
    variant: "outlined",
    fullWidth: true,
    autoFocus: true,
    value: section.url || '',
    style: {
      flex: '1 1 auto'
    },
    placeholder: "http://target.url/...",
    InputProps: {
      startAdornment: /*#__PURE__*/React.createElement(_InputAdornment.default, {
        position: "start"
      }, /*#__PURE__*/React.createElement(_Http.default, null))
    },
    onChange: function onChange(event) {
      return setSectionUrl({
        sectionId: section.uniqueId,
        url: event.target.value
      });
    }
  }))), /*#__PURE__*/React.createElement(_core.Box, {
    alignItems: "center",
    display: "flex",
    className: classes.buttonsWrapper
  }, section.type === 'list' && /*#__PURE__*/React.createElement(_core.Tooltip, {
    arrow: true,
    title: "Current orientation",
    placement: "bottom"
  }, section.direction !== 'vertical' ? /*#__PURE__*/React.createElement(_SwapHoriz.default, {
    className: classes.groupIcon,
    style: {
      fontSize: '16px',
      color: theme.palette.background.default
    }
  }) : /*#__PURE__*/React.createElement(_ImportExport.default, {
    className: classes.groupIcon,
    style: {
      fontSize: '16px',
      color: theme.palette.background.default
    }
  })), section.type === 'list' && /*#__PURE__*/React.createElement(_core.Tooltip, {
    arrow: true,
    title: "Switch to ".concat(section.direction === 'vertical' ? 'columns' : 'rows')
  }, /*#__PURE__*/React.createElement(_core.Button, {
    disableRipple: true,
    disableElevation: true,
    className: classes.smallButton,
    onClick: function onClick() {
      return toggleSectionDirection({
        sectionId: section.id
      });
    }
  }, section.direction !== 'vertical' ? /*#__PURE__*/React.createElement(_SwapHoriz.default, {
    color: "action"
  }) : /*#__PURE__*/React.createElement(_ImportExport.default, {
    color: "action"
  }))), section.type === 'list' && /*#__PURE__*/React.createElement(_core.Tooltip, {
    arrow: true,
    title: "Add a new section..."
  }, /*#__PURE__*/React.createElement(_core.Button, {
    disableRipple: true,
    disableElevation: true,
    onClick: function onClick() {
      return addZoneToSection({
        sectionId: section.id
      });
    },
    className: classes.smallButton
  }, /*#__PURE__*/React.createElement(_LibraryAddOutlined.default, {
    color: "action"
  }))), section.type === 'panel' && /*#__PURE__*/React.createElement(_core.Box, {
    key: "selectOptions_".concat(section.id),
    display: "flex",
    alignItems: "center",
    className: classes.buttonsWrapper
  }, /*#__PURE__*/React.createElement(_core.Select, {
    fullWidth: true,
    value: section.panelId || '',
    onChange: function onChange(event) {
      addPanelToSection({
        sectionId: section.id,
        panelId: event.target.value
      });
    }
  }, layout.filter(function (lo) {
    return !lo.noPanel && !lo.asContent;
  }).map(function (lo) {
    return /*#__PURE__*/React.createElement(_core.MenuItem, {
      key: "".concat(section.id, "_").concat(lo.uniqueId),
      value: lo.uniqueId
    }, /*#__PURE__*/React.createElement(_core.Box, {
      display: "flex",
      alignItems: "center",
      className: classes.groupsBox
    }, lo.icon && /*#__PURE__*/(0, _react.cloneElement)(lo.icon, {
      color: 'disabled'
    }), /*#__PURE__*/React.createElement(_core.Typography, {
      variant: "caption",
      color: "textSecondary"
    }, lo.title)));
  })), section.panelId !== undefined && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_MobileScreenShare.default, {
    onClick: function onClick() {
      removePanelFromSection({
        sectionId: section.id,
        panelId: section.panelId
      });
    },
    color: "action"
  })), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return chooseTypeForSection({
        panelId: section.id,
        isList: true
      });
    },
    className: classes.splitButton
  }, /*#__PURE__*/React.createElement(_Web.default, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '4px'
    }
  }, section.zones.length === 0 && /*#__PURE__*/React.createElement(_core.Tooltip, {
    arrow: true,
    title: "Switch panel type"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_core.Button, {
    className: classes.smallButton,
    variant: "outlined",
    disabled: section.type === 'list' && section.zones.length === 0 || section.type === 'panel' && !section.panelId,
    onClick: function onClick() {
      return chooseTypeForSection({
        panelId: section.id,
        isList: false
      });
    }
  }, /*#__PURE__*/React.createElement(_Apps.default, null)))), section.type !== 'content' && /*#__PURE__*/React.createElement(_core.Tooltip, {
    arrow: true,
    title: "Remove section"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_core.Button, {
    variant: "outlined",
    disabled: section.type === 'list' && section.zones.length > 0,
    onClick: function onClick() {
      removeZoneFromSection({
        sectionId: section.id
      });
    },
    className: classes.smallButton
  }, /*#__PURE__*/React.createElement(_Close.default, null)))))))))), /*#__PURE__*/React.createElement("div", {
    className: "\n        ".concat(classes.root, "\n        ").concat(section.direction === 'horizontal' ? classes.horizontal : classes.vertical, "\n      ")
  }, (section.type === 'list' && section.zones.length === 0 || section.type === 'panel' && !section.panelId) && /*#__PURE__*/React.createElement("div", {
    className: classes.selectMode
  }, /*#__PURE__*/React.createElement(_core.Tooltip, {
    title: "Select a mode to continue...",
    arrow: true
  }, /*#__PURE__*/React.createElement(_core.Box, {
    display: "flex",
    alignItems: "center",
    style: {
      gap: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return chooseTypeForSection({
        panelId: section.id
      });
    },
    className: classes.splitButton
  }, /*#__PURE__*/React.createElement(_Apps.default, {
    style: {
      fontSize: 48
    },
    color: section.type === 'list' ? 'primary' : 'disabled'
  })), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      showContent({
        sectionId: section.id
      });
    },
    className: classes.splitButton
  }, /*#__PURE__*/React.createElement(_Laptop.default, {
    style: {
      fontSize: 48
    },
    color: section.type === 'content' ? 'primary' : 'disabled'
  })), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return chooseTypeForSection({
        panelId: section.id,
        type: 'panel'
      });
    },
    className: classes.splitButton
  }, /*#__PURE__*/React.createElement(_WebAsset.default, {
    style: {
      fontSize: 48
    },
    color: section.type === 'panel' ? 'primary' : 'disabled'
  })), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return chooseTypeForSection({
        panelId: section.id,
        type: 'web'
      });
    },
    className: classes.splitButton
  }, /*#__PURE__*/React.createElement(_Http.default, {
    style: {
      fontSize: 42
    },
    color: section.type === 'web' ? 'primary' : 'disabled'
  }))))), section.type === 'panel' && section.panelId && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%'
    },
    id: "".concat(section.panelId, "-section")
  })), section.type === 'content' && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'stretch',
      alignItems: 'stretch'
    },
    id: 'content-section'
  }), section.type === 'web' && section.url && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("iframe", {
    title: section.url,
    src: "https://".concat(section.url.replace('http://', '').replace('https://', '')),
    style: {
      border: '0px',
      filter: 'opacity(0.5) grayscale(0.5)',
      width: '100%',
      height: '100%'
    }
  })), section.type === 'list' && section.zones && section.zones.map(function (zone) {
    return /*#__PURE__*/React.createElement("div", {
      key: "".concat(section.id, "_").concat(zone),
      className: "".concat(classes.zone, " ").concat(isRoot ? classes.wrapperRepeat : null),
      style: section.direction === 'horizontal' ? {
        width: '0px'
      } : {}
    }, /*#__PURE__*/React.createElement(MuiSplitter, {
      section: sections.find(function (s) {
        return s.id === zone;
      })
    }));
  })));
};

var _default = MuiSplitter;
exports.default = _default;