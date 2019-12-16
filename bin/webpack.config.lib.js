const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const path = require(`path`);
const UglifyJsPlugin = require(`uglifyjs-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const nib = require('nib');
const stylusLoader = require('stylus-loader');
const OptimizeCSSAssetsPlugin = require(`optimize-css-assets-webpack-plugin`);
const env = process.env.NODE_ENV;
const local_dirname = path.join(__dirname,'..');

const config = {
  entry: {
    'vue-rt-style-kit-molecules':[path.join(local_dirname, `src`, `index.js`)],
  },
  mode: env,
  externals:['vue','vue-rt-style-kit-atoms','vee-validate'],
  output: {
    path: local_dirname + '/lib',
    filename: 'vue-rt-style-kit-molecules.js',
    library: 'vue-rt-style-kit-molecules',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: 'babel-loader!ts-loader',
        exclude: /node_modules/,

      },
      {
        test: /\.ts$/,
        loader: 'babel-loader!ts-loader',
        exclude: /node_modules/,

      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: `vue-loader`,
            options: {
              transformAssetUrls: {
                source: './src/',
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
            ],
      },
      {
        test: /\.js$/,
        loader: `babel-loader`,
        include: [path.join(local_dirname, `src`)],
      },
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani|eot|svg)$/,
        loader: `url-loader`,
        options: {
          name: `[name].[hash:20].[ext]`,
          limit: 10000,
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),


    new stylusLoader.OptionsPlugin({
      default: {
        use: [nib()],
        import: ['~nib/lib/nib/index.styl']
      }
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin()

  ]
};




module.exports = config;
