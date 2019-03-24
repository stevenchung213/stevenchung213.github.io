const webpack = require('webpack'),
  CompressionPlugin = require('compression-webpack-plugin'),
  TerserPlugin = require('terser-webpack-plugin'),
  WorkboxPlugin = require('workbox-webpack-plugin'),
  ImageminPlugin = require("imagemin-webpack"),
  imageminGifsicle = require("imagemin-gifsicle"),
  imageminJpegtran = require("imagemin-jpegtran"),
  imageminOptipng = require("imagemin-optipng"),
  imageminSvgo = require("imagemin-svgo"),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = env => {

  console.log(env, '**** PRODUCTION BUILD STARTING ****');

  return {
    mode: 'development',
    entry: __dirname + '/src/index.jsx',
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
        }),
        new OptimizeCSSAssetsPlugin({})
      ],
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
      new MiniCssExtractPlugin({
        filename: "styles.css"
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
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '[name].[ext]'
            }
          }
        },
        {
          test: /\.bundle\.js$/,
          use: {
            loader: 'bundle-loader',
            options: {
              name: 'sc'
            }
          }
        }
      ]
    },
    output: {
      filename: '[name]_bundle.js',
      chunkFilename: '[id]_bundle.js',
      path: __dirname + '/dist'
    }
  }
};
