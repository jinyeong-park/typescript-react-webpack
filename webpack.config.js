const HtmlWebpackPlugin = require('html-webpack-plugin');
// add script tag inside dist/index.html body section  after build command

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
};