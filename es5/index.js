'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadModules = require('./load-modules');

var _shortcut = require('./shortcut');

var shortcut = _interopRequireWildcard(_shortcut);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  loadModules: _loadModules.loadModules,
  shortcut: shortcut
};