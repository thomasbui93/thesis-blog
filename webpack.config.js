
'use strict';

var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    OpenBrowserPlugin = require('open-browser-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    bemLinter = require('postcss-bem-linter');

module.exports ={

    target: 'web',
    cache: true,
    entry: {
        module: path.join(srcPath, 'index.js'),
        common: ['react', 'react-router', 'alt', 'react-dom', 'superagent']
    },
    resolve: {
        root: srcPath,
        extensions: ['', '.js', '.scss'],
        modulesDirectories: ['node_modules', 'src']
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '',
        filename: '[name].js',
        pathInfo: true
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./src/sass")]
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
        ],
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules|bower_components)/,
                loader:'babel?presets[]=react,presets[]=es2015'
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader!postcss-loader")
            },
            { test: /rx\.aggregates\.js$/, loader: "imports?define=>false"},
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css", {
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html'
        }),

        new webpack.optimize.OccurenceOrderPlugin( true ),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['require', 'export', '$super']
            },
            compress: {
                warnings: false,
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['require', 'export', '$super']
            },
            compress: {
                warnings: false,
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true
            },
            minimize: true
        }),

        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin()
    ],
    debug: false,
    devtool: 'source-map',
    devServer: {
        contentBase: './public',
        historyApiFallback: true
    }
};