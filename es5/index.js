'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.esriLoader = exports.shortcuts = exports.loadModules = exports.config = undefined;

var _esriLoader = require('esri-loader');

var _esriLoader2 = _interopRequireDefault(_esriLoader);

var _loadModules = require('./load-modules');

var _config = require('./config');

var _shortcuts = require('./shortcuts');

var shortcuts = _interopRequireWildcard(_shortcuts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.config = _config.config;
exports.loadModules = _loadModules.loadModules;
exports.shortcuts = shortcuts;
exports.esriLoader = _esriLoader2.default;