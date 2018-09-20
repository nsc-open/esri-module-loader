'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reset = exports.get = exports.remove = exports.add = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _esriModules = require('./esri-modules');

var _esriModules2 = _interopRequireDefault(_esriModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SHORTCUTS = _extends({}, _esriModules2.default);

/**
 * add(name, path)
 * add({ name, path })
 * add([{ name, path }, ...])
 */
var add = exports.add = function add() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var _add = function _add(name, path) {
    if (SHORTCUTS[name]) {
      console.warn('shortcuts[' + name + '] with path ' + SHORTCUTS[name] + ' will be overrided with path ' + path);
    }
    return SHORTCUTS[name] = path;
  };

  if (args.length === 2) {
    var name = args[0],
        path = args[1];

    return _add(name, path);
  } else if (Array.isArray(args[0])) {
    args[0].forEach(function (arg) {
      return _add(arg.name, arg.path);
    });
  } else if (_typeof(args[0]) === 'object') {
    return _add(args[0].name, args[0].path);
  }
};

/**
 * remove('Map')
 * remove('Map', 'Graphic')
 * remove(['Map', 'Graphic'])
 */
var remove = exports.remove = function remove() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length > 1) {
    args.forEach(function (name) {
      return delete SHORTCUTS[name];
    });
  } else if (args.length === 1 && Array.isArray(args[0])) {
    args[0].forEach(function (name) {
      return delete SHORTCUTS[name];
    });
  } else if (args.length === 1 && typeof args[0] === 'string') {
    delete SHORTCUTS[args[0]];
  }
};

/**
 * get() => return all shortcuts mapping
 * get('Map') => return path
 * get('Map', 'Graphic') => return shortcuts mapping
 * get(['Map', 'Graphic']) => return shortcuts mapping
 */
var get = exports.get = function get() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  if (args.length === 0) {
    return SHORTCUTS;
  } else if (args.length === 1) {
    if (Array.isArray(args[0])) {
      var result = {};
      args[0].forEach(function (name) {
        return result[name] = SHORTCUTS[name];
      });
      return result;
    } else if (typeof args[0] === 'string') {
      return SHORTCUTS[args[0]];
    }
  } else {
    var _result = {};
    args.forEach(function (name) {
      return _result[name] = SHORTCUTS[name];
    });
    return _result;
  }
};

var reset = exports.reset = function reset() {
  return SHORTCUTS = _extends({}, _esriModules2.default);
};