"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MuiPanel = function MuiPanel(_ref) {
  var icon = _ref.icon,
      title = _ref.title;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, icon, " ", title), "test panel");
};

var _default = MuiPanel;
exports.default = _default;