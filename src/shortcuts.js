import ESRI_SHORTCUTS from './esri-modules'

let SHORTCUTS = { ...ESRI_SHORTCUTS }

/**
 * add(name, path)
 * add({ name, path })
 * add([{ name, path }, ...])
 */
export const add = (...args) => {
  const _add = (name, path) => {
    if (SHORTCUTS[name]) {
      console.warn(`shortcuts[${name}] with path ${SHORTCUTS[name]} will be overrided with path ${path}`)
    }
    return SHORTCUTS[name] = path
  }

  if (args.length === 2) {
    const [name, path] = args
    return _add(name, path)
  } else if (Array.isArray(args[0])) {
    args[0].forEach(arg => _add(arg.name, arg.path))
  } else if (typeof args[0] === 'object') {
    return _add(args[0].name, args[0].path)
  } 
}

/**
 * remove('Map')
 * remove('Map', 'Graphic')
 * remove(['Map', 'Graphic'])
 */
export const remove = (...args) => {
  if (args.length > 1) {
    args.forEach(name => delete SHORTCUTS[name])
  } else if (args.length === 1 && Array.isArray(args[0])) {
    args[0].forEach(name => delete SHORTCUTS[name])
  } else if (args.length === 1 && typeof args[0] === 'string') {
    delete SHORTCUTS[args[0]]
  }
}


/**
 * get() => return all shortcuts mapping
 * get('Map') => return path
 * get('Map', 'Graphic') => return shortcuts mapping
 * get(['Map', 'Graphic']) => return shortcuts mapping
 */
export const get = (...args) => {
  if (args.length === 0) {
    return SHORTCUTS
  } else if (args.length === 1) {
    if (Array.isArray(args[0])) {
      const result = {}
      args[0].forEach(name => result[name] = SHORTCUTS[name])
      return result
    } else if (typeof args[0] === 'string') {
      return SHORTCUTS[args[0]]
    }
  } else {
    const result = {}
    args.forEach(name => result[name] = SHORTCUTS[name])
    return result
  }
}

export const reset = () => SHORTCUTS = { ...ESRI_SHORTCUTS }