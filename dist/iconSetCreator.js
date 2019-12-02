"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(selection) {
  var icons = {
    path: {},
    viewBox: {}
  };
  if (!selection || !selection.icons) return icons;
  selection.icons.forEach(function (item) {
    var name = item.properties.name;
    icons.path[name] = item.icon.paths;
    icons.viewBox[name] = "0 0 ".concat(item.icon.width || '1024', " 1024");
  });
  return icons;
};

exports.default = _default;