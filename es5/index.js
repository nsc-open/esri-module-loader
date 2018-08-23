'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadModules = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _esriLoader = require('esri-loader');

var _esriLoader2 = _interopRequireDefault(_esriLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param  {Array}  [modules=[]]       [{ name, path }]
 * @param  {Array}  [loadedModules=[]] [Map, Graphic, ...]
 * @return {Object}                    { [name]: Map, ... }
 */
var getModulesMapping = function getModulesMapping() {
  var modules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var loadedModules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var mapping = {};
  modules.forEach(function (m, i) {
    mapping[m.name] = loadedModules[i];
  });
  return mapping;
};

/**
 * normalize module
 * if module is path as string, like 'esri/Map', will normalize into { name: 'Map', path: 'esri/Map' }
 * @param  {Object|String} module
 * @return {Object}       { name, path }
 */
var normalizeModule = function normalizeModule(module) {
  if (typeof module === 'string') {
    return {
      name: module.substring(module.lastIndexOf('/') + 1),
      path: module
    };
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') {
    return module;
  } else {
    throw new Error('Cannot normalize module');
  }
};

/**
 * use esriLoader to load modules and return a modulesMapping
 *
 * Example 1, use official modules:
 *
 * loadModules([{ name: 'Map', path: 'esri/Map' }]).then(({ Map }) => new Map())
 *
 *
 * Example 2, use third party moduels: need to pass dojoConfig in options
 *
 * loadModules(
 *  [{ name: 'MyModule', path: 'my/Module'}],
 *  { dojoConfig: { packages: [ name: 'my', location: '/path/to/my' ] } }
 * ).then(({ MyModule }) => {})
 *
 *
 * @param  {Array} modules  object and string mixed array, like: [{ name, path }, path, ...]
 * @param  {Object} options esriLoader options
 * @return {Promise}
 */
var loadModules = exports.loadModules = function loadModules(modules, options) {
  var normalizedModules = modules.map(normalizeModule);
  return _esriLoader2.default.loadModules(normalizedModules.map(function (m) {
    return m.path;
  }), options).then(function (loadedModules) {
    return getModulesMapping(normalizedModules, loadedModules);
  });
};