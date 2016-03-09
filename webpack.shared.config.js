const webpack = require('webpack');
const path = require('path');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel?presets[]=react&presets[]=es2015&presets[]=stage-0&plugins[]=transform-decorators-legacy&plugins[]=transform-object-rest-spread'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
            }
        ]
    },

    resolve: {
        root: [path.resolve(__dirname, 'js')],
        modulesDirectories: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
    ]
};
