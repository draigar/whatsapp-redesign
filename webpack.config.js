const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    entry: './www/src/index.js',
    output: {
        path: path.resolve(__dirname, 'www/js'),
        filename: './app.js'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js',
            '@': __dirname + '/www'
        }
    }
};