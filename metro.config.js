import path from 'path'
import { fileURLToPath } from 'url'

const { getDefaultConfig } = require('expo/metro-config')

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

module.exports = (() => {
  const config = getDefaultConfig(__dirname)

  const { transformer, resolver } = config

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  }
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
  }

  return config
})()
