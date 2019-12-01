"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(selection) {
  var icons = {
    path: {},
    viewBox: {}
  };
  if (!selection || !selection.icons) return icons;
  selection.icons.forEach(function (icon) {
    var _icon$tags = _slicedToArray(icon.tags, 1),
        iconName = _icon$tags[0];

    icons.path[iconName] = icon.paths;
    icons.viewBox[iconName] = "0 0 ".concat(icon.width || '1024', " 1024");
  });
  return icons;
};

exports.default = _default;