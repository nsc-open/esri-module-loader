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

1. path string like `esri/map`
2. shortcut name like `Map`
3. name path object like `{ name: 'Map', path: 'esri/map' }`


# load single module

```js
loadModules(moduleValue).then(Module => {})
```

# load multiple modules

To load multiple modules, you need an array of module values, like:

```js
const modules = [
  'esri/Map', // use last word as the module name
  'Color', // by defined shortcut name
  { name: 'Graphic', path: 'esri/graphic' } // or you can specify your module name
]

loadModules(modules).then(({ Graphic, Map, Color }) => {
  // loaded modules returned as an object mapping
  // use your loaded modules here
})
```

# Using third party modules needs extra dojo config:

```js
loadModules(
  [{ name: 'MyModule', path: 'my/Module'}],
  { dojoConfig: { packages: [ name: 'my', location: '/path/to/my' ] } }
).then(({ MyModule }) => {})
```

# shortcut

You can add your shortcut:

```js
import EsriModuleLoader from 'esri-module-loader'
const { loadModules, shortcut } = EsriModuleLoader

shortcut.add('Map', 'esri/map')
shortcut.add({ name: 'Map', path: 'esri/map' })
shortcut.add([{ name: 'Map', path: 'esri/map' }, { name: 'Color', path: 'esri/Color' }])

loadModules(['Map', 'Color']).then(({ Map, Color}) => {
  // ...
})
```

Most of esri official modules have been already added into the shortcuts. You can check the [module list](https://github.com/nsc-open/esri-module-loader/blob/master/src/esri-modules.js)