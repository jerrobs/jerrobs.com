"use strict";
exports.__esModule = true;
var DOUBLE_AT = / @@ /g;
var SINGLE_AT = / @ /g;
var NO_BREAK_SPACE = "\u00a0";
var NARROW_NO_BREAK_SPACE = "\u202f";
exports["default"] = (function (s) {
    if (s === void 0) { s = ""; }
    return s.replace(DOUBLE_AT, NO_BREAK_SPACE).replace(SINGLE_AT, NARROW_NO_BREAK_SPACE);
});
