const Webpack = require('./webpackSource/lib/webpack')
const WebpackConfig = require('./example/webpack.config')
const compiler = Webpack(WebpackConfig)
compiler.run()
