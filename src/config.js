const CONFIG = {
  defaultOptions: null
}

export const config = ({ defaultOptions }) => {
  CONFIG.defaultOptions = defaultOptions
}

export const getConfig = () => {
  return CONFIG
}