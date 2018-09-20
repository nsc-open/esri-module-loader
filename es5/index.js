'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadModules = require('./load-modules');

var _shortcuts = require('./shortcuts');

var shortcuts = _interopRequireWildcard(_shortcuts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  loadModules: _loadModules.loadModules,
  shortcuts: shortcuts
};