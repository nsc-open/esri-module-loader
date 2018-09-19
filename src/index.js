import esriLoader from 'esri-loader'
import * as shortcut from './shortcut'

/**
 * @param  {Array}  [modules=[]]       [{ name, path }]
 * @param  {Array}  [loadedModules=[]] [Map, Graphic, ...]
 * @return {Object}                    { [name]: Map, ... }
 */
const getModulesMapping = (modules = [], loadedModules = []) => {
  const mapping = {}
  modules.forEach((m, i) => {
    mapping[m.name] = loadedModules[i]
  })
  return mapping
}

/**
 * normalize module
 * if module is path as string, like 'esri/Map', will normalize into { name: 'Map', path: 'esri/Map' }
 * @param  {Object|String} module
 * @return {Object}       { name, path }
 */
const normalizeModule = module => {
  if (typeof module === 'string') {
    const path = shortcut.get(module)
    if (path) {
      return { name: module, path }
    } else {
      return {
        name: module.substring(module.lastIndexOf('/') + 1),
        path: module
      }
    }
  } else if (typeof module === 'object') {
    return module
  } else {
    throw new Error('Cannot normalize module')
  }
}

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
export const loadModules = (modules, options) => {
  const normalizedModules = modules.map(normalizeModule)
  return esriLoader.loadModules(
    normalizedModules.map(m => m.path),
    options
  ).then(
    loadedModules => getModulesMapping(normalizedModules, loadedModules)
  )
}


// shortcut methods
export const addShortcut = shortcut.add
export const removeShortcut = shortcut.remove
export const getShortcut = shortcut.get
export const resetShortcut = shortcut.reset