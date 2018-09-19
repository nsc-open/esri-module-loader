const ESRI_SHORTCUTS = {
  // esri
  Basemaps: 'esri/basemaps',
  Color: 'esri/Color',
  config: 'esri/config',
  Credential: 'esri/Credential',
  domUtils: 'esri/domUtils',
  Graphic: 'esri/graphic',
  graphicsUtils: 'esri/graphicsUtil',
  IdentityManager: 'esri/IdentityManager',
  IdentityManagerBase: 'esri/IdentityManagerBase',
  ImageSpatialReference: 'esri/ImageSpatialReference',
  InfoTemplate: 'esri/InfoTemplate',
  InfoWindowBase: 'esri/InfoWindowBase',
  kernel: 'esri/kernel',
  lang: 'esri/lang',
  Map: 'esri/map',
  OperationBase: 'esri/OperationBase',
  request: 'esri/request',
  ServerInfo: 'esri/ServerInfo',
  SnappingManager: 'esri/SnappingManager',
  SpatialReference: 'esri/SpatialReference',
  TimeExtent: 'esri/TimeExtent',
  UndoManager: 'esri/undoManager',
  units: 'esri/units',
  urlUtils: 'esri/urlUtils',

  // arcgis
  OAuthInfo: 'esri/arcgis/OAuthInfo',
  Portal: 'esri/arcgis/Portal',
  utils: 'esri/arcgis/utils',
  
  // geometry
  Circle: 'esri/geometry/Circle',
  coordinateFormatter: 'esri/geometry/coordinateFormatter',
  Extent: 'esri/geometry/Extent',
  geodesicUtils: 'esri/geometry/geodesicUtils',
  GeographicTransformation: 'esri/geometry/GeographicTransformation',
  GeographicTransformationStep: 'esri/geometry/GeographicTransformationStep',
  Geometry: 'esri/geometry/Geometry',
  geometryEngine: 'esri/geometry/geometryEngine',
  geometryEngineAsync: 'esri/geometry/geometryEngineAsync',
  jsonUtils: 'esri/geometry/jsonUtils',
  mathUtils: 'esri/geometry/mathUtils',
  Multipoint: 'esri/geometry/Multipoint',
  normalizeUtils: 'esri/geometry/normalizeUtils',
  Point: 'esri/geometry/Point',
  Polygon: 'esri/geometry/Polygon',
  Polyline: 'esri/geometry/Polyline',
  projection: 'esri/geometry/projection',
  scaleUtils: 'esri/geometry/scaleUtils',
  ScreenPoint: 'esri/geometry/ScreenPoint',
  screenUtils: 'esri/geometry/screenUtils',
  webMercatorUtils: 'esri/geometry/webMercatorUtils',

  // layer
  StretchFilter: 'esri/layers/pixelfilters/StretchFilter',

  // layers
  ArcGISDynamicMapServiceLayer: 'esri/layers/ArcGISDynamicMapServiceLayer',
  ArcGISImageServiceLayer: 'esri/layers/ArcGISImageServiceLayer',
  ArcGISImageServiceVectorLayer: 'esri/layers/ArcGISImageServiceVectorLayer',
  ArcGISTiledMapServiceLayer: 'esri/layers/ArcGISTiledMapServiceLayer',
  CodedValueDomain: 'esri/layers/CodedValueDomain',
  CSVLayer: 'esri/layers/CSVLayer',
  DataAdapterFeatureLayer: 'esri/layers/DataAdapterFeatureLayer',
  DataSource: 'esri/layers/DataSource',
  DimensionalDefinition: 'esri/layers/DimensionalDefinition',
  Domain: 'esri/layers/Domain',
  DynamicLayerInfo: 'esri/layers/DynamicLayerInfo',
  DynamicMapServiceLayer: 'esri/layers/DynamicMapServiceLayer',
  FeatureEditResult: 'esri/layers/FeatureEditResult',
  FeatureLayer: 'esri/layers/FeatureLayer',
  FeatureTemplate: 'esri/layers/FeatureTemplate',
  FeatureType: 'esri/layers/FeatureType',
  Field: 'esri/layers/Field',
  GeoRSSLayer: 'esri/layers/GeoRSSLayer',
  GraphicsLayer: 'esri/layers/GraphicsLayer',
  ImageParameters: 'esri/layers/ImageParameters',
  ImageServiceParameters: 'esri/layers/ImageServiceParameters',
  InheritedDomain: 'esri/layers/InheritedDomain',
  JoinDataSource: 'esri/layers/JoinDataSource',
  KMLFolder: 'esri/layers/KMLFolder',
  KMLGroundOverlay: 'esri/layers/KMLGroundOverlay',
  KMLLayer: 'esri/layers/KMLLayer',
  LabelClass: 'esri/layers/LabelClass',
  LabelLayer: 'esri/layers/LabelLayer',
  Layer: 'esri/layers/layer',
  LayerDataSource: 'esri/layers/LayerDataSource',
  LayerDrawingOptions: 'esri/layers/LayerDrawingOptions',
  LayerInfo: 'esri/layers/LayerInfo',
  LayerMapSource: 'esri/layers/LayerMapSource',
  LayerSource: 'esri/layers/LayerSource',
  LayerTimeOptions: 'esri/layers/LayerTimeOptions',
  LOD: 'esri/layers/LOD',
  MapImage: 'esri/layers/MapImage',
  MapImageLayer: 'esri/layers/MapImageLayer',
  MosaicRule: 'esri/layers/MosaicRule',
  OpenStreetMapLayer: 'esri/layers/OpenStreetMapLayer',
  PixelBlock: 'esri/layers/PixelBlock',
  QueryDataSource: 'esri/layers/QueryDataSource',
  RangeDomain: 'esri/layers/RangeDomain',
  RasterDataSource: 'esri/layers/RasterDataSource',
  RasterFunction: 'esri/layers/RasterFunction',
  RasterLayer: 'esri/layers/RasterLayer',
  StreamLayer: 'esri/layers/StreamLayer',
  TableDataSource: 'esri/layers/TableDataSource',
  TiledMapServiceLayer: 'esri/layers/TiledMapServiceLayer',
  TileInfo: 'esri/layers/TileInfo',
  TimeInfo: 'esri/layers/TimeInfo',
  TimeReference: 'esri/layers/TimeReference',
  VectorTileLayer: 'esri/layers/VectorTileLayer',
  WCSConnection: 'esri/layers/WCSConnection',
  WCSCoverageDescription: 'esri/layers/WCSCoverageDescription',
  WCSLayer: 'esri/layers/WCSLayer',
  WebTiledLayer: 'esri/layers/WebTiledLayer',
  WFSLayer: 'esri/layers/WFSLayer',
  WMSLayer: 'esri/layers/WMSLayer',
  WMSLayerInfo: 'esri/layers/WMSLayerInfo',
  WMTSLayer: 'esri/layers/WMTSLayer',
  WMTSLayerInfo: 'esri/layers/WMTSLayerInfo',

  // symbols
  CartographicLineSymbol: 'esri/symbols/CartographicLineSymbol',
  FillSymbol: 'esri/symbols/FillSymbol',
  Font: 'esri/symbols/Font',
  LineSymbol: 'esri/symbols/LineSymbol',
  MarkerSymbol: 'esri/symbols/MarkerSymbol',
  PictureFillSymbol: 'esri/symbols/PictureFillSymbol',
  PictureMarkerSymbol: 'esri/symbols/PictureMarkerSymbol',
  SimpleFillSymbol: 'esri/symbols/SimpleFillSymbol',
  SimpleLineSymbol: 'esri/symbols/SimpleLineSymbol',
  SimpleMarkerSymbol: 'esri/symbols/SimpleMarkerSymbol',
  Symbol: 'esri/symbols/Symbol',
  TextSymbol: 'esri/symbols/TextSymbol',

  // toobars
  Draw: 'esri/toolbars/draw',
  Edit: 'esri/toolbars/edit',
  ImageServiceMeasureTool: 'esri/toolbars/ImageServiceMeasureTool',
  Navigation: 'esri/toolbars/navigation',

}

