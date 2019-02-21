import esriLoader from 'esri-loader'
import { getConfig } from './config'
import * as shortcuts from './shortcuts'

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
    const path = shortcuts.get(module)
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
 * loadModules([{ name: 'Map', path: 'esri/map' }]).then(({ Map }) => new Map())
 * loadModules(['Map']).then(({ Map }) => ())
 * loadModules('Map').then(Map => {})
 * loadModules('esri/Map')
 * loadModules({ name: 'Map', path: 'esri/map' })
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
  const singleModule = !Array.isArray(modules)
  const normalizedModules = (singleModule ? [modules] : modules).map(normalizeModule)
  return esriLoader.loadModules(
    normalizedModules.map(m => m.path),
    options || getConfig()
  ).then(loadedModules => {
    if (singleModule) {
      return loadedModules[0]
    } else {
      return getModulesMapping(normalizedModules, loadedModules)
    }
  })
}