const { environment } = require('@rails/webpacker')
const path = require('path')

const sassLoaders = environment.loaders.get('sass')
const sassLoaderConfig = sassLoaders.use.filter(config => config.loader === 'sass-loader')[0]

Object.assign(sassLoaderConfig.options, {
  data: "@import 'common.scss'; @import 'reset.scss';",
  includePaths: [path.resolve(__dirname, '../../app/javascript/src/css/application/')]
})

module.exports = environment
