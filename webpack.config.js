const HtmlWebpackPlugin = require('html-webpack-plugin');
// add script tag inside dist/index.html body section  after build command

module.exports = {
    entry: "./src/index.ts",
    resolve: {
        extensions: ['.js', ',ts', '.tsx'],
    },
    module: {
        rules: [{
            test: /\.tsx?$/, 
            loader: "ts-loader",
            exclude: /node_modules/,
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
};