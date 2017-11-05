const path = require('path')
const { ReactLoadablePlugin } = require('react-loadable/webpack')

module.exports = config => ({
  entry: {
    vendor: [
      require.resolve('react-cookie'),
    ],
  },
  resolve: {
    alias: {
      'react-loadable$': require.resolve('react-loadable'),
      'react-cookie$': require.resolve('react-cookie'),
    },
  },
  plugins: [
    new ReactLoadablePlugin({
      filename: path.resolve(config.outputPath, './react-loadable.json'),
    }),
  ],
})
