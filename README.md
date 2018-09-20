![npm](https://img.shields.io/npm/v/esri-module-loader.svg)
![npm](https://img.shields.io/npm/dw/esri-module-loader.svg)
![GitHub stars](https://img.shields.io/github/stars/nsc-open/esri-module-loader.svg?style=social&label=Stars)

# esri-module-loader

This package is based on [esri-loader](https://github.com/Esri/esri-loader).

# install

```bash
npm i -S esri-module-loader
```

```js
import EsriModuleLoader from 'esri-module-loader'
const { loadModules } = EsriModuleLoader
```

# module value

A module value can be:

1. a full module value is an object like `{ name: 'Map', path: 'esri/map' }`
2. or it can be a path string like `'your/path/to/module'`, which will be converted into `{ name: 'module', path: 'your/path/to/module' }`
3. and it also can be a module name defined in shortcuts, like `'Map'`


# load single module

```js
loadModules(moduleValue).then(Module => {})
```

# load multiple modules

To load multiple modules, you need an array of module values, like:

```js
const modules = [
  'esri/Color', // use last word as the module name
  'Map', // by defined shortcut name
  { name: 'Graphic', path: 'esri/graphic' } // or you can specify your module name
]

loadModules(modules).then(({ Graphic, Map, Color }) => {
  // loaded modules returned as an object mapping
  // use your loaded modules here
})
```

# third party modules

needs extra dojo config:

```js
loadModules(
  [{ name: 'MyModule', path: 'my/Module'}],
  { dojoConfig: { packages: [ name: 'my', location: '/path/to/my' ] } }
).then(({ MyModule }) => {})
```

# shortcuts

You can add your own shortcuts:

```js
import EsriModuleLoader from 'esri-module-loader'
const { loadModules, shortcuts } = EsriModuleLoader

shortcuts.add('Map', 'esri/map')
shortcuts.add({ name: 'Map', path: 'esri/map' })
shortcuts.add([{ name: 'Map', path: 'esri/map' }, { name: 'Color', path: 'esri/Color' }])

loadModules(['Map', 'Color']).then(({ Map, Color}) => {
  // ...
})
```

Most of esri official modules have been already added into the shortcuts. You can check the [module list](https://github.com/nsc-open/esri-module-loader/blob/master/src/esri-modules.js)