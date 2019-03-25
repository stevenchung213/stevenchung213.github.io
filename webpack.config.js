const webpack = require('webpack'),
  CompressionPlugin = require('compression-webpack-plugin'),
  TerserPlugin = require('terser-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  WebpackPwaManifest = require('webpack-pwa-manifest'),
  WorkboxPlugin = require('workbox-webpack-plugin'),
  ImageminPlugin = require("imagemin-webpack"),
  imageminGifsicle = require("imagemin-gifsicle"),
  imageminJpegtran = require("imagemin-jpegtran"),
  imageminOptipng = require("imagemin-optipng"),
  imageminSvgo = require("imagemin-svgo"),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
  CssNano = require('cssnano');

module.exports = env => {

  console.log(env, '**** PRODUCTION BUILD STARTING ****');

  return {
    mode: 'development',
    entry: './src/index.jsx',
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessor: CssNano,
          cssProcessorOptions: {
            discardComments: {
              removeAll: true
            },
            safe: true
          },
          canPrint: false
        })
      ],
      splitChunks: {
        chunks: 'all',
        minSize: 25000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          commons: {
            name: 'commons',
            chunks: 'initial',
            minChunks: 2
          },
          vendors: {
            test: /[\\/]node_modules[\\/](react|react-dom|react-pose|react-pose-text|react-loadable|mdbreact)[\\/]/,
            enforce: true,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
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
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new CompressionPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 8192,
        minRatio: 0.8
      }),
      new HtmlWebpackPlugin({
        inject: false,
        filename: 'in' +
          'dex.html',
        template: require('html-webpack-template'),
        minify: true,
        cache: true,
        mobile: true,
        title: '~ WELCOME ~',
        meta: [
          {
            charset: 'UTF-8'
          },
          {
            name: 'author',
            content: 'Steven Chung'
          },
          {
            name : 'description',
            content: 'Portfolio Site'
          },
          {
            name: 'theme-color',
            content: '#000000'
          }
        ],
        links: ["https://fonts.googleapis.com/css?family=Montserrat"
        ],
        appMountId: 'main',
        bodyHtmlSnippet: '<noscript>Please enable JavaScript...</noscript>'
      }),
      new WebpackPwaManifest({
        inject: true,
        filename: '/assets/manifest.json',
        name: 'SC Portfolio PWA',
        short_name: 'SC PWA',
        description: 'My Progressive Web App Portfolio!',
        display: 'standalone',
        start_url: 'index.html',
        theme_color: '#ffffff',
        background_color: '#000000',
        crossorigin: null, //can be null, use-credentials or anonymous
        icons: [
          {
            src: './src/assets/profile.png',
            sizes: [512],
            destination: '/assets'
          }
        ],
      }),
      new WorkboxPlugin.GenerateSW({
        swDest: '/assets/service-worker.js',
        clientsClaim: true,
        skipWaiting: true,
        include: [/\.html$/, /\.js$/, /\.css$/],
        precacheManifestFilename: '/assets/sc-manifest.[manifestHash].js',
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
              presets: ['@babel/preset-react', '@babel/preset-env'],
              cacheDirectory: true
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
          test: /\.(woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '/fonts/[name].[ext]'
            }
          }
        },
        {
          test: /\.(jpe?g|png|gif|svg)(\?[a-z0-9=.]+)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '/img/[name].[ext]'
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
        },
      ]
    },
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      path: __dirname + '/dist'
    }
  }
};
