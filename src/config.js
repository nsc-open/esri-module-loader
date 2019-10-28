const CONFIG = {
  defaultOptions: undefined
}

export const config = defaultOptions => {
  CONFIG.defaultOptions = defaultOptions
}

export const getConfig = () => {
  return CONFIG.defaultOptions
}