"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.oppositeSide = void 0;
var sides = ['left', 'right'];

var oppositeSide = function oppositeSide(side) {
  var defaultSide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : sides[0];
  return side === defaultSide ? sides[1] : sides[0];
};

exports.oppositeSide = oppositeSide;