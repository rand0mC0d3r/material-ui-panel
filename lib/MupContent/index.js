"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

var MupContent = function MupContent(_ref) {
  var children = _ref.children;

  var _useContext = (0, _react.useContext)(_MuiPanelStore.default),
      layout = _useContext.layout,
      sections = _useContext.sections,
      handleContentAnnouncement = _useContext.handleContentAnnouncement;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      layoutObject = _useState2[0],
      setLayoutObject = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      elemRef = _useState4[0],
      setElemRef = _useState4[1];

  (0, _react.useEffect)(function () {
    handleContentAnnouncement({
      children: children
    });
  }, []);
  (0, _react.useEffect)(function () {
    return setElemRef(document.getElementById('content-section'));
  }, [sections]);
  (0, _react.useEffect)(function () {
    var findObject = layout.find(function (lo) {
      return lo.asContent;
    });

    if (findObject) {
      setLayoutObject(findObject);
    }
  }, [layout]);
  return layoutObject && elemRef ? /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/React.createElement("div", {
    style: {
      order: layoutObject.parentId ? '' : '-1',
      flex: !layoutObject.parentId ? '1 1 auto' : '0 0 auto',
      display: 'flex',
      height: layoutObject.parentId ? 'unset' : '100%',
      flexDirection: 'column'
    }
  }, children), elemRef) : null;
};

MupContent.propTypes = {
  children: _propTypes.default.node.isRequired
};
var _default = MupContent;
exports.default = _default;