var webpack = require('webpack');
var path = require('path')

var baseConfig = {
    entry: './src/index.js',
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                // edit this for additional asset file types
                test: /\.(png|jpg|gif)$/,
                loader: 'file?name=[name].[ext]?[hash]'
            }
        ],
    },
    output: {
        path: './',
        filename: "main.js",
        library: ["VueNotification"],
        libraryTarget: "umd"
    }
};

/**
 *  npm config allows vue-seo be distributed
 *  as an npm package without double-requiring vue
 * */

module.exports = [
    baseConfig,
];


if (process.env.NODE_ENV === 'production') {
    console.log('THIS IS PROD');
    for (var i=0; i<module.exports.length; i++) {
        module.exports[i].plugins = [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new webpack.optimize.OccurenceOrderPlugin()
        ]
    }
} else {
    module.exports.devtool = '#source-map'
}
