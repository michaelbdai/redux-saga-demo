const config = require('./webpack.shared.config.js');
const path = require("path");

module.exports = Object.assign({}, config, {
    entry: {
        app: 'app/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: "/assets/"
    }
});
