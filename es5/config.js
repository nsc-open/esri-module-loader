"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CONFIG = {
  defaultOptions: undefined
};

var config = exports.config = function config(defaultOptions) {
  CONFIG.defaultOptions = defaultOptions;
};

var getConfig = exports.getConfig = function getConfig() {
  return CONFIG.defaultOptions;
};