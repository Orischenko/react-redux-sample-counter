var path = require('path');

module.exports = {
    devtool: 'source-map',

    entry: [
        './src/App.js'     //с чего начинается приложение, с чего начинать сборку
    ],

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js', //скомпиленный файл
        publicPath: '/static/' //виртуальная папка
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },

            {
                test:   /\.css$/,
                loader: "style!css!autoprefixer?browsers=last 2 versions"
            },

            {
                test: /\.js/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            }
        ]
    }
};