var path = require('path')
var webpack = require('webpack')

module.exports = {
  resolve: {
    root: [path.join(__dirname, '/public/lib/')]
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    )
  ]
}
