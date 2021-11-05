"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _VerticalSplit = _interopRequireDefault(require("@material-ui/icons/VerticalSplit"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    container: {
      flex: '1 1 50%',
      height: '70px',
      width: '130px',
      padding: '8px',
      borderRadius: '8px'
    },
    wrapper: {
      display: 'grid',
      gridAutoColumns: '1fr',
      gridAutoRows: '1fr',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr',
      gap: '8px',
      gridTemplateAreas: // '. . .',
      '. .',
      width: '100%',
      height: '100%'
    },
    block: {
      backgroundColor: theme.palette.augmentColor({
        main: theme.palette.divider
      }).light,
      alignSelf: 'stretch',
      border: "1px solid ".concat(theme.palette.divider),
      flex: '1 1 50%',
      '&:hover': {
        backgroundColor: theme.palette.primary.main
      }
    },
    blockHorizontal: {
      '&:first-child': {
        borderTopLeftRadius: '4px',
        borderBottomLeftRadius: '4px'
      },
      '&:last-child': {
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px'
      }
    },
    blockVertical: {
      '&:first-child': {
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px'
      },
      '&:last-child': {
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px'
      }
    },
    general: {
      display: 'flex',
      gap: '4px',
      height: '100%',
      justifyContent: 'space-between',
      alignContent: 'stretch'
    }
  };
});

var MupSectionsSplitter = function MupSectionsSplitter(_ref) {
  var _ref$createSection = _ref.createSection,
      createSection = _ref$createSection === void 0 ? function () {} : _ref$createSection,
      _ref$isRoot = _ref.isRoot,
      isRoot = _ref$isRoot === void 0 ? false : _ref$isRoot;
  var theme = (0, _styles.useTheme)();
  var classes = useStyles(theme);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var toggleVisible = function toggleVisible() {
    setVisible(function (visible) {
      return !visible;
    });
  };

  var blocks = [{
    tooltip: 'Vertical split',
    content: /*#__PURE__*/React.createElement("div", {
      className: classes.general,
      style: {
        'flexDirection': 'row'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(classes.block, " ").concat(classes.blockHorizontal),
      onClick: function onClick() {
        return createSection({
          type: 'vs',
          index: 0,
          count: 2
        });
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "".concat(classes.block, " ").concat(classes.blockHorizontal),
      onClick: function onClick() {
        return createSection({
          type: 'vs',
          index: 1,
          count: 2
        });
      }
    }))
  }, {
    tooltip: 'Horizontal split',
    content: /*#__PURE__*/React.createElement("div", {
      className: classes.general,
      style: {
        'flexDirection': 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(classes.block, " ").concat(classes.blockVertical),
      onClick: function onClick() {
        return createSection({
          type: 'hs',
          index: 0,
          count: 2
        });
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "".concat(classes.block, " ").concat(classes.blockVertical),
      onClick: function onClick() {
        return createSection({
          type: 'hs',
          index: 1,
          count: 2
        });
      }
    }))
  }, {
    tooltip: '3 Mains primary',
    content: /*#__PURE__*/React.createElement("div", {
      className: classes.general,
      style: {
        'flexDirection': 'row'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(classes.block, " ").concat(classes.blockHorizontal),
      onClick: function onClick() {
        return createSection({
          type: 'vs',
          index: 0,
          count: 3
        });
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "".concat(classes.block, " ").concat(classes.blockHorizontal),
      onClick: function onClick() {
        return createSection({
          type: 'vs',
          index: 1,
          count: 3
        });
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "".concat(classes.block, " ").concat(classes.blockHorizontal),
      onClick: function onClick() {
        return createSection({
          type: 'vs',
          index: 2,
          count: 3
        });
      }
    }))
  }, {
    tooltip: '3 Mains even',
    content: /*#__PURE__*/React.createElement("div", {
      className: classes.general,
      style: {
        'flexDirection': 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(classes.block, " ").concat(classes.blockVertical),
      onClick: function onClick() {
        return createSection({
          type: 'hs',
          index: 0,
          count: 3
        });
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "".concat(classes.block, " ").concat(classes.blockVertical),
      onClick: function onClick() {
        return createSection({
          type: 'hs',
          index: 1,
          count: 3
        });
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "".concat(classes.block, " ").concat(classes.blockVertical),
      onClick: function onClick() {
        return createSection({
          type: 'hs',
          index: 2,
          count: 3
        });
      }
    }))
  } // {
  //   tooltip: 'Main + sides',
  //   content: <div className={classes.general} style={{'flexDirection': 'row'}}>
  //     <div className={classes.block}></div>
  //     <div style={{
  //       'flex': '1 1 50%',
  //       display: 'flex',
  //       gap: '4px',
  //       flexDirection: 'column',
  //     }}>
  //       <div className={classes.block}></div>
  //       <div className={classes.block}></div>
  //     </div>
  //   </div>
  // },
  // {
  //   tooltip: '4 squares',
  //   content: <div style={{
  //     display: 'grid',
  //     gridAutoColumns: '1fr',
  //     gridAutoRows: '1fr',
  //     gridTemplateColumns: '1fr 1fr',
  //     gridTemplateRows: '1fr',
  //     gap: '4px',
  //     gridTemplateAreas:
  //       '. .',
  //     width: '100%',
  //     height: '100%',
  //   }}>
  //     <div className={classes.block}></div>
  //     <div className={classes.block}></div>
  //     <div className={classes.block}></div>
  //     <div className={classes.block}></div>
  //   </div>
  // },
  ];
  return /*#__PURE__*/React.createElement(React.Fragment, null, visible && /*#__PURE__*/React.createElement("div", {
    onClick: toggleVisible,
    className: classes.wrapper,
    style: isRoot ? {} : {}
  }, blocks.map(function (block) {
    return /*#__PURE__*/React.createElement("div", {
      key: block.tooltip,
      className: classes.container
    }, block.content);
  })), !visible && /*#__PURE__*/React.createElement(_VerticalSplit.default, {
    style: {
      cursor: 'pointer'
    },
    onClick: toggleVisible,
    color: "action"
  }));
};

var _default = MupSectionsSplitter;
exports.default = _default;