let SHORTCUTS = { ...ESRI_SHORTCUTS }

/**
 * add(name, path)
 * add({ name, path })
 * add([{ name, path }, ...])
 */
export const add = (...arguments) => {
  const _add = (name, path) => {
    if (SHORTCUTS[name]) {
      console.warn(`shortcut[${name}] with path ${SHORTCUTS[name]} will be overrided with path ${path}`)
    }
    return SHORTCUTS[name] = { [name]: path }
  }

  if (arguments.length === 2) {
    const [name, path] = arguments
    return _add(name, path)
  } else if (typeof arguments[0] === 'object') {
    return _add(arguments[0].name, arguments[0].path)
  } else if (Array.isArray(arguments[0])) {
    arguments[0].forEach(arg => _add(arg.name, arg.path))
  }
}

/**
 * remove('Map')
 * remove('Map', 'Graphic')
 * remove(['Map', 'Graphic'])
 */
export const remove = (...arguments) => {
  if (arguments.length > 1) {
    arguments.forEach(name => delete SHORTCUTS[name])
  } else if (arguments.length === 1 && Array.isArray(arguments[0])) {
    arguments[0].forEach(name => delete SHORTCUTS[name])
  } else if (arguments.length === 1 && typeof arguments[0] === 'string') {
    delete SHORTCUTS[arguments[0]]
  }
}


/**
 * get() => return all shortcuts mapping
 * get('Map') => return path
 * get('Map', 'Graphic') => return shortcuts mapping
 * get(['Map', 'Graphic']) => return shortcuts mapping
 */
export const get = (...arguments) => {
  if (arguments.length === 0) {
    return SHORTCUTS
  } else if (arguments.length === 1) {
    if (Array.isArray(arguments[0])) {
      const result = {}
      arguments[0].forEach(name => result[name] = SHORTCUTS[name])
      return result
    } else if (typeof arguments[0] === 'string') {
      return SHORTCUTS[arguments[0]]
    }
  } else {
    const result = {}
    arguments.forEach(name => result[name] = SHORTCUTS[name])
    return result
  }
}

export const reset = () => SHORTCUTS = { ...ESRI_SHORTCUTS }