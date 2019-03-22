const webpack = require('webpack'),
  CompressionPlugin = require('compression-webpack-plugin'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
  WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ],
    namedModules: false,
    namedChunks: false,
    nodeEnv: 'production',
    flagIncludedChunks: true,
    occurrenceOrder: true,
    sideEffects: true,
    usedExports: true,
    concatenateModules: true,
    noEmitOnErrors: true,
    checkWasmTypes: true,
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: __dirname + '/dist/service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      include: [/\.html$/, /\.js$/, /\.css$/],
      precacheManifestFilename: 'sc-manifest.[manifestHash].js',
      cleanupOutdatedCaches: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('/'),
          handler: 'StaleWhileRevalidate',
          // options: {
          //   expiration: {
          //     maxEntries: 10,
          //     maxAgeSeconds: 604800,
          //   }
          // }
        },
        // {
        //   urlPattern: new RegExp('https://s3-us-west-1.amazonaws.com/my.portfolio/'),
        //   handler: 'StaleWhileRevalidate'
        // }
      ]
    })
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  }
};
