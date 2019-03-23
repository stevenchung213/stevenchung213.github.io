const webpack = require('webpack'),
  CompressionPlugin = require('compression-webpack-plugin'),
  TerserPlugin = require('terser-webpack-plugin'),
  WorkboxPlugin = require('workbox-webpack-plugin'),
  ImageminPlugin = require("imagemin-webpack"),
  imageminGifsicle = require("imagemin-gifsicle"),
  imageminJpegtran = require("imagemin-jpegtran"),
  imageminOptipng = require("imagemin-optipng"),
  imageminSvgo = require("imagemin-svgo");

module.exports = env => {

  console.log(env, '**** PRODUCTION BUILD STARTING ****');

  return {
    mode: 'development',
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
          test: /\.(jpg|png|gif|svg)$/,
          loader: 'image-webpack-loader',
          enforce: 'pre'
        },
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024
            }
          }
        },
        {
          test: /\.svg$/,
          loader: 'svg-url-loader',
          options: {
            limit: 10 * 1024,
            noquotes: true,
          }
        }
      ]
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
        })
      ],
      namedModules: false,
      namedChunks: false,
      nodeEnv: 'production',
      removeEmptyChunks: true,
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
      new webpack.optimize.AggressiveMergingPlugin(),
      new ImageminPlugin({
        bail: false,
        cache: true,
        imageminOptions: {
          plugins: [
            imageminGifsicle({
              interlaced: true
            }),
            imageminJpegtran({
              progressive: true
            }),
            imageminOptipng({
              optimizationLevel: 5
            }),
            imageminSvgo({
              removeViewBox: true
            })
          ]
        }
      }),
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
            handler: 'StaleWhileRevalidate'
          },
        ]
      })
    ],
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
    }
  }
};
