[![npm](https://img.shields.io/npm/v/esri-module-loader.svg)]

# esri-module-loader

This package is based on [esri-loader](https://github.com/Esri/esri-loader).

# install

```bash
npm i -S esri-module-loader
```

```js
import { loadModules } from 'esri-module-loader'
```

# usage

Modules can be string and object mixed array:

```js
const modules = [
  'esri/Map', // use last word as the module name
  { name: 'Graphic', path: 'esri/graphic' } // or you can specify your module name
]
loadModules(modules).then(({ Graphic, Map }) => {
  // loaded modules returned as an object mapping
  // use your loaded modules here
})
```

Using third party modules needs extra dojo config:

```js
loadModules(
  [{ name: 'MyModule', path: 'my/Module'}],
  { dojoConfig: { packages: [ name: 'my', location: '/path/to/my' ] } }
).then(({ MyModule }) => {})
```
